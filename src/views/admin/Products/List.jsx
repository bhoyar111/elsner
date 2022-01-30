import React, { useState, useEffect } from 'react';
import { CCard, CCardBody, CCardHeader, CCol, CRow, CButton } from '@coreui/react';
import { useParams } from "react-router-dom";

import PageHeader from '../../../containers/PageHeader';
import { AuthApi } from '../../../utils/api';

import { toast } from 'react-toastify';
import Pagination from "react-js-pagination";

import TableTr from './TableTr';

export default function List() {

    const [totalRecords, setTotalRecords] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(1);

    const [ products, setProducts ] = useState([]);

    const getListing = async (pgNO) => {
        try {
            const listResponse = await AuthApi.get(`/admin/products?pageNo=${pgNO}`);
            const { status, data } = listResponse;
            if( status === 200 && data.products !== undefined ){
              setProducts(data.products);
              const { pageData:{per_page, total_record} } = data || {};
              setPerPage(per_page);
              setTotalRecords(total_record);
          }
        } catch (e) {
            console.log(`😱 Axios request failed: ${e}`);
        }
    }

    const deleteData = async (id) => {
        try {
            const deleteResponse = await AuthApi.delete(`/admin/product-delete/${id}`);
            const { status, data } = deleteResponse;
            if( status === 200 && data.product !== undefined ){
                toast.success(`Product deleted successfully`);
                getListing(currentPage);
            }
        } catch (e) {
            console.log(`😱 Axios request failed: ${e}`);
        }
    }

    const getClickedPageNo = (pageNumber) => {
        setCurrentPage(pageNumber);
        getListing(pageNumber);
    }

    useEffect(() => {
        getListing(currentPage)
    }, []);

    return (
        <>
            <CRow>
                <CCol xl={12}>
                    <CCard>
                        <CCardHeader>
                            <PageHeader
                                title="Product Listing"
                                addlink={`product-add`}
                            />
                        </CCardHeader>
                        <CCardBody>
                            <table className="table bg-white white-table library-table mb-0">
                                <thead>
                                    <tr>
                                        <th scope="col" className="text-center">Sr. No</th>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Packing</th>
                                        <th scope="col">Price</th>
                                        <th scope="col" className="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    products && products.map((productcat, i) => (
                                        <TableTr
                                            sr={i+1}
                                            key={i}
                                            productcat={productcat}
                                            deleteData={deleteData}
                                            currentPage={currentPage}
                                            perPage={perPage}
                                        />
                                    ))
                                }
                                </tbody>
                            </table>
                            <div className="d-flex flex-row py-4 justify-content-center">
                                <Pagination
                                    activePage={currentPage}
                                    prevPageText='prev'
                                    nextPageText='next'
                                    itemClass="page-item"
                                    linkClass="page-link"
                                    pageRangeDisplayed={5}
                                    itemsCountPerPage={perPage}
                                    totalItemsCount={totalRecords}
                                    onChange={getClickedPageNo}
                                />
                            </div>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>
    )
}

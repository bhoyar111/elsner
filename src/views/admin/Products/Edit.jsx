import React, { useState, useEffect } from 'react';
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react';
import { useParams } from "react-router-dom";

import { AuthApi } from '../../../utils/api';
import { toast } from 'react-toastify';

import useForm from '../../../useForm';
import validate from '../../../validate/validateProduct';

import PageHeader from '../../../containers/PageHeader';

import FormDesign from './FormDesign';

export default function Edit(props) {

    const { id } = useParams();

    const getEditData = async () => {
        try {
            const getResponse = await AuthApi.get(`/admin/product-get/${id}`);
            const { status, data } = getResponse;
            if( status === 200 && data.product !== undefined ){
                const { product } = data;
                for (let [key] of Object.entries(formInputObj)) {
                    formInputObj[key] = product[key];
                }
                setValues({ ...formInputObj });
            }
        } catch (e) {
            console.log(`😱 Axios request failed: ${e}`);
        }
    }

    const submit = async () => {
        try {
            const formData = new FormData();
            for ( let [key] of Object.entries(values) ) {
                formData.append(key, values[key]);
            }
            const editResponse = await AuthApi.put(`/admin/product-update/${id}`, formData);
            const { status, data } = editResponse;
            if( status === 201 && data.product !== undefined ){
                toast.success(`Product edit successfully`);
                props.history.push(`/products`);
            }
        } catch (e) {
            console.log(`😱 Axios request failed: ${e}`);
            // setErrors
            const { response } = e;
            if(response !== undefined && Object.keys(response.data).length && response.data.error !== undefined ){
                setErrors(response.data.error); // if error from server side
            }
        }
    }

    const formInputObj = {
        product_name        : "",
        price               : "",
        weight              : "",
        description         : "",
        doc_url             : ""
    };

    const { handleChange, handleSubmit, values, errors, setErrors, setValues } = useForm(
        submit,
        validate,
        formInputObj
    );

    useEffect(() => {
        getEditData();
    }, []);

    return (
        <CRow>
            <CCol xl={12}>
                <CCard>
                    <CCardHeader>
                        <PageHeader
                            title="Product Edit"
                            backlink= "products"
                        />
                    </CCardHeader>
                    <CCardBody>
                        <FormDesign
                            handleSubmit={handleSubmit}
                            handleChange={handleChange}
                            setValues={setValues}
                            values={values}
                            errors={errors}
                        />
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

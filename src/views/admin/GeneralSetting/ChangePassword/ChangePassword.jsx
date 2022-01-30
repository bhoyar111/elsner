import React, { useContext } from 'react';
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react';

import { AuthApi } from '../../../../utils/api';
import { toast } from 'react-toastify';
import { useParams } from "react-router-dom";

import useForm from '../../../../useForm';
import { UserContext } from '../../../../UserContext';
import validate from '../../../../validate/validateChangePassword';
import PageHeader from '../../../../containers/PageHeader';

import FormDesign from './FormDesign';

export default function ChangePassword() {

    const { user, setUser } = useContext(UserContext);

    const { id } = useParams();

    const submit = async () => {
        try {

            const getUserResponse = await AuthApi.post(`/admin/change-password/${id}`, values);
            const { status, data } = getUserResponse;
            if( status === 201 && data.user !== undefined ){

                toast.success(`Password successfully Change`);
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
        password          : "",
        new_password      : "",
        confirm_password  :""
    };

    const { handleChange, handleSubmit, values, errors, setErrors, setValues } = useForm(
        submit,
        validate,
        formInputObj
    );

    return (
        <CRow>
            <CCol xl={12}>
                <CCard>
                    <CCardHeader>
                        <PageHeader
                            title="Change Password"
                            backlink="/"
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

import React, { useState, useEffect } from 'react';
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react';
import { useParams } from "react-router-dom";

import { AuthApi } from '../../../utils/api';
import { toast } from 'react-toastify';

import useForm from '../../../useForm';
import validate from '../../../validate/validateUser';

import PageHeader from '../../../containers/PageHeader';

import FormDesign from './FormDesign';

export default function Edit(props) {

    const { id } = useParams();

    const getEditData = async () => {
        try {
            const getResponse = await AuthApi.get(`/admin/user-get/${id}`);
            const { status, data } = getResponse;
            if( status === 200 && data.user !== undefined ){
                const { user } = data;
                for (let [key] of Object.entries(formInputObj)) {
                    if(key !== 'password') formInputObj[key] = user[key];
                }
                formInputObj.eid = true;
                setValues({ ...formInputObj });

            }
        } catch (e) {
            console.log(`😱 Axios request failed: ${e}`);
        }
    }

    const submit = async () => {
        try {
            delete values.eid; // remove eid from values object
            const editResponse = await AuthApi.put(`/admin/user-update/${id}`, values);
            const { status, data } = editResponse;
            if( status === 201 && data.user !== undefined ){
                toast.success(`User edit successfully`);
                props.history.push("/users");
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
        first_name  : "",
        middle_name : "",
        last_name   : "",
        email_id    : "",
        mobile_no   : "",
        // profile_img : "",
        password    : "",
        role_id     : ""
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
                            title="Edit"
                            backlink="users"
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

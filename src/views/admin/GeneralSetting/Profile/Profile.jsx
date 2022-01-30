import React, { useState, useEffect }  from 'react';
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react';

import { AuthApi } from '../../../../utils/api';
import { toast } from 'react-toastify';
import { useParams } from "react-router-dom";

import useForm from '../../../../useForm';
import validate from '../../../../validate/validateUpdateProfile';
import PageHeader from '../../../../containers/PageHeader';

import FormDesign from './FormDesign';

export default function Profile() {

    const { id } = useParams();

    const [roles, setRoles] = useState([]);

    const getDs = async () => {
      try {
          const listResponse = await AuthApi.get("/admin/users-ds");
          const { status, data } = listResponse;
          if( status === 200 && data.roles !== undefined ){
              setRoles(data.roles);
          }
      } catch (e) {
          console.log(`😱 Axios request failed: ${e}`);
      }
  }

    const submit = async () => {
        try {

            const getUpdateProfile = await AuthApi.post(`/admin/profile-update/${id}`, values);
            const { status, data } = getUpdateProfile;
            if( status === 201 && data.user !== undefined ){
              toast.success(`User details edit successfully`);
              // props.history.push("/users");
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
        last_name   : "",
        email_id    : "",
        mobile_no   : "",
        role_id     : ""
        // img_url     : ""
    };

    const { handleChange, handleSubmit, values, errors, setErrors, setValues } = useForm(
        submit,
        validate,
        formInputObj
    );

    useEffect(() => {
      getDs();
  }, [])
    return (
        <CRow>
            <CCol xl={12}>
                <CCard>
                    <CCardHeader>
                        <PageHeader
                            title="Profile Update"
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
                            // roles={roles}
                        />
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

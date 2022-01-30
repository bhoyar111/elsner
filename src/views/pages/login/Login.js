import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { CButton, CCard, CCardBody, CCardGroup, CCol, CContainer, CForm, CInput, CInputGroup, CInputGroupPrepend, CInputGroupText, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react';
import { UserContext } from '../../../UserContext';
import useForm from '../../../useForm';
import { GuestApi } from '../../../utils/api';
import validate from '../../../validate/validateLogin';
import { toast } from 'react-toastify';

const Login = () => {
    let history = useHistory();

    const { setUser } = useContext(UserContext);

    const submit = async () => {
        try {
            const response = await GuestApi.post(`/admin/login`, values);
            const { status, data } = response;
            if( status === 200 && data.token !== undefined && Object.keys(data.token).length ){
                setUser(data);
                localStorage.setItem('user_data', `${JSON.stringify(data)}`);
                history.push("/");
                window.location.reload();
            }
        } catch (e) {
            const { response } = e;
            if( response !== undefined && Object.keys(response.data).length && response.data.error !== undefined ){
                setErrors(response.data.error); // if error from server side
            }else{
                toast.error(`😱 Axios request failed: ${e}`);
            }
        }
    }

    const formObj = { email_id: "", password: "" };
    const { handleChange, handleSubmit, values, errors, setErrors } = useForm(
        submit,
        validate,
        formObj
    );

    return (
        <div className="c-app c-default-layout flex-row align-items-center">
            <CContainer>
                <CRow className="justify-content-center">
                    <CCol md="4">
                        <CCardGroup>
                            <CCard className="p-4">
                                <CCardBody>
                                    <CForm onSubmit={handleSubmit} noValidate>
                                        <h1>Login</h1>
                                        <p className="text-muted">Sign In to your account</p>
                                        <CInputGroup className="mb-3">
                                            <CInputGroupPrepend>
                                                <CInputGroupText>
                                                <CIcon name="cil-user" />
                                                </CInputGroupText>
                                            </CInputGroupPrepend>
                                            <CInput 
                                                type="text" 
                                                placeholder="Username" 
                                                autoComplete="username"
                                                name="email_id"
                                                value={values.email_id}
                                                onChange={handleChange} 
                                            />
                                        </CInputGroup>
                                        {errors.email_id && <small className="text-warning">{errors.email_id}</small>}
                                        <CInputGroup className="mb-4">
                                            <CInputGroupPrepend>
                                                <CInputGroupText>
                                                <CIcon name="cil-lock-locked" />
                                                </CInputGroupText>
                                            </CInputGroupPrepend>
                                            <CInput 
                                                type="password" 
                                                placeholder="Password" 
                                                autoComplete="current-password" 
                                                name="password"
                                                value={values.password}
                                                onChange={handleChange}
                                            />
                                        </CInputGroup>
                                        {errors.password && <small className="text-warning">{errors.password}</small>}
                                        <CRow>
                                            <CCol xs="6">
                                                <CButton  type="submit" color="primary" className="px-4">Login</CButton>
                                            </CCol>
                                            <CCol xs="6" className="text-right">
                                                {/* <CButton color="link" className="px-0">Forgot password?</CButton> */}
                                                {/* <Link to="/forget-password" title="forget-password" className="px-0">Forgot Password ?</Link> */}
                                            </CCol>
                                        </CRow>
                                    </CForm>
                                </CCardBody>
                            </CCard>
                        </CCardGroup>
                    </CCol>
                </CRow>
            </CContainer>
        </div>
    )
}

export default Login

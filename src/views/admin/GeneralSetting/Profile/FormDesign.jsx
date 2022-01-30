import React from 'react';
import {  FormControl, InputLabel, Select, MenuItem, TextField, Button } from '@material-ui/core';
import { Col, Row, Form } from 'react-bootstrap';

export default function FormDesign(props) {

    const { handleSubmit, handleChange, values, errors, roles } = props;

    return (
        <>
            <Form onSubmit={handleSubmit} noValidate>
                <Row>
                    <Form.Group as={Col} xs={12} md={6} lg={4} xl={4}>
                        <TextField
                            id="FirstName"
                            label="First Name"
                            variant="outlined"
                            size="small"
                            name="first_name"
                            value={values.first_name}
                            onChange={handleChange}
                        />
                        {errors.first_name && <small className="text-danger">{errors.first_name}</small>}
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={6} lg={4} xl={4}>
                        <TextField
                            id="MiddleName"
                            label="Middle Name"
                            variant="outlined"
                            size="small"
                            name="middle_name"
                            value={values.middle_name}
                            onChange={handleChange}
                        />
                        {errors.middle_name && <small className="text-danger">{errors.middle_name}</small>}
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={6} lg={4} xl={4}>
                        <TextField
                            id="LastName"
                            label="Last Name"
                            variant="outlined"
                            size="small"
                            name="last_name"
                            value={values.last_name}
                            onChange={handleChange}
                        />
                        {errors.last_name && <small className="text-danger">{errors.last_name}</small>}
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={6} lg={4} xl={4}>
                        <TextField
                            id="Email"
                            label="Email"
                            variant="outlined"
                            size="small"
                            name="email_id"
                            value={values.email_id}
                            onChange={handleChange}
                        />
                        {errors.email_id && <small className="text-danger">{errors.email_id}</small>}
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={6} lg={4} xl={4}>
                        <TextField
                            id="Mobile"
                            label="Mobile no."
                            variant="outlined"
                            size="small"
                            name="mobile_no"
                            value={values.mobile_no}
                            onChange={handleChange}
                        />
                        {errors.mobile_no && <small className="text-danger">{errors.mobile_no}</small>}
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={6} lg={4} xl={4}>
                        <TextField
                            id="UserProfile"
                            label="User Profile"
                            variant="outlined"
                            size="small"
                            name="profile_img"
                            value={values.profile_img}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={6} lg={4} xl={4}>
                        <FormControl variant="outlined" size="small">
                            <InputLabel id="role">Role</InputLabel>
                            <Select
                                labelId="role"
                                id="role"
                                label="Role"
                                name="role_id"
                                value={values.role_id}
                                onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {roles && roles.map((role, i) =>
                                    <MenuItem key={i} value={role.id}>{role.role_name}</MenuItem>
                                )}
                            </Select>
                            {errors.role_id && <small className="text-danger">{errors.role_id}</small>}
                        </FormControl>
                    </Form.Group>
                    <Col xs={12} className="mt-3">
                        <Button type="submit" variant="contained" color="primary" className="black-btn-mui text-white py-2 px-4 mb-4">
                            Save
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

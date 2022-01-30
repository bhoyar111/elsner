import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { Col, Row, Form } from 'react-bootstrap';

export default function FormDesign(props) {

    const { handleSubmit, handleChange, values, errors } = props;

    return (
        <>
            <Form onSubmit={handleSubmit} noValidate>
                <Row>
                    <Form.Group as={Col} xs={12} md={6} lg={4} xl={4}>
                        <TextField
                            id="Password"
                            label="Password"
                            variant="outlined"
                            size="small"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                        />
                        {errors.password && <small className="text-danger">{errors.password}</small>}
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={6} lg={4} xl={4}>
                        <TextField
                            id="NewPassword"
                            label="New Password"
                            variant="outlined"
                            size="small"
                            name="new_password"
                            value={values.new_password}
                            onChange={handleChange}
                        />
                        {errors.new_password && <small className="text-danger">{errors.new_password}</small>}
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={6} lg={4} xl={4}>
                        <TextField
                            id="ConfirmPassword"
                            label="Confirm Password"
                            variant="outlined"
                            size="small"
                            name="confirm_password"
                            value={values.confirm_password}
                            onChange={handleChange}
                        />
                        {errors.confirm_password && <small className="text-danger">{errors.confirm_password}</small>}
                    </Form.Group>
                   
                    <Col xs={12} className="mt-3">
                        {/* <Button variant="contained" color="primary" className="orange-btn-mui text-white py-2 px-4 mb-4 mr-3">
                            Reset
                        </Button> */}
                        <Button type="submit" variant="contained" color="primary" className="text-white">
                            Save
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

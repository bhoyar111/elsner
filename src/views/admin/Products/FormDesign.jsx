import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { Col, Row, Form } from 'react-bootstrap';

export default function FormDesign(props) {

    const { handleSubmit, handleChange, values, setValues, errors } = props;

    const [displayUrl, setDisplayUrl] = useState('');

    const handleImgChange = (event) => {
        const { files, name } = event.target;
        let newUrl = ''
        let newSelectedFile = '';
        if (files && files.length) {
            const selectedFile = files[0];
            newUrl = URL.createObjectURL(selectedFile);
            newSelectedFile = selectedFile;
        }
        setDisplayUrl(newUrl);
        setValues({
            ...values,
            [name]: newSelectedFile
        });
    }

    return (
        <>
            <Form onSubmit={handleSubmit} noValidate>
                <Row>
                <Form.Group as={Col} xs={12} md={6} lg={4} xl={4}>
                        <TextField
                            id="ProductName"
                            label="Product Name"
                            variant="outlined"
                            size="small"
                            name="product_name"
                            value={values.product_name}
                            onChange={handleChange}
                        />
                        {errors.product_name && <small className="text-danger">{errors.product_name}</small>}
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={6} lg={4} xl={4}>
                        <TextField
                            id="Packing"
                            label="Packing"
                            variant="outlined"
                            size="small"
                            name="weight"
                            value={values.weight}
                            onChange={handleChange}
                        />
                        {errors.weight && <small className="text-danger">{errors.weight}</small>}
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={6} lg={4} xl={4}>
                        <TextField
                            id="ProductPrice"
                            label="Product Price"
                            variant="outlined"
                            size="small"
                            name="price"
                            value={values.price}
                            onChange={handleChange}
                        />
                        {errors.price && <small className="text-danger">{errors.price}</small>}
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={6} lg={4} xl={8}>
                        <TextField
                            id="ProductPrice"
                            label="Description"
                            variant="outlined"
                            size="small"
                            name="description"
                            value={values.description}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={6} lg={4} xl={4}>
                        <div className="custom-file upload">
                            <input
                                type="file"
                                className="custom-file-input shadow-none"
                                id="inputGroupFile02"
                                name="doc_url"
                                onChange={handleImgChange}
                            />
                            <label
                                className="custom-file-label mb-0 shadow-none"
                                htmlFor="inputGroupFile02"
                                aria-describedby="inputGroupFileAddon02"
                            >
                                Product Image
                            </label>
                        </div>
                        <div className="custom-file upload text-right">
                            {displayUrl &&
                                <a href={displayUrl} target="_blank">View</a>
                            }
                        </div>
                    </Form.Group>
                    <Col xs={12} className="mt-3">
                        <Button type="submit" variant="contained" size="small" color="primary" className="text-white">
                            Save
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

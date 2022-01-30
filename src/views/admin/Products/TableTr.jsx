import React from 'react';
import { Button } from '@material-ui/core';

import useConfirm from '../../../utils/useConfirm';
import { getEncryptId } from '../../../utils/secure';

export default function TableTr(props) {

    const { id, product_name, price, weight } = props.productcat;

    const { sr, deleteData, currentPage, perPage } = props;

    const encId = getEncryptId(id);

    const editLink = `product-edit/${encId}`

    const deleteSubmit = (closeDialog) => {
        deleteData(encId)
        closeDialog();
    }

    const { showDialog } = useConfirm(deleteSubmit, 'Product');

    const newSr = ((currentPage - 1) * perPage) + sr;

    return (
            <tr>
                <td className="text-center">{newSr}</td>
                <td>{product_name}</td>
                <td>{weight}</td>
                <td>{price}</td>
                <td className="text-center">
                    <Button
                        href={`/#/${editLink}`}
                        size="small"
                        variant="contained"
                        className="grey-btn-mui mr-3"
                        >
                        Edit
                    </Button>
                    <Button
                        size="small"
                        variant="contained"
                        color="secondary"
                        className="black-btn-mui mr-3"
                        onClick={showDialog}
                        >
                        Delete
                    </Button>
                </td>
            </tr>
    )
}


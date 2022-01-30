import React from 'react';
import { Button } from '@material-ui/core';

import useConfirm from '../../../utils/useConfirm';
import { getEncryptId } from '../../../utils/secure';

export default function TableTr(props) {

    const { id, first_name, middle_name, last_name, email_id, mobile_no } = props.user;

    const { sr, deleteData, currentPage, perPage } = props;

    const name = `${first_name} ${middle_name}  ${last_name}`;

    const encId = getEncryptId(id);

    const editLink = `user-edit/${encId}`;

    const deleteSubmit = (closeDialog) => {
        deleteData(encId)
        closeDialog();
    }

    const { showDialog } = useConfirm(deleteSubmit, 'User');

    const newSr = ((currentPage - 1) * perPage) + sr;

    return (
            <tr>
                <td className="text-center">{newSr}</td>
                <td>{name}</td>
                <td>{email_id}</td>
                <td>{mobile_no}</td>
                <td>
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


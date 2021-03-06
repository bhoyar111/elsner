import React from "react";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const useConfirm = (callback, message) => {

    const showDialog = () => {
        confirmAlert({
            customUI: ({ onClose }) => {
              return (
                <div className='custom-ui'>
                    <h1>Are you sure?</h1>
                    <p>You want to delete this {message}?</p>
                    <button onClick={onClose}>No</button>
                    <button
                        onClick={() => {
                            callback(onClose);
                        }}
                    >
                        Yes, Delete it!
                    </button>
                </div>
              );
            }
        });
    }

    return {
        showDialog
    };
}

export default useConfirm;
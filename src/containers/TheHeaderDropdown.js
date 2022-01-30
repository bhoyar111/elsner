import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import { CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, CImg } from '@coreui/react';

import { UserContext } from '../UserContext';
import { GuestApi } from '../utils/api';

const TheHeaderDropdown = () => {

    let history = useHistory();

    const { user, setUser} = useContext(UserContext);

    const handleLogout = async () => {
        try {
            const { token } = user;
            await GuestApi.post("/admin/logout", token);
        } catch (e) {
            const { response } = e;
            console.log(`😱 Axios request failed: ${response}`);
        }
        // in any case user data must be removed from client side
        localStorage.removeItem('user_data');
        setUser(null);
        history.push("/login");
        window.location.reload();
    };

  return (
        <CDropdown
            inNav
            className="c-header-nav-items mx-2"
            direction="down"
        >
        <CDropdownToggle className="c-header-nav-link" caret={false}>
            <div className="c-avatar">
                <h6>Admin</h6>
            {/* <CImg
                src={'avatars/6.jpg'}
                className="c-avatar-img"
                alt="admin@bootstrapmaster.com"
            /> */}
            </div>
        </CDropdownToggle>
        <CDropdownMenu className="pt-0" placement="bottom-end">
            <CDropdownItem>
                <button
                    className="dropdown-item"
                    type="button"
                    onClick={handleLogout}
                >
                    Log Out
                </button>
            </CDropdownItem>
            
        </CDropdownMenu>
        </CDropdown>
    )
}

export default TheHeaderDropdown

import React from 'react'
import { TheContent, TheSidebar,TheHeader } from './index'
import { Redirect } from 'react-router-dom';

const TheLayout = () => {

    let userLocalStorage = null;

    if(localStorage.getItem('user_data') != null){
		userLocalStorage = JSON.parse(localStorage.getItem('user_data'));
    }

    if(userLocalStorage == null) return <Redirect to='/login' />;

  return (
        <div className="c-app c-default-layout">
            <TheSidebar/>
            <div className="c-wrapper">
                <TheHeader/>
                <div className="c-body">
                <TheContent/>
                </div>
                {/* <TheFooter/> */}
            </div>
        </div>
    )
}

export default TheLayout

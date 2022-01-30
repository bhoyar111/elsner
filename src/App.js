import React,{ lazy, useState, useMemo, Suspense } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer, Flip } from 'react-toastify';
import { UserContext } from './UserContext';
import './scss/style.scss';

// const loading = (
//   <div className="pt-3 text-center">
//     <div className="sk-spinner sk-spinner-pulse"></div>
//   </div>
// )

// Containers
const TheLayout = lazy(() => import('./containers/TheLayout'));
// Pages
const Login     = lazy(() => import('./views/pages/login/Login'));
const Page404   = lazy(() => import('./views/pages/page404/Page404'));
const Page500   = lazy(() => import('./views/pages/page500/Page500'));

export default function App () {

    let userLocalStorage = null;

    if(localStorage.getItem('user_data') != null){
          userLocalStorage = JSON.parse(localStorage.getItem('user_data'));
    }

    const [user, setUser] = useState(userLocalStorage);

    const value = useMemo(() => ({ user, setUser }), [user, setUser]);

    const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

     return (
          <>
          <HashRouter>
               <Suspense fallback={loading()}>
                    <Switch>
                         <UserContext.Provider value={value}>
                              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
                              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
                              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
                              <Route  path="/" name="Home" render={props => <TheLayout {...props}/>} />
                         </UserContext.Provider>
                    </Switch>
               </Suspense>
          </HashRouter>
          <ToastContainer
                draggable={false}
                position="top-center"
                transition={Flip}
                autoClose={3000}
                pauseOnHover={true}
            />
        </>
     );
}


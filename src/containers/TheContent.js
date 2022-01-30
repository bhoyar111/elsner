import React, { Suspense, useState, useMemo } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import { UserContext } from '../UserContext';
import { CContainer, CFade } from '@coreui/react'

// routes config
import routes from '../routes'
  
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const TheContent = () => {
   
    let userLocalStorage = null;

    if(localStorage.getItem('user_data') != null){
		userLocalStorage = JSON.parse(localStorage.getItem('user_data'));
    }

    const [user, setUser] = useState(userLocalStorage);

    const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
        <main className="c-main">
            <CContainer fluid>
                <Suspense fallback={loading}>
                    <Switch>
                        <UserContext.Provider value={value}>
                            {routes.map((route, idx) => {
                                return route.component && (
                                    <Route
                                        key={idx}
                                        path={route.path}
                                        exact={route.exact}
                                        name={route.name}
                                        render={props => (
                                            <CFade>
                                            <route.component {...props} />
                                            </CFade>
                                    )} />
                                )
                            })}
                            <Redirect  to="/" />
                        </UserContext.Provider>
                    </Switch>
                </Suspense>
            </CContainer>
        </main>
    )
}

export default React.memo(TheContent)

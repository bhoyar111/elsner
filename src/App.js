import React, { Suspense } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { UserContext } from './UserContext';
import routes from './routes';

function App() {

	const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

	return (
		<>
			<Router>
				<Suspense fallback={loading()}>
					<Switch>
						<UserContext.Provider>
							{routes.map((route, idx) => {
								return route.component ? (
								<Route
									key={idx}
									path={route.path}
									exact={route.exact}
									name={route.name}
									component={route.component}
								/>
								) : (null);
							})}
						</UserContext.Provider>
					</Switch>
				</Suspense>
			</Router>
		</>
	);
}

export default App;
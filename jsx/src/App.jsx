import { Backdrop, CircularProgress } from '@mui/material';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

import { Suspense, lazy } from 'react';

const Main = lazy(() => import('./pages/main'));
const Login = lazy(() => import('./components/Login'));
const ListLuuTru = lazy(() => import('./pages/list_luuTru'));
const ListKhachSan = lazy(() => import('./pages/list_khachSan'));
const DetailEndow = lazy(() => import('./pages/detailEndow'));

function App() {
	return (
		<>
			<Router>
				<Suspense
					fallback={
						<Backdrop
							open
							style={{
								zIndex: 10000,
							}}
							className="flex items-center justify-center"
						>
							<CircularProgress />
						</Backdrop>
					}
				>
					<Routes>
						<Route
							path="/"
							element={<Main />}
						/>
						<Route
							path="/trangchu/*"
							element={<Main />}
						/>
						<Route
							path="/login"
							element={<Login />}
						/>

						<Route
							path="/luuTru/"
							element={<Main />}
						/>
						<Route
							path="/luuTru/:id"
							element={<ListLuuTru />}
						/>

						<Route
							path="/khachSan/"
							element={<Main />}
						/>
						<Route
							path="/khachSan/:id"
							element={<ListKhachSan />}
						/>
						<Route
							path="/detailendow"
							element={<DetailEndow />}
						/>
					</Routes>
				</Suspense>
			</Router>
		</>
	);
}

export default App;

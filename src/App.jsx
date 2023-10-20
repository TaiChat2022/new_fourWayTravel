// import Loading from '@/components/Loading';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './utils/routes';


const Listluutru = lazy(() => import('@/layout/listluutru'));
const Favourite = lazy(() => import('@/layout/favourite'));
const Main = lazy(() => import('@/pages/index'));
const Login = lazy(() => import('@/auth/Login'));

export default function App() {
	return (
		<Suspense fallback={<div />}>
			<Routes>
				<Route
					path={routes.HOME}
					element={<Main />}
				></Route>
				<Route
					path={routes.LOGIN}
					element={<Login />}
				/>
				<Route
					path={routes.Favourite}
					element={<Favourite />}
				/>
				<Route
					path={routes.Listluutru}
					element={<Listluutru />}
				/>
			</Routes>
		</Suspense>
	);
}

// import Loading from '@/components/Loading';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './utils/routes';

const Main = lazy(() => import('@/pages/index'))
const Login = lazy(() => import('@/auth/Login'));

export default function App() {
	return (
		<Suspense fallback={<div />}>
			<Routes>
				<Route
					path={routes.HOME}
					element={<Main />}
				>
				</Route>
				<Route
					path={routes.LOGIN}
					element={<Login />}
				/>
			</Routes>
		</Suspense>
	);
}

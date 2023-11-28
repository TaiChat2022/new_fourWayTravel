// import Loading from '@/components/Loading';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './utils/routes';

const Main = lazy(() => import('@/pages/index'))
const Booking = lazy(() => import('@/pages/Booking'))
const ChiTiet = lazy(() => import('@/pages/chiTiet'))
const ListLuutru = lazy(() => import('@/pages/ListLuutru'))
const Favourite = lazy(() => import('@/pages/Favourite'))
const Datphong = lazy(() => import('@/pages/Datphong'));
const UserXemGanDay = lazy(() => import('@/pages/userXemGanDay'));
const LichSuDP = lazy(() => import('@/pages/lichSuDP'));


const Login = lazy(() => import('@/auth/Login'));

export default function App() {
	return (
		<Suspense fallback={
			<Backdrop
				sx={{ zIndex: 1000 }}
				open
			>
				<CircularProgress color="inherit" />
			</Backdrop>
		}>
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
				<Route
					path={routes.BOOKING}
					element={<Booking />}
				/>
				<Route
					path={routes.FILTERLUUTRU}
					element={<Booking />}
				/>
				<Route
					path={routes.CHITIET}
					element={<ChiTiet />}
				/>
				<Route
					path={routes.Favourite}
					element={<Favourite />}
				/>
				<Route
					path={routes.ListLuutru}
					element={<ListLuutru />}
				/>
				<Route
					path={routes.DATPHONG}
					element={<Datphong />}
				/>
				<Route
					path="/chitiet/:id"
					element={<ChiTiet />}
				/>
				<Route
					path={routes.USERXEMGANDAY}
					element={<UserXemGanDay />}
				/>
				<Route
					path={routes.LICHSUDP}
					element={<LichSuDP />}
				/>
			</Routes>
		</Suspense>
	);
}

import { Spin } from 'antd';
import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MainLayout } from '@/layout';
import { routes } from '@/utils/routes';

export default function App() {
	return (
		<Suspense
			fallback={
				<div className="bg-white w-screen h-screen flex items-center justify-center">
					<Spin size="large" />
				</div>
			}
		>
			<Routes>
				<Route
					path="/"
					element={
						<Navigate
							to={routes.HOME}
							replace
						/>
					}
				/>
				<Route
					path={routes.HOME}
					element={<MainLayout />}
				>
					<Route
						index
						element={<>Dashboard</>}
					/>
				</Route>
			</Routes>
		</Suspense>
	);
}

import { Spin } from 'antd';
import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MainLayout } from '@/layout';
import { routes } from '@/utils/routes';

const Products = lazy(() => import('@/pages/products'));
const ProductCategories = lazy(() => import('@/pages/products/categories'));

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

					{/* products */}
					<Route path={routes.PRODUCTS}>
						<Route
							index
							element={<Products />}
						/>
						<Route
							path={routes.PRODUCT_CATEGORIES}
							element={<ProductCategories />}
						/>
					</Route>
					{/* end of products */}
				</Route>
			</Routes>
		</Suspense>
	);
}

import Loading from '@/components/Loading';
import { MainLayout } from '@/layout';
import { routes } from '@/utils/routes';
import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

// products
const Products = lazy(() => import('@/pages/products'));
const ProductsAdd = lazy(() => import('@/pages/products/add'));
const ProductsEdit = lazy(() => import('@/pages/products/edit'));
const ProductCategories = lazy(() => import('@/pages/products/categories'));

// blogs
const Blogs = lazy(() => import('@/pages/blogs'));
const BlogCategories = lazy(() => import('@/pages/blogs/categories'));

const Login = lazy(() => import('@/pages/auth/login'));

export default function App() {
	return (
		<Suspense fallback={<Loading />}>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Loading />
							<Navigate
								to={routes.HOME}
								replace
							/>
						</>
					}
				/>

				{/* dashboard */}
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
							path={routes.PRODUCTS_ADD}
							element={<ProductsAdd />}
						/>
						<Route
							path={routes.PRODUCTS_EDIT}
							element={<ProductsEdit />}
						/>
						<Route
							path={routes.PRODUCT_CATEGORIES}
							element={<ProductCategories />}
						/>
					</Route>
					{/* end of products */}

					{/* blogs */}
					<Route path={routes.BLOGS}>
						<Route
							index
							element={<Blogs />}
						/>
						<Route
							path={routes.BLOG_CATEGORIES}
							element={<BlogCategories />}
						/>
					</Route>
					{/* end of blogs */}
				</Route>
				{/* end of dashboard */}

				{/* auth */}
				<Route
					path={routes.LOGIN}
					element={<Login />}
				/>
				{/* end of auth */}
			</Routes>
		</Suspense>
	);
}

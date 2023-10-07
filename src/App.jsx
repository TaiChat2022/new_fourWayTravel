import Loading from '@/components/Loading';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout';

const Home = lazy(() => import('@/pages/Home'));

export default function App() {
	return (
		<Suspense fallback={<Loading />}>
			<Routes>
				<Route
					path="/"
					element={<Layout />}
				>
					<Route
						index
						element={<Home />}
					/>
				</Route>
			</Routes>
		</Suspense>
	);
}

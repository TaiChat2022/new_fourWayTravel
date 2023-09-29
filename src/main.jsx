import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from '@/stores';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ConfigProvider } from 'antd';
import vi from 'antd/lib/locale/vi_VN';

import 'react-quill/dist/quill.snow.css';
import 'antd/dist/reset.css';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: false,
			suspense: true,
		},
	},
});

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<ConfigProvider locale={vi}>
				<Provider store={store}>
					<QueryClientProvider client={queryClient}>
						<ToastContainer />
						<App />
					</QueryClientProvider>
				</Provider>
			</ConfigProvider>
		</BrowserRouter>
	</React.StrictMode>,
);

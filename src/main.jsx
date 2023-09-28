import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from '@/stores';
import { QueryClient, QueryClientProvider } from 'react-query';

import './index.css';
import { BrowserRouter } from 'react-router-dom';

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
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<App />
				</QueryClientProvider>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
);

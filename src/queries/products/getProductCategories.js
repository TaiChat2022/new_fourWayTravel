import { firestore } from '@/utils/firebase.config';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { map } from 'lodash';
import { useQuery } from 'react-query';

export const useProductCategoriesQuery = (options) =>
	useQuery(['PRODUCT_CATEGORIES', options], async () => {
		let colRef = collection(firestore, 'product-categories');
		let q = colRef;

		if (options?.status) q = query(q, where('status', '==', options.status));

		const response = await getDocs(q);

		return map(response?.docs, (doc) => ({ id: doc.id, ...doc.data() }));
	});

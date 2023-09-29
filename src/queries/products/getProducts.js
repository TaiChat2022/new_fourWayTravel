import { firestore } from '@/utils/firebase.config';
import { collection, getDocs } from 'firebase/firestore';
import { map } from 'lodash';
import { useQuery } from 'react-query';

export const useProductsQuery = () => {
	const productsRef = collection(firestore, 'products');

	return useQuery(['PRODUCTS'], async () => {
		const snapshot = await getDocs(productsRef);

		return map(snapshot.docs, (doc) => ({ id: doc.id, ...doc.data() }));
	});
};

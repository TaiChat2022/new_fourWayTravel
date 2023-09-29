import { firestore } from '@/utils/firebase.config';
import { doc, getDoc } from 'firebase/firestore';
import { isEmpty } from 'lodash';
import { useQuery } from 'react-query';

export const useProductQuery = (id) => {
	return useQuery(['PRODUCTS', id], async () => {
		if (isEmpty(id)) return;

		const productRef = doc(firestore, 'products', id);
		const snapshot = await getDoc(productRef);

		return { id: snapshot.id, ...snapshot.data() };
	});
};

import { firestore } from '@/utils/firebase.config';
import { doc, getDoc } from 'firebase/firestore';
import { useQuery } from 'react-query';

export const useProductCategoryQuery = (id) =>
	useQuery(['PRODUCT_CATEGORIES', id], async () => {
		if (!id) return;

		const docRef = doc(firestore, 'product-categories', id);
		const response = await getDoc(docRef);

		return response.data();
	});

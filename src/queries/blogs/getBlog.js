import { firestore } from '@/utils/firebase.config';
import { doc, getDoc } from 'firebase/firestore';
import { isEmpty } from 'lodash';
import { useQuery } from 'react-query';

export const useBlogQuery = (id) => {
	return useQuery(['BLOGS', id], async () => {
		if (isEmpty(id)) return;

		const productRef = doc(firestore, 'blogs', id);
		const snapshot = await getDoc(productRef);

		return { id: snapshot.id, ...snapshot.data() };
	});
};

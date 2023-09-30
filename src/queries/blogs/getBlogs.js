import { firestore } from '@/utils/firebase.config';
import { collection, getDocs } from 'firebase/firestore';
import { map } from 'lodash';
import { useQuery } from 'react-query';

export const useBlogsQuery = () => {
	const blogsRef = collection(firestore, 'blogs');

	return useQuery(['BLOGS'], async () => {
		const snapshot = await getDocs(blogsRef);

		return map(snapshot.docs, (doc) => ({ id: doc.id, ...doc.data() }));
	});
};

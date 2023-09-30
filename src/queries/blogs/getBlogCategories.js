import { firestore } from '@/utils/firebase.config';
import { collection, getDocs } from 'firebase/firestore';
import { map } from 'lodash';
import { useQuery } from 'react-query';

export const useBlogCategoriesQuery = () =>
	useQuery(['BLOG_CATEGORIES'], async () => {
		let colRef = collection(firestore, 'blog-categories');
		let q = colRef;

		const response = await getDocs(q);

		return map(response?.docs, (doc) => ({ id: doc.id, ...doc.data() }));
	});

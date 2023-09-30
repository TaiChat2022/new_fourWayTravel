import { firestore } from '@/utils/firebase.config';
import { doc, getDoc } from 'firebase/firestore';
import { useQuery } from 'react-query';

export const useBlogCategoryQuery = (id) =>
	useQuery(['BLOG_CATEGORIES', id], async () => {
		if (!id) return;

		const docRef = doc(firestore, 'blog-categories', id);
		const response = await getDoc(docRef);

		return response.data();
	});

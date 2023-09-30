import { firestore } from '@/utils/firebase.config';
import { doc, setDoc } from 'firebase/firestore';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

export const useEditBlogCategoryMutation = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async ({ id, data }) => {
			const docRef = doc(firestore, 'blog-categories', id);

			await setDoc(docRef, data);
		},
		onSuccess: () => {
			toast.success('Cập nhật danh mục thành công!');
			queryClient.invalidateQueries(['BLOG_CATEGORIES']);
		},
		onError: () => toast.error('Cập nhật danh mục thất bại!'),
	});
};

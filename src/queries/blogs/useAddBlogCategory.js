import { firestore } from '@/utils/firebase.config';
import { addDoc, collection } from 'firebase/firestore';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

export const useAddBlogCategoryMutation = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (data) => {
			const colRef = collection(firestore, 'blog-categories');

			await addDoc(colRef, data);
		},
		onSuccess: () => {
			toast.success('Thêm danh mục thành công!');
			queryClient.invalidateQueries(['BLOG_CATEGORIES']);
		},
		onError: () => toast.error('Thêm danh mục thất bại!'),
	});
};

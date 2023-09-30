import { firestore } from '@/utils/firebase.config';
import { deleteDoc, doc } from 'firebase/firestore';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

export const useDeleteBlogCategoryMutation = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (id) => {
			if (!id) return;
			const docRef = doc(firestore, 'blog-categories', id);

			await deleteDoc(docRef);
		},
		onSuccess: () => {
			toast.success('Xóa danh mục  thành công!');
			queryClient.invalidateQueries(['BLOG_CATEGORIES']);
		},
		onError: () => toast.error('Xóa danh mục thất bại!'),
	});
};

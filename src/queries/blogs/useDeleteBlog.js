import { firestore } from '@/utils/firebase.config';
import { deleteDoc, doc } from 'firebase/firestore';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

export const useDeleteBlogMutation = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (id) => {
			if (!id) return;
			const docRef = doc(firestore, 'blogs', id);

			await deleteDoc(docRef);
		},
		onSuccess: () => {
			toast.success('Xóa bài viết thành công!');
			queryClient.invalidateQueries(['BLOGS']);
		},
		onError: () => toast.error('Xóa bài viết thất bại!'),
	});
};

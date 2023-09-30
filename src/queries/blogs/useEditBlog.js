import { firestore } from '@/utils/firebase.config';
import { doc, updateDoc } from 'firebase/firestore';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

export const useEditBlogMutation = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async ({ id, data }) => {
			if (!id) return;
			const docRef = doc(firestore, 'blogs', id);

			await updateDoc(docRef, data);

			return id;
		},
		onSuccess: (id) => {
			toast.success('Cập nhật bài viết thành công!');
			queryClient.invalidateQueries(['BLOGS', id]);
			queryClient.invalidateQueries(['BLOGS']);
		},
		onError: () => toast.error('Cập nhật bài viết thất bại!'),
	});
};

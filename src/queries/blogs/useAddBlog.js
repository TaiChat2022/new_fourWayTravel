import { firestore } from '@/utils/firebase.config';
import { addDoc, collection } from 'firebase/firestore';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

export const useAddBlogMutation = () => {
	const blogRef = collection(firestore, 'blogs');
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (data) => {
			const docRef = await addDoc(blogRef, data);

			return docRef.id;
		},
		onSuccess: () => {
			toast.success('Thêm bài viết thành công');
			queryClient.invalidateQueries(['BLOGS']);
		},
		onError: () => {
			toast.error('Thêm bài viết thất bại');
		},
	});
};

import { firestore } from '@/utils/firebase.config';
import { doc, updateDoc } from 'firebase/firestore';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

export const useEditProductMutation = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async ({ id, data }) => {
			if (!id) return;
			const docRef = doc(firestore, 'products', id);
			await updateDoc(docRef, data);

			return id;
		},
		onSuccess: (id) => {
			toast.success('Cập nhật sản phẩm thành công!');
			queryClient.invalidateQueries(['PRODUCTS', id]);
			queryClient.invalidateQueries(['PRODUCTS']);
		},
		onError: () => toast.error('Cập nhật sản phẩm thất bại!'),
	});
};

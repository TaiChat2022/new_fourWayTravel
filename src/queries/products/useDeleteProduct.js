import { firestore } from '@/utils/firebase.config';
import { deleteDoc, doc } from 'firebase/firestore';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

export const useDeleteProductMutation = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (id) => {
			if (!id) return;
			const docRef = doc(firestore, 'products', id);

			await deleteDoc(docRef);
		},
		onSuccess: () => {
			toast.success('Xóa sản phẩm thành công!');
			queryClient.invalidateQueries(['PRODUCTS']);
		},
		onError: () => toast.error('Xóa sản phẩm thất bại!'),
	});
};

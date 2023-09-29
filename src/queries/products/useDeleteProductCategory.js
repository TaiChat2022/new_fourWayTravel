import { firestore } from '@/utils/firebase.config';
import { deleteDoc, doc } from 'firebase/firestore';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

export const useDeleteProductCategoryMutation = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (id) => {
			if (!id) return;
			const docRef = doc(firestore, 'product-categories', id);

			await deleteDoc(docRef);
		},
		onSuccess: () => {
			toast.success('Xóa danh mục sản phẩm thành công!');
			queryClient.invalidateQueries(['PRODUCT_CATEGORIES']);
		},
		onError: () => toast.error('Xóa danh mục sản phẩm thất bại!'),
	});
};

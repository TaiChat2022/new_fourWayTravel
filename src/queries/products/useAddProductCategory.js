import { firestore } from '@/utils/firebase.config';
import { addDoc, collection } from 'firebase/firestore';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

export const useAddProductCategoryMutation = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (data) => {
			const colRef = collection(firestore, 'product-categories');

			await addDoc(colRef, data);
		},
		onSuccess: () => {
			toast.success('Thêm danh mục sản phẩm thành công!');
			queryClient.invalidateQueries(['PRODUCT_CATEGORIES']);
		},
		onError: () => toast.error('Thêm danh mục sản phẩm thất bại!'),
	});
};

import { firestore } from '@/utils/firebase.config';
import { collection, doc, setDoc } from 'firebase/firestore';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

export const useEditProductCategoryMutation = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async ({ id, data }) => {
			const docRef = doc(firestore, 'product-categories', id);

			await setDoc(docRef, data);
		},
		onSuccess: () => {
			toast.success('Cập nhật danh mục sản phẩm thành công!');
			queryClient.invalidateQueries(['PRODUCT_CATEGORIES']);
		},
		onError: () => toast.error('Cập nhật danh mục sản phẩm thất bại!'),
	});
};

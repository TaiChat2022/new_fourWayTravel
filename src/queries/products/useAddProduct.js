import { firestore } from '@/utils/firebase.config';
import { addDoc, collection } from 'firebase/firestore';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

export const useAddProductMutation = () => {
	const productRef = collection(firestore, 'products');
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (data) => {
			const docRef = await addDoc(productRef, data);

			return docRef.id;
		},
		onSuccess: () => {
			toast.success('Thêm sản phẩm thành công');
			queryClient.invalidateQueries(['PRODUCTS']);
		},
		onError: () => {
			toast.error('Thêm sản phẩm thất bại');
		},
	});
};

import { firestore } from '@/utils/firebase.config';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { get, isEmpty, map, trim } from 'lodash';
import { useMutation } from 'react-query';

export const useCheckEmailValid = () =>
	useMutation({
		mutationFn: async (email) => {
			const response = await getDocs(query(collection(firestore, 'users'), where('email', '==', trim(email))));
			const users = map(response.docs, (doc) => doc.data());

			if (isEmpty(users)) return false;

			const role = get(users, '[0].role', 'user');

			return role === 'admin';
		},
	});

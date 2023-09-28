import { auth } from '@/utils/firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

export const useLoginMutation = () =>
	useMutation({
		mutationFn: async ({ email, password }) => {
			let status = 'failed';

			await signInWithEmailAndPassword(auth, email, password)
				.then(() => (status = 'success'))
				.catch((err) => {
					status = 'failed';

					if (err.code === 'auth/wrong-password') toast.error('Sai email hoặc mật khẩu');
					else toast.error('Đăng nhập thất bại');

					return;
				});

			return status;
		},
	});

import { useMutation } from 'react-query';
import { signOut } from 'firebase/auth';
import { auth } from '@/utils/firebase.config';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { routes } from '@/utils/routes';

export const useLogoutMutation = () => {
	const navigate = useNavigate();

	return useMutation({
		mutationFn: async () => {
			signOut(auth)
				.then(() => {
					toast.success('Đăng xuất thành công');
					navigate(routes.LOGIN);
				})
				.catch(() => toast.error('Đăng xuất thất bại'));
		},
	});
};

import Loading from '@/components/Loading';
import { useCheckEmailValid } from '@/queries/auth/useCheckEmailValid';
import { useLoginMutation } from '@/queries/auth/useLogin';
import { auth } from '@/utils/firebase.config';
import { routes } from '@/utils/routes';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { isEmpty } from 'lodash';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Login() {
	const [user, isLoading] = useAuthState(auth);
	const navigate = useNavigate();

	const { mutateAsync: checkEmailInvalid } = useCheckEmailValid();
	const { mutateAsync: login, isLoading: isLogging } = useLoginMutation();

	const handleSubmit = async (values) => {
		const isEmailValid = await checkEmailInvalid(values.email);

		if (!isEmailValid) {
			toast.error('Tài khoản không tồn tại!');
			return;
		}

		const status = await login(values);

		if (status === 'success') {
			toast.success('Đăng nhập thành công!');
			return;
		}
	};

	useEffect(() => {
		if (!isLoading && !isEmpty(user)) navigate(routes.HOME);
	}, [isLoading, navigate, user]);

	if (isLoading || isLogging) return <Loading />;

	if (user) return null;

	return (
		<div className="w-screen flex-center mt-[200px] max-w-sm mx-auto">
			<div className="w-full">
				<h1 className="uppercase font-bold text-center mb-4">Mamoru Login</h1>
				<Form
					name="login"
					onFinish={handleSubmit}
					className="w-full flex flex-col login-form"
					initialValues={{
						email: 'admin.mamoru@gmail.com',
						password: 'mamoru.com',
					}}
				>
					<Form.Item
						name="email"
						rules={[
							{ required: true, message: 'Please input your Email!' },
							{
								type: 'email',
								message: 'Please input a valid email!',
							},
						]}
					>
						<Input
							size="large"
							prefix={<MailOutlined className="site-form-item-icon text-slate-400" />}
							placeholder="Email"
						/>
					</Form.Item>
					<Form.Item
						name="password"
						rules={[
							{ required: true, message: 'Please input your Password!' },
							{
								min: 6,
								message: 'Password must be at least 6 characters!',
							},
						]}
					>
						<Input
							size="large"
							prefix={<LockOutlined className="site-form-item-icon text-slate-400" />}
							type="password"
							placeholder="Mật khẩu"
						/>
					</Form.Item>
					<Form.Item>
						<Button
							type="primary"
							htmlType="submit"
							size="large"
							danger
							block
							className="login-form-button"
						>
							Đăng nhập
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
}

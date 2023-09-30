import Loading from '@/components/Loading';
import ModalManagement from '@/components/Modal';
import { useLogoutMutation } from '@/queries/auth/useLogout';
import { auth } from '@/utils/firebase.config';
import { routes } from '@/utils/routes';
import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { AutoComplete, Button, Input, Layout, Menu, Popover, Spin } from 'antd';
import { initial, join, split } from 'lodash';
import { Suspense, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Navigate, Outlet, useLocation } from 'react-router-dom';
import { MENU_ITEMS } from './constants';

export function MainLayout() {
	const location = useLocation();

	const openKeys = join(initial(split(location.pathname, '/')), '/');

	const [isOpenProfileDropdown, setIsOpenProfileDropdown] = useState(false);

	const [user, isFetchingAuth] = useAuthState(auth);

	const { mutate: logout, isLoading } = useLogoutMutation();

	if (isLoading || isFetchingAuth) return <Loading />;

	if (!user) return <Navigate to={routes.LOGIN} />;

	return (
		<Layout
			hasSider
			className="select-none"
		>
			<Layout.Sider className="h-screen !fixed left-0 top-0 bottom-0 overflow-auto select-none">
				<h3 className="text-white text-base uppercase font-semibold h-12 flex items-center justify-center mb-4">
					Mamoru
				</h3>
				<Menu
					mode="inline"
					theme="dark"
					items={MENU_ITEMS}
					defaultOpenKeys={[`${openKeys}-container`]}
					defaultSelectedKeys={[location.pathname]}
				/>
			</Layout.Sider>
			<Layout className="ml-[200px] min-h-screen">
				<Layout.Header className="px-4 py-3 bg-white shadow-md h-min">
					<div className="flex items-center justify-between">
						<AutoComplete
							className="w-[300px]"
							onSearch={(v) => console.log(v)}
						>
							<Input.Search placeholder="Search products" />
						</AutoComplete>

						<Popover
							title="Profile"
							trigger="click"
							open={isOpenProfileDropdown}
							placement="bottom"
							onOpenChange={setIsOpenProfileDropdown}
							content={
								<div className="w-min">
									<Link
										to="/"
										className="mb-2.5 capitalize text-slate-500 flex items-baseline gap-2 w-full whitespace-nowrap"
									>
										<UserOutlined />
										Thông tin
									</Link>
									<Link
										to="/"
										className="mb-2.5 capitalize text-slate-500 flex items-baseline gap-2 w-full whitespace-nowrap"
									>
										<SettingOutlined />
										Cài đặt
									</Link>
									<span
										onClick={logout}
										className="cursor-pointer mb-2.5 capitalize text-slate-500 flex items-baseline gap-2 w-full whitespace-nowrap"
									>
										<LogoutOutlined />
										Đăng xuất
									</span>
								</div>
							}
						>
							<Button
								onClick={() => setIsOpenProfileDropdown(true)}
								icon={<SettingOutlined />}
							/>
						</Popover>
					</div>
				</Layout.Header>
				<Layout.Content className="pt-6 px-4 relative">
					<ModalManagement />
					<Suspense
						fallback={
							<div className="absolute inset-0 bg-white flex-center">
								<Spin size="large" />
							</div>
						}
					>
						<Outlet />
					</Suspense>
				</Layout.Content>
			</Layout>
		</Layout>
	);
}

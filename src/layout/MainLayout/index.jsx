import { AutoComplete, Avatar, Input, Layout, Menu, Popover } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import { MENU_ITEMS } from './constants';
import { useState } from 'react';
import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { useLogoutMutation } from '@/queries/auth/useLogout';
import Loading from '@/components/Loading';

export function MainLayout() {
	const [isOpenProfileDropdown, setIsOpenProfileDropdown] = useState(false);

	const { mutate: logout, isLoading } = useLogoutMutation();

	if (isLoading) return <Loading />;

	return (
		<Layout hasSider>
			<Layout.Sider className="h-screen fixed left-0 top-0 bottom-0 overflow-auto select-none">
				<h3 className="text-white text-base uppercase font-semibold h-12 flex items-center justify-center mb-4">
					Mamoru
				</h3>
				<Menu
					mode="inline"
					theme="dark"
					items={MENU_ITEMS}
				/>
			</Layout.Sider>
			<Layout>
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
							<div
								className="flex items-center gap-2 cursor-pointer rounded-lg p-1 px-3 hover:bg-gray-100 select-none"
								onClick={() => setIsOpenProfileDropdown(true)}
							>
								<Avatar src="https://cdn.dribbble.com/userupload/10277125/file/original-b259ff41d00beffdcf91c02130412efa.png?resize=1024x768" />
								<div>
									<h4 className="capitalize text-sm font-semibold">Hữu Lộc</h4>
								</div>
							</div>
						</Popover>
					</div>
				</Layout.Header>
				<Layout.Content className="pt-6 px-4">
					<Outlet />
				</Layout.Content>
			</Layout>
		</Layout>
	);
}

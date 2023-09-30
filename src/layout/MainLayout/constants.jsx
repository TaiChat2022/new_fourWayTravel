import { routes } from '@/utils/routes';
import { FileOutlined, HomeOutlined, ShopOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export const MENU_ITEMS = [
	{
		label: <Link to={routes.HOME}>Trang chủ</Link>,
		key: routes.HOME,
		icon: <HomeOutlined />,
	},
	{
		label: <span>Sản phẩm</span>,
		key: `${routes.PRODUCTS}-container`,
		icon: <ShopOutlined />,
		children: [
			{
				label: <Link to={routes.PRODUCTS}>Danh sách</Link>,
				key: routes.PRODUCTS,
			},
			{
				label: <Link to={routes.PRODUCTS_ADD}>Thêm mới</Link>,
				key: routes.PRODUCTS_ADD,
			},
			{
				label: <Link to={routes.PRODUCT_CATEGORIES}>Danh mục</Link>,
				key: routes.PRODUCT_CATEGORIES,
			},
		],
	},
	{
		label: <span>Bài viết</span>,
		key: `${routes.BLOGS}-container`,
		icon: <FileOutlined />,
		children: [
			{
				label: <Link to={routes.BLOGS}>Danh sách</Link>,
				key: routes.BLOGS,
			},
			{
				label: <Link to={routes.BLOGS_ADD}>Thêm mới</Link>,
				key: routes.BLOGS_ADD,
			},
			{
				label: <Link to={routes.BLOG_CATEGORIES}>Danh mục</Link>,
				key: routes.BLOG_CATEGORIES,
			},
		],
	},
];

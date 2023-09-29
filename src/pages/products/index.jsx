import { useFilter } from '@/hooks/useFilter';
import { useProductsQuery } from '@/queries/products/getProducts';
import { routes } from '@/utils/routes';
import { CopyOutlined, DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Card, Image, Input, Select, Table, Tooltip, Typography } from 'antd';
import { filter, includes, isEmpty, map, round } from 'lodash';
import { useMemo } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { SORT_OPTIONS, STATUS_FILTER } from './constants';
import { useProductCategoriesQuery } from '@/queries/products/getProductCategories';

export default function Products() {
	const navigate = useNavigate();

	const { data: products, isFetching: isLoading } = useProductsQuery();
	const { data: categories, isFetching: isLoadingCategories } = useProductCategoriesQuery();

	const { rows, getFilterValue, removeFilter, addFilter, setSearch, clearAll, sort, setSort, clearSort } =
		useFilter(products);

	const columns = useMemo(
		() => [
			{
				title: 'Preview',
				dataIndex: 'id',
				render: (id, item) => (
					<div className="flex items-center gap-2">
						<Image
							src={item?.thumbnail}
							width={70}
							height={70}
							className="rounded-md"
						/>
						<div>
							<h5 className="text-base mb-0 leading-5">{item?.name}</h5>
							<small className="text-gray-500">
								ID: {id}
								<CopyToClipboard
									text={id}
									onCopy={() => toast.success('Sao chép thàn công!!!')}
								>
									<CopyOutlined
										className="ml-1"
										size="small"
									/>
								</CopyToClipboard>
							</small>
						</div>
					</div>
				),
			},
			{
				title: 'Danh mục',
				dataIndex: 'category',
				render: (category) => {
					const item = JSON.parse(category);

					return (
						<div className="mb-0">
							<p className="mb-0">{item?.name}</p>
							<small className="text-gray-500">ID: {item?.id}</small>
						</div>
					);
				},
			},
			{
				title: 'Giá',
				dataIndex: 'price',
				render: (price, item) => {
					return (
						<>
							<p className="mb-0">Giá gốc: {Number(price || 0)?.toLocaleString('vi-VN')} đ</p>
							<small className="text-gray-500">
								Giảm giá: {Number(item?.discount || 0)?.toLocaleString('vi-VN')} đ&nbsp;-&nbsp;
								{round((Number(item?.discount) / Number(price)) * 100)}%
							</small>
						</>
					);
				},
			},
			{
				title: 'Số lượng',
				dataIndex: 'quantity',
				render: (quantity) => <p className="mb-0">{Number(quantity)?.toLocaleString('vi-VN')}</p>,
			},
			{
				title: 'Trạng thái',
				dataIndex: 'status',
				render: (status) => {
					return (
						<p className="mb-0">
							{status === 'active' ? (
								<span className="text-green-500 bg-green-200 px-3 inline-block capitalize py-0.5 text-xs rounded-xl">
									Đang bán
								</span>
							) : (
								<span className="text-red-500 bg-red-200 px-3 inline-block capitalize py-0.5 text-xs rounded-xl">
									Ngừng bán
								</span>
							)}
						</p>
					);
				},
			},
			{
				title: 'Thao tác',
				dataIndex: 'id',
				width: '10%',
				render: (id) => (
					<div className="flex items-center gap-2">
						<Tooltip title="Cập nhật">
							<Button
								icon={<EditOutlined size="small" />}
								type="text"
							/>
						</Tooltip>
						<Tooltip title="Xóa">
							<Button
								icon={<DeleteOutlined size="small" />}
								type="text"
								danger
							/>
						</Tooltip>
					</div>
				),
			},
		],
		[],
	);

	return (
		<>
			<div className="flex items-center justify-between mb-2">
				<Typography.Title level={4}>Danh sách sản phẩm</Typography.Title>
				<Button
					size="small"
					icon={<PlusOutlined size="small" />}
					onClick={(e) => {
						e.preventDefault();

						navigate(routes.PRODUCTS_ADD);
					}}
					type="link"
				>
					Thêm sản phẩm
				</Button>
			</div>

			<Card
				tabList={STATUS_FILTER}
				activeTabKey={getFilterValue('status') ? getFilterValue('status') : STATUS_FILTER?.[0]?.key}
				onTabChange={(key) => (key === STATUS_FILTER?.[0]?.key ? removeFilter('status') : addFilter('status', key))}
				bordered
				className="w-full mb-2 mt-0"
			>
				<div className="flex items-center gap-3">
					<div className="w-60">
						<Input.Search
							placeholder="Tìm danh mục..."
							onSearch={(v) => setSearch('name', v)}
							allowClear
						/>
					</div>
					<div className="w-40">
						<Select
							value={sort?.key && sort?.type ? `${sort?.key}:${sort?.type}` : null}
							placeholder="Sắp xếp"
							allowClear
							onClear={clearSort}
							onChange={(value) => {
								if (isEmpty(value)) return clearSort();
								const [key, type] = value.split(':');

								setSort(key, type);
							}}
							className="w-full"
						>
							{map(SORT_OPTIONS, (item) => (
								<Select.Option
									key={item.key}
									value={item.key}
								>
									{item.label}
								</Select.Option>
							))}
						</Select>
					</div>
					<div className="w-40">
						<Select
							loading={isLoadingCategories}
							options={map(categories, ({ name, id }) => ({
								label: name,
								value: id,
							}))}
							placeholder="Danh mục"
							allowClear
							className="w-full"
							value={getFilterValue('category')}
							onChange={(v) => {
								if (isEmpty(v)) return removeFilter('category');

								addFilter('category', v);
							}}
							onClear={() => removeFilter('category')}
						/>
					</div>
					<Button
						className="ml-auto"
						danger
						type="default"
						onClick={clearAll}
					>
						Mặc định
					</Button>
				</div>
			</Card>

			<Table
				columns={columns}
				dataSource={rows}
				rowKey="id"
				loading={isLoading}
				pagination={{
					pageSize: 10,
					showSizeChanger: true,
					hideOnSinglePage: true,
				}}
				size="small"
			/>
		</>
	);
}

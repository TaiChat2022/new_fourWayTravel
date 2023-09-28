import { useProductCategoriesQuery } from '@/queries/products/getProductCategories';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Card, Image, Input, Table, Tooltip, Typography } from 'antd';
import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function ProductCategories() {
	const [searchParams] = useSearchParams();

	const status = searchParams.get('status');
	const sort = searchParams.get('sort');
	const sortType = searchParams.get('sortType');
	const q = searchParams.get('q');

	const { data: categories, isFetching: isLoading } = useProductCategoriesQuery({
		status,
		sort,
		sortType,
	});

	const columns = useMemo(
		() => [
			{
				title: 'Preview',
				dataIndex: 'id',
				key: 'id',
				render: (_, item) => {
					return (
						<div className="flex items-center gap-2">
							<Image
								width={60}
								preview
								className="rounded-md"
								src={item?.image}
							/>
							<h4>{item?.name}</h4>
						</div>
					);
				},
			},
			{
				title: 'Status',
				dataIndex: 'status',
				key: 'status',
			},
			{
				title: 'Sản phẩm',
				dataIndex: 'usage',
				key: 'usage',
			},
			{
				title: 'Action',
				dataIndex: 'id',
				key: 'id',
				render: (id) => {
					return (
						<div className="flex items-center gap-2">
							<Tooltip title="Cập nhật">
								<Button
									onClick={() => console.log(id)}
									icon={<EditOutlined size="small" />}
									type="text"
								/>
							</Tooltip>
							<Tooltip title="Xóa">
								<Button
									onClick={() => console.log(id)}
									icon={<DeleteOutlined size="small" />}
									type="text"
									danger
								/>
							</Tooltip>
						</div>
					);
				},
			},
		],
		[],
	);

	return (
		<div>
			<div className="flex items-center justify-between mb-2">
				<Typography.Title level={4}>Danh mục sản phẩm</Typography.Title>
				<Button
					size="small"
					icon={<PlusOutlined size="small" />}
					type="link"
				>
					Thêm danh mục
				</Button>
			</div>

			<Table
				columns={columns}
				dataSource={categories}
				rowKey="id"
				loading={isLoading}
				pagination
				size="small"
			/>
		</div>
	);
}

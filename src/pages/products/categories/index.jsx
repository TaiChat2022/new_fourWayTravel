import Badge from '@/components/Badge';
import { useFilter } from '@/hooks/useFilter';
import { useProductCategoriesQuery } from '@/queries/products/getProductCategories';
import { useDeleteProductCategoryMutation } from '@/queries/products/useDeleteProductCategory';
import { closeModal, openModal } from '@/stores/ui/slice';
import { MODAL } from '@/utils/modal';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Card, Image, Input, Table, Tooltip, Typography } from 'antd';
import { find, isEmpty } from 'lodash';
import { Suspense, lazy, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { STATUS_FILTER } from './constants';

const CategoryModal = lazy(() => import('./_components/CategoryModal'));

export default function ProductCategories() {
	const dispatch = useDispatch();

	const { mutateAsync: deleteCategory } = useDeleteProductCategoryMutation();

	const [isOpenModal, setIsOpenModal] = useState(false);
	const [selectedId, setSelectedId] = useState(undefined);

	const { data: categories, isFetching: isLoading } = useProductCategoriesQuery();

	const { rows: data, setSearch, addFilter, removeFilter, clearAll, getFilterValue } = useFilter(categories);

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
								height={60}
								preview
								className="rounded-md min-w-[60px]"
								src={item?.image || '/placeholder.png'}
								placeholder="/placeholder.png"
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
				render: (status) => {
					const statusResult = find(STATUS_FILTER, { key: status });

					if (isEmpty(statusResult)) return null;

					return (
						<Badge
							color={statusResult?.color}
							title={statusResult?.label}
						/>
					);
				},
			},
			{
				title: '',
				dataIndex: 'id',
				key: 'id',
				width: '10%',
				render: (id) => {
					return (
						<div className="flex items-center gap-2">
							<Tooltip title="Cập nhật">
								<Button
									icon={<EditOutlined size="small" />}
									type="text"
									onClick={() => {
										setIsOpenModal(true);
										setSelectedId(id);
									}}
								/>
							</Tooltip>
							<Tooltip title="Xóa">
								<Button
									onClick={() =>
										dispatch(
											openModal({
												view: MODAL.DELETE,
												props: {
													modalTitle: 'Xoá danh mục',
													title: 'Bạn muốn xoá danh mục trên?',
													onOk: () => {
														deleteCategory(id).then(() => dispatch(closeModal()));
													},
													onCancel: () => dispatch(closeModal()),
												},
											}),
										)
									}
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
		[deleteCategory, dispatch],
	);

	const handleCloseModal = () => {
		setIsOpenModal(false);
		setSelectedId(undefined);
	};

	const handleOpenModal = () => setIsOpenModal(true);

	return (
		<>
			<Suspense>
				<CategoryModal
					open={isOpenModal}
					onToggle={handleCloseModal}
					id={selectedId}
				/>
			</Suspense>
			<div className="flex items-center justify-between mb-2">
				<Typography.Title level={4}>Danh mục sản phẩm</Typography.Title>
				<Button
					size="small"
					icon={<PlusOutlined size="small" />}
					type="link"
					onClick={handleOpenModal}
				>
					Thêm danh mục
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
					<Button
						className="ml-auto"
						danger
						type="default"
						onClick={clearAll}
					>
						Khôi phục
					</Button>
				</div>
			</Card>

			<Table
				columns={columns}
				dataSource={data}
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

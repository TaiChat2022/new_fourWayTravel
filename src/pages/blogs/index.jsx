import { Preview } from '@/components/Table';
import Actions from '@/components/Table/Actions';
import { useFilter } from '@/hooks/useFilter';
import { useDeleteDoc, useDocsQuery } from '@/hooks/useFirestore';
import { closeModal, openModal } from '@/stores/ui/slice';
import { MODAL } from '@/utils/modal';
import { QUERY_KEY } from '@/utils/queryKey';
import { routes } from '@/utils/routes';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Card, Input, Select, Table, Typography } from 'antd';
import { find, isEmpty, isNil, map, replace } from 'lodash';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { BLOG_FEATURED_FILTER, BLOG_STATUS } from './constants';

export default function Blogs() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { data: blogs, isFetching: isLoading } = useDocsQuery(QUERY_KEY.BLOGS);
	const { data: categories, isFetching: isLoadingCategories } = useDocsQuery(QUERY_KEY.BLOG_CATEGORIES);
	const { mutateAsync: deleteBlog } = useDeleteDoc(QUERY_KEY.BLOGS, {
		successMsg: 'Xóa bài viết thành công!',
		errorMsg: 'Xóa bài viết thất bại!',
	});

	const { rows, getFilterValue, removeFilter, addFilter, clearAll, setSearch } = useFilter(blogs);

	const columns = useMemo(
		() => [
			{
				title: 'Preview',
				dataIndex: 'id',
				key: 'id',
				render: (id, item) => (
					<Preview
						id={id}
						image={item?.thumbnail}
						name={item?.name}
					/>
				),
			},
			{
				title: 'Trạng thái',
				dataIndex: 'status',
				key: 'status',
				render: (status) => {
					return (
						<p className="mb-0">
							{status === 'published' ? (
								<span className="text-green-500 bg-green-200 px-3 inline-block capitalize py-0.5 text-xs rounded-xl">
									Đã đăng
								</span>
							) : (
								<span className="text-red-500 bg-red-200 px-3 inline-block capitalize py-0.5 text-xs rounded-xl">
									Đã ẩn
								</span>
							)}
						</p>
					);
				},
			},
			{
				title: 'Nổi bật',
				dataIndex: 'isFeatured',
				key: 'isFeatured',
				render: (isFeatured) => {
					return (
						<p className="mb-0">
							{isFeatured ? (
								<span className="text-green-500 bg-green-200 px-3 inline-block capitalize py-0.5 text-xs rounded-xl">
									Có
								</span>
							) : (
								<span className="text-red-500 bg-red-200 px-3 inline-block capitalize py-0.5 text-xs rounded-xl">
									Không
								</span>
							)}
						</p>
					);
				},
			},
			{
				title: 'Thao tác',
				dataIndex: 'id',
				key: 'id',
				width: '10%',
				render: (id) => (
					<Actions
						onEditClick={() => navigate(replace(routes.BLOGS_EDIT, ':id', id))}
						onDeleteClick={() =>
							dispatch(
								openModal({
									view: MODAL.DELETE,
									props: {
										modalTitle: 'Xác nhận xóa',
										title: 'Bạn có chắc chắn muốn xóa bài viết này không?',
										onCancel: () => dispatch(closeModal()),
										onOk: () => deleteBlog(id).then(() => dispatch(closeModal())),
									},
								}),
							)
						}
					/>
				),
			},
		],
		[deleteBlog, dispatch, navigate],
	);

	return (
		<>
			<div className="flex items-center justify-between mb-2">
				<Typography.Title level={4}>Danh sách bài viết</Typography.Title>

				<Link to={routes.BLOGS_ADD}>
					<Button
						size="small"
						icon={<PlusOutlined size="small" />}
						type="link"
					>
						Thêm bài viết
					</Button>
				</Link>
			</div>

			<Card
				tabList={BLOG_STATUS}
				activeTabKey={getFilterValue('status') ? getFilterValue('status') : BLOG_STATUS?.[0]?.key}
				onTabChange={(key) =>
					key === BLOG_STATUS?.[0]?.key ? removeFilter('status') : addFilter('status', key)
				}
				bordered
				className="mt-0 mb-2 w-full"
			>
				<div className="flex gap-4">
					<div className="w-60">
						<Input.Search
							placeholder="Tìm danh mục..."
							onSearch={(v) => setSearch('name', v)}
							allowClear
						/>
					</div>
					<div className="w-40">
						<Select
							options={BLOG_FEATURED_FILTER}
							value={
								!isNil(getFilterValue('isFeatured')) &&
								(getFilterValue('isFeatured') ? 'featured' : 'not_featured')
							}
							onChange={(v) => {
								const featured = find(BLOG_FEATURED_FILTER, { value: 'featured' });

								if (v === featured?.value) addFilter('isFeatured', true);
								else addFilter('isFeatured', false);

								if (isNil(v)) removeFilter('isFeatured');
							}}
							onClear={() => removeFilter('isFeatured')}
							className="w-full"
							placeholder="Nổi bật"
							allowClear
						/>
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

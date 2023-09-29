import { useProductCategoriesQuery } from '@/queries/products/getProductCategories';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Card, Image, Input, Select, Table, Tooltip, Typography } from 'antd';
import { deburr, filter, forEach, includes, isEmpty, isNil, toLower, toString, trim } from 'lodash';
import { lazy, useEffect, useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { SORT_OPTIONS, STATUS_FILTER } from './onstants';

const CategoryModal = lazy(() => import('./_components/CategoryModal'));

export default function ProductCategories() {
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();

	const [isOpenModal, setIsOpenModal] = useState(false);
	const [rows, setRows] = useState([]);

	const status = searchParams.get('status');
	const sort = searchParams.get('sort');
	const q = searchParams.get('q');

	const { data: categories, isFetching: isLoading } = useProductCategoriesQuery({
		status,
		sort,
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

	const handleChangeFilter = (key, value) => {
		if (isNil(value)) searchParams.delete(key);
		else searchParams.set(key, value);

		navigate(`?${toString(searchParams)}`);
	};

	const handleResetFilter = () => {
		forEach([...searchParams.keys()], (value) => searchParams.delete(value));

		navigate(`?${toString(searchParams)}`);
	};

	const handleCloseModal = () => setIsOpenModal(false);

	const handleOpenModal = () => setIsOpenModal(true);

	useEffect(() => {
		if (isEmpty(q)) return setRows(categories);

		const searchValue = deburr(toLower(trim(q)));

		const result = filter(categories, (item) => includes(deburr(toLower(item?.name)), searchValue));
		setRows(result);
	}, [categories, q]);

	return (
		<>
			<CategoryModal
				open={isOpenModal}
				onAccept={handleCloseModal}
				onCancel={handleCloseModal}
			/>
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
				activeTabKey={status || STATUS_FILTER?.[0]?.key}
				onTabChange={(key) =>
					key === STATUS_FILTER?.[0]?.key ? handleChangeFilter('status', undefined) : handleChangeFilter('status', key)
				}
				bordered
				className="w-full mb-2 mt-0"
			>
				<div className="flex items-center gap-3">
					<div className="w-60">
						<Input.Search
							placeholder="Tìm danh mục..."
							onSearch={(v) => handleChangeFilter('q', v)}
							defaultValue={q}
							allowClear
						/>
					</div>
					<div className="w-40">
						<Select
							options={SORT_OPTIONS}
							value={sort}
							onChange={(value) => handleChangeFilter('sort', value)}
							className="w-full"
							placeholder="Sắp xếp"
							allowClear
							onClear={() => handleChangeFilter('sort')}
						/>
					</div>
					<Button
						className="ml-auto"
						danger
						type="default"
						onClick={handleResetFilter}
					>
						Khôi phục
					</Button>
				</div>
			</Card>

			<Table
				columns={columns}
				dataSource={rows}
				rowKey="id"
				loading={isLoading}
				pagination
				size="small"
			/>
		</>
	);
}

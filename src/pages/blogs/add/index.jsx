import { useAddDoc, useDocQuery, useDocsQuery, useEditDoc } from '@/hooks/useFirestore';
import { QUERY_KEY } from '@/utils/queryKey';
import { Button, Card, Checkbox, Form, Image, Input, Select, Typography, Upload } from 'antd';
import { filter, isEmpty, map, slice } from 'lodash';
import { v4 } from 'uuid';
import { BLOG_STATUS } from '../constants';
import TextArea from 'antd/es/input/TextArea';
import Editor from '@/components/Editor';
import { useNavigate, useParams } from 'react-router-dom';
import { routes } from '@/utils/routes';
import ImgCrop from 'antd-img-crop';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '@/utils/firebase.config';
import { toast } from 'react-toastify';
import { UploadOutlined } from '@ant-design/icons';
import { useUploadFile } from 'react-firebase-hooks/storage';
import { useEffect } from 'react';

const TextField = (props) => (
	<Form.Item
		wrapperCol={{
			span: 24,
		}}
		labelCol={{
			span: 24,
		}}
		{...props}
	>
		<Input />
	</Form.Item>
);

export default function AddBlog() {
	const navigate = useNavigate();
	const { id } = useParams();
	const [uploadFile, uploading] = useUploadFile();

	const isEdit = !!id;

	const [form] = Form.useForm();
	const thumbnail = Form.useWatch('thumbnail', form);

	const { data: categories, isFetching: isLoadingCategories } = useDocsQuery(QUERY_KEY.BLOG_CATEGORIES);
	const { data: blog } = useDocQuery(QUERY_KEY.BLOGS, id);
	const { mutateAsync: addBlog, isLoading: isAdding } = useAddDoc(QUERY_KEY.BLOGS, {
		successMsg: 'Thêm mới bài viết thành công!',
		errorMsg: 'Thêm mới bài viết thất bại!',
	});
	const { mutateAsync: editBlog, isLoading: isEditing } = useEditDoc(QUERY_KEY.BLOGS, {
		successMsg: 'Cập nhật bài viết thành công!',
		errorMsg: 'Cập nhật bài viết thất bại!',
	});

	const handleSubmit = () =>
		form.validateFields().then((values) => {
			!isEdit && addBlog(values).then(() => navigate(routes.BLOGS));
			isEdit && editBlog({ id, data: values }).then(() => navigate(routes.BLOGS));
		});

	useEffect(() => {
		if (isEdit && !isEmpty(blog)) form.setFieldsValue(blog);
	}, [blog, form, id, isEdit]);

	return (
		<Form
			form={form}
			onFinish={handleSubmit}
		>
			<Typography.Title level={4}>Bài viết</Typography.Title>

			<Card
				title="Thông tin"
				className="mb-3"
			>
				<div className="grid grid-cols-12 gap-x-4">
					<div className="col-span-6">
						<TextField
							name="name"
							label="Tiêu đề"
							tooltip="Tiêu đề bài viết, tối đa 380 ký tự, bắt buộc"
							rules={[
								{
									required: true,
									message: 'Vui lòng nhập tiêu đề',
								},
								{
									max: 380,
									message: 'Tiêu đề không quá 380 ký tự',
								},
							]}
						/>
					</div>
					<div className="col-span-3">
						<Form.Item
							labelCol={{ span: 24 }}
							wrapperCol={{ span: 24 }}
							name="status"
							label="Trạng thái"
							tooltip="Trạng thái bài viết, bắt buộc"
							isLoading={isLoadingCategories}
							rules={[
								{
									required: true,
									message: 'Vui lòng chọn trạng thái',
								},
							]}
						>
							<Select>
								{map(slice(BLOG_STATUS, 1), (item) => (
									<Select.Option
										key={v4()}
										value={item?.key}
									>
										{item?.label}
									</Select.Option>
								))}
							</Select>
						</Form.Item>
					</div>
					<div className="col-span-3">
						<Form.Item
							labelCol={{ span: 24 }}
							wrapperCol={{ span: 24 }}
							name="category"
							label="Danh mục"
							tooltip="Danh mục bài viết, bắt buộc"
							rules={[
								{
									required: true,
									message: 'Vui lòng chọn danh mục',
								},
							]}
						>
							<Select loading={isLoadingCategories}>
								{map(filter(categories, { status: 'active' }), (item) => (
									<Select.Option
										key={v4()}
										value={JSON.stringify({ name: item?.name, id: item?.id })}
									>
										{item?.name}
									</Select.Option>
								))}
							</Select>
						</Form.Item>
					</div>
					<div className="col-span-12">
						<Form.Item
							wrapperCol={{ span: 24 }}
							labelCol={{ span: 24 }}
							name="description"
							label="Mô tả"
							tooltip="Mô tả bài viết, tối đa 380 ký tự, bắt buộc"
							rules={[
								{
									required: true,
									message: 'Vui lòng nhập mô tả',
								},
								{
									max: 380,
									message: 'Mô tả không quá 380 ký tự',
								},
							]}
						>
							<TextArea />
						</Form.Item>
					</div>
					<div className="col-span-12">
						<Editor
							name="content"
							label="Nội dung"
							tooltip="Nội dung bài viết, bắt buộc"
							rules={[
								{
									required: true,
									message: 'Vui lòng nhập nội dung',
								},
							]}
						/>
					</div>
					<div className="col-span-12">
						<Form.Item
							name="isFeatured"
							initialValue={false}
							valuePropName="checked"
						>
							<Checkbox>Bài viết nổi bật</Checkbox>
						</Form.Item>
					</div>
					<div className="col-span-12">
						<Form.Item
							labelCol={{ span: 24 }}
							wrapperCol={{ span: 24 }}
							name="thumbnail"
							label="Thumbnail"
							rules={[
								{
									required: true,
									message: 'Vui lòng nhập ảnh thumbnail',
								},
							]}
							tooltip="Thumbnail bắt buộc, chỉ được up 1 ảnh"
						>
							<Form.Item
								valuePropName="image"
								noStyle
							>
								<ImgCrop
									rotationSlider
									aspectSlider
									showReset
								>
									<Upload
										accept="image/*"
										maxCount={1}
										showUploadList={false}
										customRequest={async ({ file }) => {
											try {
												const fileRef = ref(storage, `/blogs/thumbnail/${v4()}-${file.name}`);

												const snapshot = await uploadFile(fileRef, file);
												const url = await getDownloadURL(snapshot.ref);

												form.setFieldValue('thumbnail', url);
											} catch (error) {
												toast.error('Đã có lỗi xảy ra');
												throw new Error(error);
											}
										}}
									>
										<div>
											<Button
												loading={uploading}
												icon={<UploadOutlined />}
											>
												Tải lên
											</Button>
										</div>
									</Upload>
								</ImgCrop>
								{!isEmpty(thumbnail) && (
									<div className="mt-3">
										<Image
											width={300}
											height={300}
											src={thumbnail}
										/>
									</div>
								)}
							</Form.Item>
						</Form.Item>
					</div>
				</div>
			</Card>
			<Card>
				<div className="flex items-center justify-end gap-3">
					<Button
						htmlType="button"
						onClick={() => navigate(routes.BLOGS)}
						loading={isAdding || isEditing}
					>
						Huỷ
					</Button>
					<Button
						type="primary"
						htmlType="submit"
						loading={isAdding || isEditing}
					>
						Lưu
					</Button>
				</div>
			</Card>
		</Form>
	);
}

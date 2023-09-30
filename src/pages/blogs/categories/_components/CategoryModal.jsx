import { useBlogCategoryQuery } from '@/queries/blogs/getBlogCategory';
import { useAddBlogCategoryMutation } from '@/queries/blogs/useAddBlogCategory';
import { useEditBlogCategoryMutation } from '@/queries/blogs/useEditBlogCategory';
import { storage } from '@/utils/firebase.config';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Form, Image, Input, Modal, Select, Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import { getDownloadURL, ref } from 'firebase/storage';
import { isEmpty, map, noop, slice } from 'lodash';
import { useEffect } from 'react';
import { useUploadFile } from 'react-firebase-hooks/storage';
import { toast } from 'react-toastify';
import { v4 } from 'uuid';
import { DEFAULT_FORM_VALUES, STATUS_FILTER } from '../constants';

export default function CategoryModal({ open, onToggle, id }) {
	const isEdit = !!id;

	const { data: category } = useBlogCategoryQuery(id);
	const { mutateAsync: addCategory } = useAddBlogCategoryMutation();
	const { mutateAsync: editCategory } = useEditBlogCategoryMutation();
	const [uploadImage, uploading] = useUploadFile();

	const [form] = Form.useForm();
	const image = Form.useWatch('image', form);

	const handleSubmit = () => {
		form.validateFields().then(async (values) => {
			try {
				if (isEdit)
					await editCategory({
						id,
						data: values,
					});
				else await addCategory(values);

				onToggle?.();
			} catch (err) {
				throw new Error(err);
			}
		});
	};

	useEffect(() => {
		if (open) {
			form.resetFields();
			form.setFieldsValue(DEFAULT_FORM_VALUES);

			if (category && isEdit) form.setFieldsValue(category);
		}
	}, [category, form, isEdit, open]);

	return (
		<Modal
			title="Danh mục"
			open={open}
			onOk={uploading ? noop : form.submit}
			onCancel={uploading ? noop : onToggle}
			confirmLoading={uploading}
		>
			<Form
				layout="vertical"
				form={form}
				onFinish={handleSubmit}
			>
				<Form.Item
					name="name"
					label="Tên danh mục"
					rules={[
						{
							required: true,
							message: 'Vui lòng nhập tên danh mục',
						},
						{
							max: 255,
							message: 'Tên danh mục không được dài quá 255 ký tự',
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					name="status"
					label="Trạng thái"
					rules={[
						{
							required: true,
							message: 'Vui lòng chọn trạng thái',
						},
					]}
				>
					<Select>
						{map(slice(STATUS_FILTER, 1), (status) => (
							<Select.Option
								key={status.key}
								value={status.key}
							>
								{status.label}
							</Select.Option>
						))}
					</Select>
				</Form.Item>

				<Form.Item name="image">
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
										const fileRef = ref(storage, `/products/categories/${v4()}-${file.name}`);

										const snapshot = await uploadImage(fileRef, file);
										const url = await getDownloadURL(snapshot.ref);

										form.setFieldValue('image', url);
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
								{!isEmpty(image) && (
									<Image
										width={80}
										height={80}
										className="mt-3"
										shape="square"
										src={image}
									/>
								)}
							</Upload>
						</ImgCrop>
					</Form.Item>
				</Form.Item>
			</Form>
		</Modal>
	);
}

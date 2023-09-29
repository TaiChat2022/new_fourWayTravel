import { useAddProductCategoryMutation } from '@/queries/products/useAddProductCategory';
import { Avatar, Button, Form, Input, Modal, Select, Upload } from 'antd';
import { isEmpty, map, slice } from 'lodash';
import { useEffect } from 'react';
import { DEFAULT_FORM_VALUES, STATUS_FILTER } from '../constants';
import ImgCrop from 'antd-img-crop';
import { UploadOutlined } from '@ant-design/icons';
import { useUploadFile } from 'react-firebase-hooks/storage';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '@/utils/firebase.config';
import { v4 } from 'uuid';
import { toast } from 'react-toastify';
import { useEditProductCategoryMutation } from '@/queries/products/useEditProductCategory';
import { useProductCategoryQuery } from '@/queries/products/getProductCategory';

export default function CategoryModal({ open, onToggle, id }) {
	const isEdit = !!id;

	const { data: category } = useProductCategoryQuery(id);
	const { mutateAsync: addCategory } = useAddProductCategoryMutation();
	const { mutateAsync: editCategory } = useEditProductCategoryMutation();
	const [uploadImage] = useUploadFile();

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
		form.resetFields();
		form.setFieldsValue(DEFAULT_FORM_VALUES);

		if (category && isEdit) form.setFieldsValue(category);
	}, [form, open, isEdit, category]);

	return (
		<Modal
			title="Danh mục"
			open={open}
			onOk={form.submit}
			onCancel={onToggle}
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
									<Button icon={<UploadOutlined />}>Tải lên</Button>
								</div>
								{!isEmpty(image) && (
									<Avatar
										className="w-20 h-20 mt-3 flex"
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

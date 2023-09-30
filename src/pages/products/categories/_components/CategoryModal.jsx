import { useAddDoc, useDocQuery, useEditDoc } from '@/hooks/useFirestore';
import { storage } from '@/utils/firebase.config';
import { QUERY_KEY } from '@/utils/queryKey';
import { UploadOutlined } from '@ant-design/icons';
import { Avatar, Button, Form, Input, Modal, Select, Upload } from 'antd';
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

	const { data: category, isFetching: isLoadingCategory } = useDocQuery(QUERY_KEY.PRODUCT_CATEGORIES, id);
	const { mutateAsync: addCategory, isLoading: isAdding } = useAddDoc(QUERY_KEY.PRODUCT_CATEGORIES, {
		successMsg: 'Thêm danh mục thành công!',
		errorMsg: 'Thêm danh mục thất bại!',
	});
	const { mutateAsync: editCategory, isLoading: isEditing } = useEditDoc(QUERY_KEY.PRODUCT_CATEGORIES, {
		successMsg: 'Sửa danh mục thành công!',
		errorMsg: 'Sửa danh mục thất bại!',
	});
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
			confirmLoading={uploading || isAdding || isEditing || isLoadingCategory}
			okButtonProps={{
				loading: uploading || isAdding || isEditing || isLoadingCategory,
			}}
			cancelButtonProps={{
				loading: uploading || isAdding || isEditing || isLoadingCategory,
			}}
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

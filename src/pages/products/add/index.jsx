import { useAddDoc, useDocQuery, useDocsQuery, useEditDoc } from '@/hooks/useFirestore';
import { storage } from '@/utils/firebase.config';
import { QUERY_KEY } from '@/utils/queryKey';
import { routes } from '@/utils/routes';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Card, Form, Image, Input, InputNumber, Select, Typography, Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import { getDownloadURL, ref } from 'firebase/storage';
import { cloneDeep, filter, findIndex, get, isEmpty, map, size } from 'lodash';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useUploadFile } from 'react-firebase-hooks/storage';
import ReactQuill from 'react-quill';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { v4 } from 'uuid';
import { INITIAL_VALUES } from './constants';

function formatPrice(value) {
	return `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function parsePrice(value) {
	return value.replace(/(,*)/g, '');
}

export default function AddProduct() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [uploadFile, uploading] = useUploadFile();

	const isEdit = !!id;

	const { data: product } = useDocQuery(QUERY_KEY.PRODUCTS, id);
	const { mutateAsync: addProduct, isLoading: isAdding } = useAddDoc(QUERY_KEY.PRODUCTS, {
		successMsg: 'Thêm sản phẩm thành công!',
		errorMsg: 'Thêm sản phẩm thất bại!',
	});
	const { mutateAsync: editProduct, isLoading: isEditting } = useEditDoc(QUERY_KEY.PRODUCTS, {
		successMsg: 'Sửa sản phẩm thành công!',
		errorMsg: 'Sửa sản phẩm thất bại!',
	});
	const { data: categories, isFetching: isCategoriesLoading } = useDocsQuery(QUERY_KEY.PRODUCT_CATEGORIES);

	const editorRef = useRef();

	const [form] = Form.useForm();
	const thumbnail = Form.useWatch('thumbnail', form);
	const images = Form.useWatch('images', form);

	const imageHandler = useCallback(() => {
		const input = document.createElement('input');
		input.setAttribute('type', 'file');
		input.setAttribute('accept', 'image/*');
		input.click();

		input.onchange = async () => {
			try {
				if (input !== null && input.files !== null) {
					const file = input.files[0];
					const storageRef = ref(storage, `products/${v4()}-${file.name}`);
					const uploadTask = await uploadFile(storageRef, file);
					const url = await getDownloadURL(uploadTask.ref);

					const quill = editorRef.current;
					if (quill) {
						const range = quill.getEditorSelection();
						range && quill.getEditor().insertEmbed(range.index, 'image', url);
					}
				}
			} catch (error) {
				toast.error('Đã có lỗi xảy ra');
				throw new Error(error);
			}
		};
	}, [uploadFile]);

	const modules = useMemo(
		() => ({
			toolbar: {
				container: [
					[{ header: '1' }, { header: '2' }, { font: [] }],
					[{ size: [] }],
					['bold', 'italic', 'underline', 'strike', 'blockquote'],
					[{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
					['link', 'image', 'video'],
					['code-block'],
					['clean'],
				],
				handlers: {
					image: imageHandler,
				},
			},
			clipboard: {
				matchVisual: false,
			},
		}),
		[imageHandler],
	);

	const handleSubmit = () =>
		form.validateFields().then(async (values) => {
			try {
				if (isEdit && id && product)
					await editProduct({ data: values, id }).then(() => navigate(routes.PRODUCTS));
				else await addProduct(values).then(() => navigate(routes.PRODUCTS));
			} catch (error) {
				throw new Error(error);
			}
		});

	useEffect(() => {
		form.setFieldsValue(INITIAL_VALUES);

		if (isEdit && id && product) {
			form.setFieldsValue(product);
		}
	}, [form, id, isEdit, product]);

	return (
		<Form
			form={form}
			onFinish={handleSubmit}
		>
			<Typography.Title level={4}>Thêm sản phẩm</Typography.Title>

			<Card title="Thông tin cơ bản">
				<div className="grid grid-cols-12 gap-x-4">
					<div className="col-span-6">
						<Form.Item
							labelCol={{ span: 24 }}
							wrapperCol={{ span: 24 }}
							label="Tên"
							name="name"
							tooltip="Tên sản phẩm, bắt buộc, tối đa 300 ký tự"
							rules={[
								{
									required: true,
									message: 'Vui lòng nhập tên sản phẩm',
								},
								{
									max: 300,
									message: 'Tên sản phẩm không được vượt quá 300 ký tự',
								},
							]}
						>
							<Input />
						</Form.Item>
					</div>
					<div className="col-span-3">
						<Form.Item
							labelCol={{ span: 24 }}
							wrapperCol={{ span: 24 }}
							label="Danh mục"
							name="category"
							tooltip="Danh mục sản phẩm, bắt buộc"
							rules={[
								{
									required: true,
									message: 'Vui lòng chọn danh mục sản phẩm',
								},
							]}
						>
							<Select loading={isCategoriesLoading}>
								{map(filter(categories, { status: 'active' }), (item) => (
									<Select.Option
										key={v4()}
										value={JSON.stringify({ id: item?.id, name: item?.name })}
									>
										{item?.name}
									</Select.Option>
								))}
							</Select>
						</Form.Item>
					</div>
					<div className="col-span-3">
						<Form.Item
							labelCol={{ span: 24 }}
							wrapperCol={{ span: 24 }}
							label="Trạng thái"
							name="status"
							tooltip="Trạng thái sản phẩm, bắt buộc"
							rules={[
								{
									required: true,
									message: 'Vui lòng chọn trạng thái sản phẩm',
								},
							]}
						>
							<Select>
								<Select.Option value="active">Đang bán</Select.Option>
								<Select.Option value="disabled">Ngừng bán</Select.Option>
							</Select>
						</Form.Item>
					</div>
					<div className="col-span-4">
						<Form.Item
							labelCol={{ span: 24 }}
							wrapperCol={{ span: 24 }}
							label="Giá"
							name="price"
							tooltip="Giá sản phẩm, bắt buộc, phải là số, lớn hơn 0"
							rules={[
								{
									required: true,
									message: 'Vui lòng nhập giá sản phẩm',
								},
								{
									pattern: /^[0-9]*$/,
									message: 'Giá sản phẩm phải là số',
								},
							]}
						>
							<InputNumber
								prefix="đ"
								className="w-full"
								formatter={formatPrice}
								parser={parsePrice}
								min={0}
							/>
						</Form.Item>
					</div>
					<div className="col-span-4">
						<Form.Item
							labelCol={{ span: 24 }}
							wrapperCol={{ span: 24 }}
							label="Giá khuyến mãi"
							tooltip="Giá khuyến mãi sản phẩm, phải là số, lớn hơn 0, nhỏ hơn giá gốc"
							name="discount"
							rules={[
								{
									pattern: /^[0-9]*$/,
									message: 'Giá khuyến mãi sản phẩm phải là số',
								},
								{
									validator: (_, value) => {
										if (value >= form.getFieldValue('price')) {
											return Promise.reject(new Error('Giá khuyến mãi phải nhỏ hơn giá gốc'));
										}

										return Promise.resolve();
									},
								},
							]}
						>
							<InputNumber
								prefix="đ"
								className="w-full"
								formatter={formatPrice}
								parser={parsePrice}
								min={0}
							/>
						</Form.Item>
					</div>
					<div className="col-span-4">
						<Form.Item
							labelCol={{ span: 24 }}
							wrapperCol={{ span: 24 }}
							label="Số lượng"
							tooltip="Số lượng sản phẩm, bắt buộc, phải là số, lớn hơn hoặc bằng 0"
							name="quantity"
							rules={[
								{
									required: true,
									message: 'Vui lòng nhập số lượng sản phẩm',
								},
								{
									pattern: /^[0-9]*$/,
									message: 'Số lượng sản phẩm phải là số',
								},
							]}
						>
							<InputNumber
								prefix="đ"
								className="w-full"
								formatter={formatPrice}
								parser={parsePrice}
								min={0}
							/>
						</Form.Item>
					</div>
					<div className="col-span-full">
						<Form.Item
							labelCol={{ span: 24 }}
							wrapperCol={{ span: 24 }}
							label="Mô tả ngắn"
							name="shortDescription"
							tooltip="Mô tả ngắn sản phẩm, bắt buộc, tối đa 300 ký tự"
							rules={[
								{
									required: true,
									message: 'Vui lòng nhập mô tả ngắn sản phẩm',
								},
								{
									max: 300,
									message: 'Mô tả ngắn sản phẩm không được vượt quá 300 ký tự',
								},
							]}
						>
							<Input.TextArea rows={3} />
						</Form.Item>
					</div>
					<div className="col-span-full">
						<Form.Item
							labelCol={{ span: 24 }}
							wrapperCol={{ span: 24 }}
							label="Mô tả chi tiết"
							name="description"
							tooltip="Mô tả chi tiết sản phẩm, bắt buộc"
							rules={[
								{
									required: true,
									message: 'Vui lòng nhập mô tả chi tiết sản phẩm',
								},
							]}
							className="editor"
						>
							<ReactQuill
								ref={editorRef}
								theme="snow"
								modules={modules}
								formats={[
									'header',
									'font',
									'size',
									'bold',
									'italic',
									'underline',
									'strike',
									'blockquote',
									'list',
									'bullet',
									'indent',
									'link',
									'image',
									'video',
									'code-block',
								]}
							/>
						</Form.Item>
					</div>
				</div>
			</Card>

			<Card
				title="Hình ảnh"
				className="mt-4"
			>
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
										const fileRef = ref(storage, `/products/thumbnail/${v4()}-${file.name}`);

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

				<Form.Item
					labelCol={{
						span: 24,
					}}
					wrapperCol={{
						span: 24,
					}}
					rules={[
						{
							required: true,
							message: 'Vui lòng nhập ảnh chi tiết sản phẩm',
						},
					]}
					label="Ảnh chi tiết"
					name="images"
					tooltip="Ảnh chi tiết bắt buộc, tối đa 5 ảnh"
				>
					<Form.Item
						valuePropName="images"
						noStyle
					>
						<ImgCrop
							rotationSlider
							aspectSlider
							showReset
						>
							<Upload
								accept="image/*"
								maxCount={5}
								listType="picture-card"
								multiple
								onChange={({ file }) => {
									if (get(file, 'status') === 'removed') {
										const index = findIndex(images, (img) => img === file.url);

										if (index !== -1) {
											const newImages = cloneDeep(images);
											newImages.splice(index, 1);

											form.setFieldValue('images', newImages);
										}
									}
								}}
								fileList={map(images, (item, index) => ({
									uid: index,
									name: `anh-${index}`,
									status: 'done',
									url: item,
								}))}
								customRequest={async ({ file }) => {
									try {
										const fileRef = ref(storage, `/products/${v4()}-${file.name}`);

										const snapshot = await uploadFile(fileRef, file);
										const url = await getDownloadURL(snapshot.ref);

										if (size(images) >= 5) {
											toast.error('Chỉ được up tối đa 5 ảnh');
											return;
										}

										form.setFieldValue('images', [...images, url]);
									} catch (error) {
										toast.error('Đã có lỗi xảy ra');
										throw new Error(error);
									}
								}}
							>
								Tải lên
							</Upload>
						</ImgCrop>
					</Form.Item>
				</Form.Item>
			</Card>

			<Card className="mt-4">
				<div className="flex items-center gap-2 justify-end">
					<Button
						onClick={() => navigate(routes.PRODUCTS)}
						htmlType="button"
						type="default"
						loading={isEditting || isAdding}
						danger
					>
						Huỷ
					</Button>
					<Button
						htmlType="submit"
						type="primary"
						loading={isEditting || isAdding}
					>
						Lưu
					</Button>
				</div>
			</Card>
		</Form>
	);
}

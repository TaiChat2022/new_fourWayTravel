import { storage } from '@/utils/firebase.config';
import { Form } from 'antd';
import { getDownloadURL, ref } from 'firebase/storage';
import { useCallback, useMemo, useRef } from 'react';
import { useUploadFile } from 'react-firebase-hooks/storage';
import ReactQuill from 'react-quill';
import { toast } from 'react-toastify';
import { v4 } from 'uuid';

export default function Editor(props) {
	const editorRef = useRef();
	const [uploadFile] = useUploadFile();

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

	return (
		<Form.Item
			{...props}
			labelCol={{ span: 24 }}
			wrapperCol={{ span: 24 }}
			className={`editor ${props.className}`}
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
	);
}

import { Modal } from 'antd';

export default function CategoryModal({ open, onAccept, onCancel }) {
	return (
		<Modal
			title="Danh mục"
			open={open}
			onOk={onAccept}
			onCancel={onCancel}
		>
			category modal
		</Modal>
	);
}

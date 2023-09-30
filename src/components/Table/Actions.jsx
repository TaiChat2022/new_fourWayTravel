import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';

export default function Actions({ onDeleteClick, onEditClick }) {
	return (
		<div className="flex items-center gap-2">
			<Tooltip title="Cập nhật">
				<Button
					icon={<EditOutlined size="small" />}
					type="text"
					onClick={onEditClick}
				/>
			</Tooltip>
			<Tooltip title="Xóa">
				<Button
					onClick={onDeleteClick}
					icon={<DeleteOutlined size="small" />}
					type="text"
					danger
				/>
			</Tooltip>
		</div>
	);
}

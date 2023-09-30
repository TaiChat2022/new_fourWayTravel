import { CopyOutlined } from '@ant-design/icons';
import { Image } from 'antd';
import CopyToClipboard from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';

export function Preview({ id, image, name }) {
	return (
		<div className="flex items-center gap-2">
			<Image
				src={image}
				width={70}
				height={70}
				className="rounded-md"
			/>
			<div>
				<h5 className="text-base mb-0 leading-5">{name}</h5>
				<small className="text-gray-500">
					ID: {id}
					<CopyToClipboard
						text={id}
						onCopy={() => toast.success('Sao chép thàn công!!!')}
					>
						<CopyOutlined
							className="ml-1"
							size="small"
						/>
					</CopyToClipboard>
				</small>
			</div>
		</div>
	);
}

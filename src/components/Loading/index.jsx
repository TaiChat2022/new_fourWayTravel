import { Spin } from 'antd';

export default function Loading() {
	return (
		<div className="bg-white w-screen h-screen flex items-center justify-center">
			<Spin size="large" />
		</div>
	);
}

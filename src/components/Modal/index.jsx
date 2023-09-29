import { selectIsOpenModal, selectModalProps, selectModalView } from '@/stores/ui/selectors';
import { Modal } from 'antd';
import { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';

const DeleteModal = lazy(() => import('./DeleteModal'));

export default function ModalManagement() {
	const isOpenModal = useSelector(selectIsOpenModal);
	const modalProps = useSelector(selectModalProps);
	const modalView = useSelector(selectModalView);

	return (
		<Suspense>
			<Modal
				title={modalProps?.modalTitle}
				open={isOpenModal}
				onOk={() => modalProps.onOk()}
				onCancel={() => modalProps.onCancel()}
			>
				{modalView === 'DELETE' && <DeleteModal title={modalProps?.title} />}
			</Modal>
		</Suspense>
	);
}

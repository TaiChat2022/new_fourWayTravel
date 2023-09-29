import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './constants';

const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		openModal: (state, { payload }) => {
			state.isOpenModal = true;
			state.modalView = payload.view;
			state.modalProps = payload.props;
		},
		closeModal: (state) => {
			state.isOpenModal = false;
			state.modalView = '';
			state.modalProps = {};
		},
	},
});

export default uiSlice;
export const { openModal, closeModal } = uiSlice.actions;

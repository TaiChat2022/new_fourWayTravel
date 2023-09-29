import { createSelector } from 'reselect';
import { get } from 'lodash';
import { initialState } from './constants';

const selectsUiStore = (state) => get(state, 'ui', initialState);

export const selectIsOpenModal = createSelector([selectsUiStore], (state) => get(state, 'isOpenModal', false));
export const selectModalView = createSelector([selectsUiStore], (state) => get(state, 'modalView', ''));
export const selectModalProps = createSelector([selectsUiStore], (state) => get(state, 'modalProps', {}));

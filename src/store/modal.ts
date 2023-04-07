import { atom } from 'recoil';
import type { modalTypes } from '../components/modal/GlobalModal';

import type { LogoutType } from '../components/modal/LogoutModal';
import type { PostAdType } from '../components/modal/PostAdModal';
import type { WithdrawalType } from '../components/modal/WithdrawalModal';

export interface ConfirmModalType {
  modalType: typeof modalTypes.WithdrawalModal;
  modalProps: WithdrawalType;
}
export interface LogoutModalType {
  modalType: typeof modalTypes.LogoutModal;
  modalProps: LogoutType;
}
export interface PostAdModalType {
  modalType: typeof modalTypes.PostAdModal;
  modalProps: PostAdType;
}

export type ModalType = ConfirmModalType | LogoutModalType | PostAdModalType;

export const modalState = atom<ModalType | null>({
  key: 'modalState',
  default: null,
});

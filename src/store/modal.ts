import { atom } from 'recoil';
import type { modalTypes } from '../components/modal/GlobalModal';
import type { ILogoutType } from '../components/modal/LogoutModal';
import type { IPostAdType } from '../components/modal/postAdModal/PostAdModal';
import type { IProductDeleteType } from '../components/modal/ProductDeleteModal';
import type { IProductStatusType } from '../components/modal/ProductStatusModal';
import type { IWithdrawalType } from '../components/modal/WithdrawalModal';

interface WithdrawalModalType {
  modalType: typeof modalTypes.WithdrawalModal;
  modalProps: IWithdrawalType;
}
interface LogoutModalType {
  modalType: typeof modalTypes.LogoutModal;
  modalProps: ILogoutType;
}
interface PostAdModalType {
  modalType: typeof modalTypes.PostAdModal;
  modalProps: IPostAdType;
}
interface ProductStatusModalType {
  modalType: typeof modalTypes.ProductStatusModal;
  modalProps: IProductStatusType;
}
interface ProductDeleteModalType {
  modalType: typeof modalTypes.ProductDeleteModal;
  modalProps: IProductDeleteType;
}
export type ModalType =
  | WithdrawalModalType
  | LogoutModalType
  | PostAdModalType
  | ProductStatusModalType
  | ProductDeleteModalType;

export const modalState = atom<ModalType | null>({
  key: 'modalState',
  default: null,
});

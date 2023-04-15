import { useRecoilState } from 'recoil';
import { modalState } from '../../store/modal';

import AdProductDeleteModal from './AdProductDeleteModal';
import LogoutModal from './LogoutModal';
import PostAdModal from './postAdModal/PostAdModal';
import ProductDeleteModal from './ProductDeleteModal';
import ProductStatusModal from './ProductStatusModal';
import WithdrawalModal from './WithdrawalModal';

export const modalTypes = {
  WithdrawalModal: 'WithdrawalModal',
  LogoutModal: 'LogoutModal',
  PostAdModal: 'PostAdModal',
  ProductStatusModal: 'ProductStatusModal',
  ProductDeleteModal: 'ProductDeleteModal',
  AdProductDeleteModal: 'AdProductDeleteModal',
} as const;

const modalComponents = {
  [modalTypes.WithdrawalModal]: WithdrawalModal,
  [modalTypes.LogoutModal]: LogoutModal,
  [modalTypes.PostAdModal]: PostAdModal,
  [modalTypes.ProductStatusModal]: ProductStatusModal,
  [modalTypes.ProductDeleteModal]: ProductDeleteModal,
  [modalTypes.AdProductDeleteModal]: AdProductDeleteModal,
};

function GlobalModal() {
  const { modalType, modalProps } = useRecoilState(modalState)[0] || {};

  const renderComponent = () => {
    if (!modalType) return null;
    const ModalComponent = modalComponents[modalType];

    return <ModalComponent {...modalProps} />;
  };
  return <>{renderComponent()}</>;
}

export default GlobalModal;

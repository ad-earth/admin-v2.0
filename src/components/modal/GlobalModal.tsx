import { useRecoilState } from 'recoil';
import { modalState } from '../../store/modal';

import LogoutModal from './LogoutModal';
import PostAdModal from './PostAdModal';
import ProductStatusModal from './ProductStatusModal';
import WithdrawalModal from './WithdrawalModal';

export const modalTypes = {
  WithdrawalModal: 'WithdrawalModal',
  LogoutModal: 'LogoutModal',
  PostAdModal: 'PostAdModal',
  ProductStatusModal: 'ProductStatusModal',
} as const;

const modalComponents = {
  [modalTypes.WithdrawalModal]: WithdrawalModal,
  [modalTypes.LogoutModal]: LogoutModal,
  [modalTypes.PostAdModal]: PostAdModal,
  [modalTypes.ProductStatusModal]: ProductStatusModal,
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

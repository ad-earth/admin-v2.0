import { useRecoilState } from 'recoil';
import { modalState } from '../../store/modal';

import LogoutModal from './LogoutModal';
import PostAdModal from './PostAdModal';
import WithdrawalModal from './WithdrawalModal';

export const modalTypes = {
  WithdrawalModal: 'WithdrawalModal',
  LogoutModal: 'LogoutModal',
  PostAdModal: 'PostAdModal',
} as const;

const modalComponents = {
  [modalTypes.WithdrawalModal]: WithdrawalModal,
  [modalTypes.LogoutModal]: LogoutModal,
  [modalTypes.PostAdModal]: PostAdModal,
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

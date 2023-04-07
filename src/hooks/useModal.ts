import { useRecoilState } from 'recoil';
import type { ModalType } from '../store/modal';
import { modalState } from '../store/modal';

export default function useModal() {
  const [modal, setModal] = useRecoilState(modalState);

  const showModal = ({ modalType, modalProps }: ModalType) => {
    setModal({ modalType, modalProps });
    document.body.style.overflow = 'hidden';
  };

  const hideModal = () => {
    setModal(null);
    document.body.style.overflow = 'unset';
  };

  return {
    modal,
    setModal,
    showModal,
    hideModal,
  };
}

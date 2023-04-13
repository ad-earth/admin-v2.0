import Button from '../../elements/Button';
import useModal from '../../hooks/useModal';
import styles from './adSetButtonBox.module.scss';

type TProps = {
  setDelHandler: () => void;
};
export default function AdSetButtonBox({ setDelHandler }: TProps) {
  const { showModal } = useModal();

  const keywordBtnClcik = () => {
    showModal({
      modalType: 'PostAdModal',
      modalProps: {
        title: '광고등록',
      },
    });
  };
  return (
    <div className={styles.base}>
      <Button onClick={setDelHandler} styleClass="border_img">
        <img
          src={process.env.PUBLIC_URL + 'assets/icon/delete.png'}
          alt="deleteIcon"
        />
        상품 삭제
      </Button>
      <Button styleClass="small_gray" onClick={keywordBtnClcik}>
        키워드 등록
      </Button>
    </div>
  );
}

import { useNavigate } from 'react-router-dom';
import Button from '../elements/Button';
import styles from './notFoundPage.module.scss';

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div id={styles.container}>
      <h1>404</h1>
      <h3>Not Found</h3>
      <p>
        페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다. <br />
        입력하신 주소가 정확한지 다시 한번 확인해 주시기 바랍니다.
      </p>
      <div className={styles.btnBox}>
        <Button
          styleClass="medium_gray"
          text="이전화면"
          onClick={() => navigate(-1)}
        />

        <Button
          styleClass="medium_blue"
          text="홈으로 가기"
          onClick={() => navigate('/')}
        />
      </div>
    </div>
  );
}

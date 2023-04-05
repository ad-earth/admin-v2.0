import Input from '../../elements/Input';
import styles from './option.module.scss';

export default function Option() {
  return (
    <div id={styles.Option}>
      <ul>
        <li>
          <input type="checkbox" id="color" />
          <label htmlFor="color">색상 사용</label>
        </li>
        <li>
          <input type="checkbox" id="option" />
          <label htmlFor="option">옵션</label>
        </li>
        <li>추가금액</li>
        <li>수량</li>
      </ul>
      <div className={styles.wrap}>
        <Input styleName="input200" placeholder="색상 입력" />
        <input type="color" className={styles.colorPicker} />
        <Input styleName="input200" placeholder="옵션 입력" />
        <Input styleName="input200" placeholder="0" />
        <Input styleName="input200" placeholder="0 (필수)" />
        <p>삭제</p>
      </div>
      <div className={styles.btnWrap}>
        <button>옵션 추가</button>
      </div>
    </div>
  );
}

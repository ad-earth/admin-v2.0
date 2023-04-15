import type { ChangeEvent } from 'react';
import Button from '../../../elements/Button';
import Input from '../../../elements/Input';
import styles from './keywordForm.module.scss';
import type { IFormTarget } from './PostAdModal';

type TProps = {
  keywordSubmit: (e: IFormTarget) => void;
  keywordInput: string;
  handleKeyword: (e: ChangeEvent<HTMLInputElement>) => void;
  adSubmit: (e: IFormTarget) => void;
};

export default function KeywordForm(props: TProps) {
  const { keywordSubmit, keywordInput, handleKeyword } = props;
  return (
    <div className={styles.base}>
      <form onSubmit={keywordSubmit} id="keywordForm">
        <Input
          type="text"
          placeholder="키워드를 입력해주세요."
          value={keywordInput || ''}
          onChange={handleKeyword}
          styleName="input290"
          name="keyword"
        />
      </form>
      <Button text="조회" styleClass="small_gray" form="keywordForm" />
    </div>
  );
}

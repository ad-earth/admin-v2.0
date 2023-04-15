import type { ChangeEvent } from 'react';
import Button from '../../../elements/Button';
import Input from '../../../elements/Input';
import styles from './keywordForm.module.scss';
import type { IFormTarget } from './PostAdModal';

type TKeywordProps = {
  keywordSubmit: (e: IFormTarget) => void;
  handleKeyword: (e: ChangeEvent<HTMLInputElement>) => void;
};
type TAdProps = {
  adSubmit: (e: IFormTarget) => void;
  handleKeyword: (e: ChangeEvent<HTMLInputElement>) => void;
};

export function KeywordSubmitForm(props: TKeywordProps) {
  const { keywordSubmit, handleKeyword } = props;
  return (
    <div className={styles.base}>
      <form onSubmit={keywordSubmit} id="keywordForm">
        <Input
          type="text"
          placeholder="키워드를 입력해주세요."
          onChange={handleKeyword}
          styleName="input290"
          name="keyword"
        />
      </form>
      <Button text="조회" styleClass="small_gray" form="keywordForm" />
    </div>
  );
}

export function AdSubmitForm(props: TAdProps) {
  const { adSubmit, handleKeyword } = props;
  return (
    <div className={styles.base}>
      <form onSubmit={adSubmit}>
        <Input
          type="text"
          placeholder="키워드를 입력해주세요."
          styleName="input290"
          onChange={handleKeyword}
        />
      </form>
    </div>
  );
}

import type { ChangeEvent } from 'react';
import Button from '../../../elements/Button';
import Input from '../../../elements/Input';
import styles from './form.module.scss';
import type { IFormTarget } from './PostAdModal';

type TProps = {
  keywordSubmit: (e: IFormTarget) => void;
  keywordInput: string;
  handleKeyword: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function Form(props: TProps) {
  const { keywordSubmit, keywordInput, handleKeyword } = props;
  return (
    <form onSubmit={keywordSubmit} id="keywordForm" className={styles.form}>
      <Input
        type="text"
        placeholder="키워드를 입력해주세요."
        value={keywordInput || ''}
        onChange={handleKeyword}
        styleName="input290"
        name="keyword"
      />
      <Button
        type="submit"
        form="keywordForm"
        text="조회"
        styleClass="small_gray"
      />
    </form>
  );
}

import React, { useState } from 'react';
import Button from '../../elements/Button';
import Input from '../../elements/Input';
import useId from '../../query/useId';
import styles from './idForm.module.scss';

export default function IdForm() {
  const [brand, setBrand] = useState('');
  const [bNumber, setBNumber] = useState('');

  const { refetch, isSuccess, id } = useId(brand, bNumber);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    refetch();
    setBrand('');
    setBNumber('');
  };

  const handleBrand = (e: React.ChangeEvent<HTMLInputElement>) =>
    setBrand(e.target.value);

  const handleBNumber = (e: React.ChangeEvent<HTMLInputElement>) =>
    setBNumber(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <Input
        styleName="login"
        placeholder="상호명"
        type="text"
        onChange={handleBrand}
        value={brand}
      />
      <Input
        styleName="login"
        placeholder="사업자번호 예) 123467890"
        type="text"
        onChange={handleBNumber}
        value={bNumber}
      />
      {isSuccess ? (
        <p>
          아이디는 <span className={styles.bold}>{id}</span>입니다.
        </p>
      ) : null}
      <Button styleClass="big_blue" text="아이디 찾기" type="submit" />
    </form>
  );
}

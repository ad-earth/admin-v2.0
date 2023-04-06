import React from 'react';
import Button from '../../elements/Button';
import styles from './logInForm.module.scss';

export default function LogInForm() {
  return (
    <form id={styles.container}>
      <input />
      <input />
      <Button text="로그인" styleClass={'big-blue'} />
      <Button text="지구샵 바로가기" styleClass={'big-gray'} />
      <div className={styles.wrapper}>
        <Button text="회원가입하기" />
        <Button text="아이디/비밀번호 찾기" />
      </div>
    </form>
  );
}

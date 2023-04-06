import React from 'react';
import LogInForm from '../components/logIn/LogInForm';
import styles from './logInPage.module.scss';

export default function LogInPage() {
  return (
    <div id={styles.container}>
      <img src={process.env.PUBLIC_URL + 'assets/logo/logo.svg'} alt="logo" />
      <p>사업자 로그인</p>
      <LogInForm />
    </div>
  );
}

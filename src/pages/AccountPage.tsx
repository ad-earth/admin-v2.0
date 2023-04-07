import React from 'react';
import FindFormBox from '../components/account/FindFormBox';
import styles from './accountPage.module.scss';

export default function AccountPage() {
  return (
    <div id={styles.container}>
      <img src={process.env.PUBLIC_URL + 'assets/logo/logo.svg'} alt="logo" />
      <FindFormBox />
    </div>
  );
}

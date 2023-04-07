import React, { useState } from 'react';
import styles from './findFormBox.module.scss';
import Form from './Form';

export default function FindFormBox() {
  const [tab, setTab] = useState('id');

  const changeTab = (selected: string) => setTab(selected);

  return (
    <div id={styles.container}>
      <div className={styles.wrapper}>
        <section
          className={`${styles.tab} ${tab === 'id' && styles.active}`}
          onClick={() => changeTab('id')}
        >
          아이디 찾기
        </section>
        <section
          className={`${styles.tab} ${tab === 'password' && styles.active}`}
          onClick={() => changeTab('password')}
        >
          비밀번호 찾기
        </section>
      </div>
      <Form tab={tab} />
    </div>
  );
}

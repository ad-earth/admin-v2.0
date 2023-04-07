import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../elements/Button';
import styles from './form.module.scss';
import IdForm from './IdForm';
import PwdForm from './PwdForm';

type TProps = {
  tab: string;
};

export default function Form({ tab }: TProps) {
  const navigate = useNavigate();

  return (
    <div id={styles.container}>
      <section className={styles.wrapper}>
        {tab === 'id' ? <IdForm /> : <PwdForm />}
        <section>
          <Button text="로그인" onClick={() => navigate('/login')} />
          <Button text="회원가입" onClick={() => navigate('/signup')} />
        </section>
      </section>
    </div>
  );
}

import React from 'react';
import Button from '../../elements/Button';
import Input from '../../elements/Input';
import styles from './form.module.scss';
import IdForm from './IdForm';

type TProps = {
  tab: string;
};

export default function Form({ tab }: TProps) {
  return (
    <div id={styles.container}>
      <section className={styles.wrapper}>
        {tab === 'id' ? (
          <IdForm />
        ) : (
          <form>
            <Input styleName="login" placeholder="아이디" type="text" />
            <Input
              styleName="login"
              placeholder="사업자번호 예) 123467890"
              type="text"
            />
            <Button styleClass="big_blue" text="비밀번호 찾기" type="submit" />
          </form>
        )}

        <section>
          <Button text="로그인" />
          <Button text="회원가입" />
        </section>
      </section>
    </div>
  );
}

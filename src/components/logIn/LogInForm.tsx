import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../elements/Button';
import Input from '../../elements/Input';
import useRegExp from '../../hooks/useRegExp';
import useLogin from '../../query/useLogin';
import styles from './logInForm.module.scss';

export default function LogInForm() {
  const [error, setError] = useState(false);

  const { isValidId, isValidPassword } = useRegExp();
  const { mutate } = useLogin();

  const login = (id: string, password: string) => {
    if (isValidId(id) && isValidPassword(password))
      mutate({ id: id, pwd: password });
    else setError(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    login(formData.get('id') as string, formData.get('password') as string);
  };

  const handleChange = () => setError(false);

  const navigate = useNavigate();

  return (
    <form id={styles.container} onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="아이디"
        styleName="login"
        name="id"
        onChange={handleChange}
      />
      <Input
        type="password"
        placeholder="비밀번호"
        styleName="login"
        name="password"
        onChange={handleChange}
      />
      {error && (
        <p className={styles.error}>아이디와 비밀번호를 다시 확인해주세요.</p>
      )}
      <Button text="로그인" styleClass={'big_blue'} type="submit" />
      <Button
        text="지구샵 바로가기"
        styleClass={'big_gray'}
        onClick={() => window.open('https://www.adearth.shop/')}
      />
      <div className={styles.wrapper}>
        <Button text="회원가입하기" onClick={() => navigate('/signup')} />
        <Button
          text="아이디/비밀번호 찾기"
          onClick={() => navigate('/find_account')}
        />
      </div>
    </form>
  );
}

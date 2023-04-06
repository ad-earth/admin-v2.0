import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../elements/Button';
import Input from '../../elements/Input';
import useRegExp from '../../hooks/useRegExp';
import useLogin from '../../query/useLogin';
import styles from './logInForm.module.scss';

export default function LogInForm() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const { isValidId, isValidPassword } = useRegExp();
  const { mutate } = useLogin(id, password);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValidId(id) && isValidPassword(password)) mutate();
    else setError(true);
  };

  const handleIdInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setId(e.target.value);
  };

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  return (
    <form id={styles.container} onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="아이디"
        styleName="login"
        value={id}
        onChange={handleIdInput}
      />
      <Input
        type="password"
        placeholder="비밀번호"
        styleName="login"
        value={password}
        onChange={handlePasswordInput}
      />
      {id && password && error && (
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

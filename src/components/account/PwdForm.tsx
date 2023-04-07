import React, { useMemo, useState } from 'react';
import Button from '../../elements/Button';
import Input from '../../elements/Input';
import useNewPassword from '../../query/useNewPassword';
import usePassword from '../../query/usePassword';

export default function PwdForm() {
  const [id, setId] = useState('');
  const [bNumber, setBNumber] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const query = usePassword(id, bNumber);

  const confirmId = useMemo(() => query.data?.data.a_Idx, [query]);
  const { mutate } = useNewPassword(confirmId ? confirmId : 0, newPassword);

  const handleFind = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    query.refetch();
    setNewPassword('');
  };

  const handleReset = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (confirmId) mutate();
    setId('');
    setBNumber('');
  };

  const handleId = (e: React.ChangeEvent<HTMLInputElement>) =>
    setId(e.target.value);

  const handleBNumber = (e: React.ChangeEvent<HTMLInputElement>) =>
    setBNumber(e.target.value);

  const handleNewPassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewPassword(e.target.value);

  return (
    <>
      {query.isSuccess ? (
        <form onSubmit={handleReset}>
          <Input
            styleName="login"
            placeholder="새로운 비밀번호"
            type="password"
            onChange={handleNewPassword}
            value={newPassword}
          />
          {<p>변경할 비밀번호를 입력해주세요.</p>}
          <Button styleClass="big_blue" text="비밀번호 재설정" type="submit" />
        </form>
      ) : (
        <form onSubmit={handleFind}>
          <Input
            styleName="login"
            placeholder="아이디"
            type="text"
            onChange={handleId}
            value={id}
          />
          <Input
            styleName="login"
            placeholder="사업자번호 예) 123467890"
            type="text"
            onChange={handleBNumber}
            value={bNumber}
          />
          <Button styleClass="big_blue" text="비밀번호 찾기" type="submit" />
        </form>
      )}
    </>
  );
}

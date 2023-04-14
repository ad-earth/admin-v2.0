import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SIGNUP_INPUT } from '../../constants';
import Button from '../../elements/Button';
import useRegExp from '../../hooks/useRegExp';
import useAuth from '../../query/useAuth';
import FormInput from './FormInput';
import styles from './signupForm.module.scss';

interface IFormElements extends HTMLFormElement {
  mailid: HTMLInputElement;
}
export interface IFormTarget extends React.FormEvent<HTMLFormElement> {
  target: IFormElements;
}

export default function SignupForm() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const { isValidId, isValidPassword, isValidPhone } = useRegExp();
  const [inputData, setInputData] = useState(SIGNUP_INPUT);

  const isDisabled =
    !inputData.id.isCheck &&
    !inputData.password.isCheck &&
    !inputData.passwordCheck.isCheck &&
    !inputData.brand.isCheck &&
    !inputData.buisness.isCheck &&
    !inputData.tel.isCheck;

  function handleInput(e: React.FocusEvent<HTMLInputElement>) {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case 'id': {
        return isValidId(value)
          ? setInputData({
              ...inputData,
              id: { isCheck: true, msg: '아이디 확인' },
            })
          : setInputData({
              ...inputData,
              id: {
                isCheck: false,
                msg: '아이디를 다시 확인해주세요, (5~10 자리)',
              },
            });
      }
      case 'password': {
        return isValidPassword(value)
          ? setInputData({
              ...inputData,
              password: {
                isCheck: true,
                msg: '비밀번호 확인.',
                val: value,
              },
            })
          : setInputData({
              ...inputData,
              password: {
                isCheck: false,
                msg: '잘못된 비밀번호(영문,숫자,특수문자 포함(8~20자)',
                val: value,
              },
            });
      }
      case 'passwordCheck': {
        return inputData.password.val === value
          ? setInputData({
              ...inputData,
              passwordCheck: { isCheck: true, msg: '비밀번호 일치.' },
            })
          : setInputData({
              ...inputData,
              passwordCheck: {
                isCheck: false,
                msg: '비밀번호를 다시 확인해주세요.',
              },
            });
      }
      case 'brand': {
        return value.length > 0
          ? setInputData({
              ...inputData,
              brand: { isCheck: true, msg: '상호명 확인.' },
            })
          : setInputData({
              ...inputData,
              brand: {
                isCheck: false,
                msg: '상호명을 입력해주세요.',
              },
            });
      }
      case 'buisness': {
        return value.length > 0
          ? setInputData({
              ...inputData,
              buisness: { isCheck: true, msg: '사업자번호 확인.' },
            })
          : setInputData({
              ...inputData,
              buisness: {
                isCheck: false,
                msg: '사업자번호를 입력해주세요.',
              },
            });
      }
      case 'tel': {
        return isValidPhone(value)
          ? setInputData({
              ...inputData,
              tel: { isCheck: true, msg: '연락처 확인.' },
            })
          : setInputData({
              ...inputData,
              tel: {
                isCheck: false,
                msg: '연락처를 다시 확인해주세요.',
              },
            });
      }

      default:
    }
  }

  function onSubmit(e: IFormTarget) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    signup.mutate(
      {
        a_Id: formJson.id,
        a_Pw: formJson.password,
        a_Brand: formJson.brand,
        a_Number: formJson.buisness,
        a_Phone: formJson.tel,
      },
      {
        onError: error => {
          const errMsg = error.response.data.errorMessage;
          if (errMsg === '중복된 연락처입니다.') {
            setInputData({
              ...inputData,
              tel: {
                isCheck: false,
                msg: error.response.data.errorMessage,
              },
            });
          } else if (errMsg === '중복된 아이디입니다.') {
            setInputData({
              ...inputData,
              buisness: {
                isCheck: false,
                msg: error.response.data.errorMessage,
              },
            });
          } else if (errMsg === '중복된 사업자번호입니다.') {
            setInputData({
              ...inputData,
              tel: {
                isCheck: false,
                msg: error.response.data.errorMessage,
              },
            });
          } else return;
        },
      }
    );
  }
  return (
    <form className={styles.base} onSubmit={onSubmit} id="signupForm">
      <FormInput
        type="text"
        placeholder="아이디 (영문,숫자 5~10자)"
        name="id"
        msg={inputData.id.msg}
        isCheck={inputData.id.isCheck}
        handleInput={handleInput}
      />
      <FormInput
        type="password"
        placeholder="비밀번호 (영문,숫자,특수문자 포함(8~20자)"
        name="password"
        msg={inputData.password.msg}
        isCheck={inputData.password.isCheck}
        handleInput={handleInput}
      />
      <FormInput
        type="password"
        placeholder="비밀번호 확인"
        name="passwordCheck"
        msg={inputData.passwordCheck.msg}
        isCheck={inputData.passwordCheck.isCheck}
        handleInput={handleInput}
      />
      <FormInput
        type="text"
        placeholder="상호명"
        name="brand"
        msg={inputData.brand.msg}
        isCheck={inputData.brand.isCheck}
        handleInput={handleInput}
      />
      <FormInput
        type="number"
        placeholder="사업자 번호  예) 020102192"
        name="buisness"
        msg={inputData.buisness.msg}
        isCheck={inputData.buisness.isCheck}
        handleInput={handleInput}
      />
      <FormInput
        type="tel"
        placeholder="연락처  예) 010-0000-0000"
        name="tel"
        msg={inputData.tel.msg}
        isCheck={inputData.tel.isCheck}
        handleInput={handleInput}
      />

      <Button
        type="submit"
        form="signupForm"
        text="회원가입"
        disabled={isDisabled}
        styleClass="big_blue"
      >
        회원가입
      </Button>
      <p className={styles.findeWrap}>
        이미 계정이 있으신가요?
        <span onClick={() => navigate('/')}>로그인</span>
      </p>
    </form>
  );
}

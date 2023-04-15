import React from 'react';
import styles from './input.module.scss';

export interface IProps {
  styleName: string;
  placeholder: string;
  id?: string;
  type?: string;
  name?: string;
  value?: string | number;
  defaultValue?: string;
  disabled?: boolean;
  min?: number;
  setInput?: (val: string) => void;
  setInputNum?: (val: number) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  onBlur?: (e?: React.FocusEvent<HTMLInputElement>) => void;
}

export default function Input(props: IProps) {
  const {
    styleName,
    placeholder,
    id,
    type,
    name,
    value,
    defaultValue,
    disabled,
    onChange,
    onBlur,
  } = props;
  return (
    <input
      className={styles[`${styleName}`]}
      placeholder={placeholder}
      id={id}
      type={type}
      name={name}
      value={value}
      defaultValue={defaultValue}
      disabled={disabled}
      onChange={onChange}
      autoComplete="off"
      onBlur={onBlur}
    />
  );
}

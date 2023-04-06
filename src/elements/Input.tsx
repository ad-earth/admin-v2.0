import React from 'react';
import styles from './input.module.scss';

export interface IProps {
  styleName: string;
  placeholder: string;
  type?: string;
  name?: string;
  value?: string | number;
  defaultValue?: string;
  disabled?: boolean;
  min?: number;
  ref?: any;
  setInput?: (val: string) => void;
  setInputNum?: (val: number) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
}

export default function Input(props: IProps) {
  const {
    styleName,
    placeholder,
    type,
    name,
    value,
    defaultValue,
    disabled,
    onChange,
  } = props;
  return (
    <input
      className={styles[`${styleName}`]}
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      defaultValue={defaultValue}
      disabled={disabled}
      onChange={onChange}
    />
  );
}

import React from 'react';
import styles from './button.module.scss';

type TProps = {
  children?: React.ReactNode;
  text?: string;
  styleClass?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
  onClick?: () => void;
};

export default function Button({
  styleClass,
  children,
  text,
  type,
  disabled,
  onClick,
}: TProps) {
  return (
    <button
      className={styles[`${styleClass}`]}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text ? text : children}
    </button>
  );
}

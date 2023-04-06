import React from 'react';
import styles from './button.module.scss';

type TProps = {
  children?: React.ReactNode;
  text?: string;
  styleClass?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
};

export default function Button({
  styleClass,
  children,
  text,
  type,
  onClick,
}: TProps) {
  return (
    <button className={styles[`${styleClass}`]} type={type} onClick={onClick}>
      {text ? text : children}
    </button>
  );
}

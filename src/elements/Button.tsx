import React from 'react';
import styles from './button.module.scss';

type TProps = {
  children?: React.ReactNode;
  text?: string;
  styleClass?: string;
};

export default function Button({ styleClass, children, text }: TProps) {
  return (
    <button className={styles[`${styleClass}`]}>
      {text ? text : children}
    </button>
  );
}

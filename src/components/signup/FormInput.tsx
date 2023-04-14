import Input from '../../elements/Input';
import styles from './formInput.module.scss';

type TProps = {
  type: string;
  placeholder: string;
  name: string;
  msg: string;
  isCheck: boolean;
  handleInput: (e?: React.FocusEvent<HTMLInputElement>) => void;
};

export default function FormInput(props: TProps) {
  const { type, placeholder, name, msg, isCheck, handleInput } = props;
  return (
    <>
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        styleName="login"
        onBlur={handleInput}
      />
      <span id={styles.msg} className={isCheck ? styles.success : styles.error}>
        {msg}
      </span>
    </>
  );
}

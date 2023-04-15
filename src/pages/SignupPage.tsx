import SignupForm from '../components/signup/SignupForm';
import styles from './signupPage.module.scss';

export default function SignupPage() {
  return (
    <div id={styles.container}>
      <img src={process.env.PUBLIC_URL + 'assets/logo/logo.svg'} alt="logo" />
      <span className={styles.title}>사업자 회원가입</span>
      <SignupForm />
    </div>
  );
}

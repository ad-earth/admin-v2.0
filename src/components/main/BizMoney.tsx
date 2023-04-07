import useBizMoney from '../../query/useBizMoney';
import styles from './bizMoney.module.scss';

//nav
function BizMoneyNav() {
  return (
    <article className={`${styles.bizMoney} ${styles.nav}`}>
      <div className={styles.titleBox}>
        <img
          src={process.env.PUBLIC_URL + 'assets/icon/bizMoney.svg'}
          alt="bizIcon"
        />
        <h3>Biz money</h3>
      </div>
      <MoneyBox boxSize={true} />
    </article>
  );
}
//home
function BizMoneyHome() {
  const subtitle = '비즈머니를 간편하 게 충전하세요';
  return (
    <article
      className={`${styles.bizMoney} ${styles.home}`}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + 'assets/bizBg.svg'})`,
      }}
    >
      <h3>내 비즈머니</h3>
      <p className={styles.subtitle}>{subtitle}</p>
      <MoneyBox boxSize={false} />
    </article>
  );
}
export { BizMoneyNav, BizMoneyHome };

//base
function MoneyBox({ boxSize }: { boxSize: boolean }) {
  const button = boxSize ? '충전' : '충전하기';
  const { bizQuery } = useBizMoney();
  return (
    <div className={styles.money}>
      <p>
        {bizQuery?.data?.toLocaleString()} <span>원</span>
      </p>
      {boxSize ? <button>{button}</button> : <button>{button}</button>}
    </div>
  );
}

import Button from '../../elements/Button';
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
      <MoneyBox boxSize="xsmall" />
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
      <MoneyBox boxSize="medium" />
    </article>
  );
}
export { BizMoneyNav, BizMoneyHome };

//base
function MoneyBox({ boxSize }: { boxSize: string }) {
  const { bizQuery, addBiz } = useBizMoney();

  return (
    <div className={styles.money}>
      <p>
        {bizQuery?.data?.toLocaleString()} <span>원</span>
      </p>
      {boxSize === 'xsmall' ? (
        <Button styleClass="xsmall_blue" text="충전" onClick={addBiz.mutate} />
      ) : (
        <Button
          styleClass="small_blue"
          text="충전하기"
          onClick={addBiz.mutate}
        />
      )}
    </div>
  );
}

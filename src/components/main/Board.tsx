import styles from './board.module.scss';

type Tprops = {
  list: {
    type: string;
    title: string;
    cases: string;
    img: string;
  };
  board: number;
};

export default function Board({ list, board }: Tprops) {
  return (
    <article className={styles.base}>
      <div className={`${styles.iconBox} ${styles[`${list.type}`]}`}>
        <img src={list.img} alt="icon"></img>
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{list.title}</h3>
        <span className={styles.contentText}>
          {board?.toLocaleString()} {list.cases}
        </span>
      </div>
    </article>
  );
}

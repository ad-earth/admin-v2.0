import styles from './accordionItem.module.scss';

type TProps = {
  index: number;
  title: string;
  description: string[];
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
};

export default function AccordionItem(props: TProps) {
  const { index, title, description, active, setActive } = props;
  const handleToggle = () => setActive(index);

  return (
    <div className={styles.base}>
      <div className={styles.accordion_titleBox}>
        <button
          className={active === index ? styles.active : styles.inactive}
          onClick={handleToggle}
        >
          <span>{title}</span>
          <span className={active === index ? styles.minus : styles.plus} />
        </button>
      </div>
      <div className={styles.accordion_panel}>
        <div
          className={active === index ? styles.panel_open : styles.panel_close}
        >
          {description.map((text, idx) => (
            <p key={idx}>{text}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

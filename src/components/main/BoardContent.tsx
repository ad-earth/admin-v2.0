import useMainDashboard from '../../query/useMainDashboard';
import Board from './Board';
import styles from './boardContent.module.scss';

export default function BoardContent() {
  const { boardData, isLoading } = useMainDashboard();

  if (isLoading) return <>...isLoading</>;
  return (
    <div className={styles.boardWrapper}>
      {boardList.map((list, idx) => (
        <Board key={idx} list={list} board={boardData[idx]} />
      ))}
    </div>
  );
}

const boardList = [
  {
    type: 'newOrder',
    title: '신규주문',
    cases: '건',
    img: process.env.PUBLIC_URL + 'assets/icon/newOrder.svg',
  },
  {
    type: 'lastMonth',
    title: '전월 매출액',
    cases: '원',
    img: process.env.PUBLIC_URL + 'assets/icon/lastMonth.svg',
  },
  {
    type: 'exposedProd',
    title: '노출 상품 수',
    cases: '건',
    img: process.env.PUBLIC_URL + 'assets/icon/exposedProd.svg',
  },
];

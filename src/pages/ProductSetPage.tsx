import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';
import ProductSetButtonBox from '../components/productSet/ProductSetButtonBox';
import ProductSetTable from '../components/productSet/ProductSetTable';
import { MediumDropdown } from '../elements/DropDown';
import Pagination from '../elements/Pagination';
import useModal from '../hooks/useModal';
import useProdManagement from '../query/useProdManagement';
import styles from './productSetPage.module.scss';

export default function ProductSetPage() {
  const { showModal } = useModal();
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page');
  const category = searchParams.get('category');
  const { productQuery } = useProdManagement();
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  useEffect(() => {
    setCheckedItems([]);
  }, [category, page, productQuery.data?.tableLength]);

  const setDelHandler = () => {
    checkedItems.length === 0
      ? toast.error('삭제할 상품이 없습니다.')
      : showModal({
          modalType: 'ProductDeleteModal',
          modalProps: {
            title: '상품을 삭제하시겠습니까?',
            productNo: { p_No: checkedItems },
          },
        });
  };

  return (
    <div id={styles.container}>
      <h2 className={styles.title}>상품관리</h2>
      <div className={styles.searchBox}>
        <MediumDropdown
          placeholder="전체"
          itemList={selectList}
          queryKey="category"
        />
      </div>
      <ProductSetButtonBox setDelHandler={setDelHandler} />
      <ProductSetTable
        prodList={productQuery?.data?.tableList}
        checkedItems={checkedItems}
        setCheckedItems={setCheckedItems}
      />
      <div className={styles.paginationBox}>
        <Pagination pageCnt={productQuery?.data?.cnt} />
      </div>
    </div>
  );
}

const selectList = [
  '전체',
  '욕실',
  '주방',
  '음료용품',
  '식품',
  '생활',
  '화장품',
  '문구',
];

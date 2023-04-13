import { useEffect, useMemo, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';

import AdSetButtonBox from '../components/adSet/AdSetButtonBox';
import AdSetTabel from '../components/adSet/AdSetTabel';
import { MediumDropdown } from '../elements/DropDown';
import Pagination from '../elements/Pagination';
import useAdFilter from '../query/useAdFilter';
import useAdManagement from '../query/useAdManagement';

import styles from './adSetPage.module.scss';

export default function AdSetPage() {
  const { AdfilterQuery, AdFilterList } = useAdFilter();
  const [searchParams] = useSearchParams();
  const product = searchParams.get('product');
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const productNum = useMemo(
    () =>
      product !== ''
        ? AdfilterQuery?.data?.productList.filter(
            el => el.p_Name === product
          )[0].p_No
        : 0,
    [AdfilterQuery, product]
  );

  const { productQuery, removeProduct } = useAdManagement(productNum);

  useEffect(() => {
    setCheckedItems([]);
  }, [productQuery.data?.keywordLength]);

  const setDelHandler = () => {
    checkedItems.length === 0
      ? toast.error('삭제할 상품이 없습니다.')
      : removeProduct.mutate(
          { p_No: productNum, k_No: checkedItems },
          {
            onSuccess: () => {
              toast.success('상품이 삭제되었습니다.');
            },
          }
        );
  };

  return (
    <div id={styles.container}>
      <h2 className={styles.title}>상품관리</h2>
      <div className={styles.searchBox}>
        <MediumDropdown
          placeholder="상품명"
          itemList={AdFilterList}
          queryKey="product"
        />
      </div>
      <AdSetButtonBox
        setDelHandler={setDelHandler}
        product={product}
        productNum={productNum}
        prodLength={productQuery.data?.keywordList.length}
        p_Status={productQuery.data?.p_Status}
      />
      <AdSetTabel
        product={product}
        productNum={productNum}
        prodList={productQuery?.data?.keywordList}
        checkedItems={checkedItems}
        setCheckedItems={setCheckedItems}
      />
      <div className={styles.paginationBox}>
        <Pagination pageCnt={productQuery?.data?.cnt} />
      </div>
    </div>
  );
}

import { useState } from 'react';
import { toast } from 'react-hot-toast';
import Button from '../../../elements/Button';
import useModal from '../../../hooks/useModal';
import { useAdkeyword } from '../../../query/useAdkeyword';
import useAdManagement from '../../../query/useAdManagement';
import Form from './KeywordForm';
import styles from './postAdModal.module.scss';
import AntSwitch from './Switch';
import Table from './Table';
import TooltipTiltle from './TooltipTiltle';

export interface IPostAdType {
  title: string;
  product?: string;
  productNum?: number;
  data?: {
    keyword?: string;
    k_Level?: number;
    k_Cost?: number;
    k_Status?: boolean;
  };
}
export interface IData {
  p_No: number;
  keyword: string;
  k_Level: number;
  k_Cost: number;
  k_Status: boolean;
}
interface IFormElements extends HTMLFormElement {
  mailid: HTMLInputElement;
}
export interface IFormTarget extends React.FormEvent<HTMLFormElement> {
  target: IFormElements;
}

export default function PostAdModal(props: IPostAdType) {
  const { title, product, productNum, data } = props;
  const { hideModal } = useModal();
  const { addProduct, changeProduct } = useAdManagement();
  const [keywordInput, setKeywordInput] = useState<string>('');

  const isChange = title === '광고수정';

  const [dataList, setDataList] = useState<IData>({
    p_No: productNum,
    keyword: data?.keyword || null,
    k_Level: data?.k_Level
      ? data.k_Level === 5
        ? 1
        : data.k_Level
      : undefined,
    k_Cost: data?.k_Cost || 0,
    k_Status: data?.k_Status,
  });
  const { keywordLevelQuery } = useAdkeyword({
    p_No: dataList.p_No,
    keyword: dataList.keyword,
    k_Level: dataList.k_Level,
  });

  const space = /\s/;
  function handleKeyword(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    space.exec(val)
      ? toast.error('해당 항목에는 공백을 사용할 수 없습니다.')
      : setKeywordInput(e.target.value);
  }

  const keywordSubmit = (e: IFormTarget) => {
    e.preventDefault();
    !space.exec(keywordInput) && keywordInput.length > 0
      ? setDataList({ ...dataList, keyword: keywordInput, k_Level: 1 })
      : toast.error('키워드를 입력해주세요');
  };
  const adSubmit = (e?: IFormTarget) => {
    e.preventDefault();
    if (
      dataList.k_Status &&
      dataList.k_Cost < keywordLevelQuery.data?.levelCost
    )
      return toast.error('입찰가가 예상금액보다 낮습니다.');

    switch (title) {
      case '광고등록':
        dataList.k_Level
          ? addProduct.mutate({
              p_No: dataList.p_No,
              keyword: dataList.keyword,
              k_Level: dataList.k_Level,
              k_Cost: dataList.k_Cost,
              k_Status: dataList.k_Status,
            })
          : addProduct.mutate({
              p_No: dataList.p_No,
              keyword: keywordInput,
              k_Level: 5,
              k_Cost: 0,
              k_Status: false,
            });
        break;
      case '광고수정':
        dataList.k_Status
          ? changeProduct.mutate({
              p_No: dataList.p_No,
              keyword: dataList.keyword,
              k_Level: dataList.k_Level,
              k_Cost: dataList.k_Cost,
              k_Status: dataList.k_Status,
            })
          : changeProduct.mutate({
              p_No: dataList.p_No,
              keyword: dataList.keyword,
              k_Level: 5,
              k_Cost: 0,
              k_Status: false,
            });
        break;
      default:
        toast.error(`err : ${title}`);
    }
  };
  const isDisabled = isChange ? !dataList.keyword : !keywordInput.length;

  return (
    <div className={styles.base}>
      <div className={styles.modalContent}>
        <div className={styles.head}>
          <h3>{title}</h3>
          <img
            src={process.env.PUBLIC_URL + 'assets/icon/cancel.svg'}
            alt="닫기"
            onClick={hideModal}
          />
        </div>
        <TooltipTiltle tilte="상품" tooltipTilte="광고 등록될 상품정보">
          <span>{product}</span>
        </TooltipTiltle>
        <TooltipTiltle
          tilte="광고 on/off"
          tooltipTilte="광고를 등록하시려면 스위치를 켜주세요."
        >
          <AntSwitch k_Status={dataList.k_Status} setDataList={setDataList} />
        </TooltipTiltle>
        <TooltipTiltle
          tilte="키워드"
          tooltipTilte="광고등록 키워드. 키워드는 상품별 최대 20개 까지 가능합니다."
        >
          {isChange ? (
            <span>{dataList.keyword}</span>
          ) : (
            <Form
              keywordSubmit={keywordSubmit}
              keywordInput={keywordInput}
              handleKeyword={handleKeyword}
              adSubmit={adSubmit}
            />
          )}
        </TooltipTiltle>
        {dataList.k_Status && (
          <Table
            levelCost={keywordLevelQuery?.data?.levelCost}
            keyword={dataList.keyword}
            kLevel={dataList.k_Level}
            kCost={data.k_Cost}
            setDataList={setDataList}
            adSubmit={adSubmit}
          />
        )}
        <div className={styles.btnBox}>
          <Button
            type="submit"
            form="adForm"
            styleClass="medium_blue"
            disabled={isDisabled}
            text={title}
            onClick={adSubmit}
          />
        </div>
      </div>
    </div>
  );
}

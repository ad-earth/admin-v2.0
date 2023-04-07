import { useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { useRecoilValue } from 'recoil';
import { CATEGORY } from '../../constants';
import Button from '../../elements/Button';
import { MediumDropdown } from '../../elements/DropDown';
import Input from '../../elements/Input';
import useProduct from '../../query/useProduct';
import { optionList } from '../../store/option';
import Editor from './Editor';
import Option from './Option';
import styles from './postForm.module.scss';
import Thumbnail from './Thumbnail';

export default function PostForm() {
  const [category, setCategory] = useState<string>('');
  const [prodName, setProdName] = useState<string>('');
  const [prodPrice, setProdPrice] = useState<string>('');
  const [isDiscount, setIsDiscount] = useState<boolean>(false);
  const [prodDiscount, setProdDiscount] = useState<string>('');
  const [prodDesc, setProdDesc] = useState<string>('');
  const [thumb1Url, setThumb1Url] = useState<string>('');
  const [thumb2Url, setThumb2Url] = useState<string>('');
  const [contents, setContents] = useState<string>('');
  const [isErrorCheck, SetIsErrorCheck] = useState<boolean>(false);
  const option = useRecoilValue(optionList);

  const ErrorCheck = () => {
    if (!category) toast.error('상품의 카테고리를 선택해주세요!');
    else if (!prodName) toast.error('상품명을 입력해주세요!');
    else if (!prodPrice) toast.error('상품 가격을 입력해주세요!');
    else if (!prodDesc) toast.error('상품 설명을 입력해주세요');
    else if (prodDesc.length < 5)
      toast.error('상품 설명은 5~30자 입력해주세요');
    else if (!thumb1Url || !thumb2Url)
      toast.error('상품 이미지를 등록해주세요!(2개 필수)');
    else if (!option[0].optionCnt) toast.error('옵션 수량 입력은 필수입니다!');
    else if (!contents) toast.error('상품의 상세 설명을 입력해주세요!');
    else return SetIsErrorCheck(true);
  };

  const {
    postProduct: { mutate },
  } = useProduct();

  const handlePost = () => {
    ErrorCheck();
    if (isErrorCheck) {
      const postData = {
        p_Category: category,
        p_Thumbnail: [thumb1Url, thumb2Url],
        p_Name: prodName,
        p_Cost: Number(prodPrice),
        p_Sale: isDiscount,
        p_Discount: Number(prodDiscount),
        p_Option: option,
        p_Desc: prodDesc,
        p_Content: contents,
      };
      mutate(postData);
    }
  };

  const discountPrice = useMemo(() => {
    if (prodPrice && prodDiscount) {
      setIsDiscount(true);
      const discountVal =
        Number(prodPrice) - (Number(prodPrice) / 100) * Number(prodDiscount);
      return <p>{discountVal}원</p>;
    } else {
      setIsDiscount(false);
      return null;
    }
  }, [prodPrice, prodDiscount]);

  return (
    <div id={styles.PostForm}>
      <div className={styles.container}>
        <div className={styles.form}>
          <div className={styles.wrap}>
            <section className={styles.left}>
              <ul>
                <li>카테고리</li>
                <li>상품명</li>
                <li>상품 가격</li>
                <li>상품 설명</li>
                <li>상품 이미지</li>
                <li>옵션 선택</li>
              </ul>
            </section>
            <section className={styles.right}>
              <div className={styles.content}>
                <MediumDropdown
                  id="상품선택"
                  placeholder="상품선택"
                  itemList={CATEGORY}
                  selected={category}
                  setSelected={setCategory}
                />
              </div>
              <div className={styles.content}>
                <Input
                  placeholder="상품명"
                  styleName="input500"
                  value={prodName}
                  onChange={e => setProdName(e.target.value)}
                />
              </div>
              <div className={styles.content}>
                <Input
                  placeholder="상품 가격"
                  styleName="input200"
                  value={prodPrice}
                  onChange={e => setProdPrice(e.target.value)}
                />
                <span>원</span>
                <p className={styles.label}>할인율</p>
                <Input
                  placeholder="0"
                  styleName="input100"
                  value={prodDiscount}
                  onChange={e => setProdDiscount(e.target.value)}
                />
                <span>%</span>
                {discountPrice}
              </div>
              <div className={styles.content}>
                <textarea
                  className={styles.textArea}
                  placeholder="5~30자 제한"
                  maxLength={30}
                  value={prodDesc}
                  autoComplete="off"
                  onChange={e => setProdDesc(e.target.value)}
                />
              </div>
              <div className={styles.content}>
                <Thumbnail
                  thumb1Url={thumb1Url}
                  thumb2Url={thumb2Url}
                  setThumb1Url={setThumb1Url}
                  setThumb2Url={setThumb2Url}
                />
              </div>
              <div className={styles.content}>
                <Option />
              </div>
            </section>
          </div>
          <Editor contents={contents} setContents={setContents} />
        </div>
      </div>
      <div className={styles.btnWrap}>
        <Button styleClass="medium_blue" text="상품등록" onClick={handlePost} />
      </div>
    </div>
  );
}

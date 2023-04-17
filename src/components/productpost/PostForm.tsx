import React, { useEffect, useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { CATEGORY, PRICE_REG } from '../../constants';
import Button from '../../elements/Button';
import { GeneralDropdown } from '../../elements/DropDown';
import Input from '../../elements/Input';
import useModal from '../../hooks/useModal';
import useGetProduct from '../../query/useGetProduct';
import useProduct from '../../query/useProduct';
import { optionList } from '../../store/option';
import Editor from './Editor';
import Option from './Option';
import styles from './postForm.module.scss';
import Thumbnail from './Thumbnail';

export default function PostForm() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { prodList } = useGetProduct(state?.p_Number);
  const [category, setCategory] = useState<string>('');
  const [prodName, setProdName] = useState<string>('');
  const [prodPrice, setProdPrice] = useState<string>('');
  const [isDiscount, setIsDiscount] = useState<boolean>(false);
  const [prodDiscount, setProdDiscount] = useState<string>('');
  const [prodDesc, setProdDesc] = useState<string>('');
  const [thumb1Url, setThumb1Url] = useState<string>('');
  const [thumb2Url, setThumb2Url] = useState<string>('');
  const [contents, setContents] = useState<string>('');
  const option = useRecoilValue(optionList);

  const { showModal } = useModal();
  const handleRemove = () => {
    showModal({
      modalType: 'ProductDeleteModal',
      modalProps: {
        title: '상품을 삭제하시겠습니까?',
        page: 'productPost',
        productNo: { p_No: [state?.p_Number] },
      },
    });
  };

  useEffect(() => {
    if (prodList) {
      setCategory(prodList.p_Category);
      setProdName(prodList.p_Name);
      setProdPrice(String(prodList.p_Cost));
      setProdDiscount(String(prodList.p_Discount));
      setProdDesc(prodList.p_Desc);
      setThumb1Url(prodList.p_Thumbnail[0]);
      setThumb2Url(prodList.p_Thumbnail[1]);
      setContents(prodList.p_Content);
    }
  }, [state?.isProd, prodList]);

  const { postProduct, editProduct } = useProduct();
  const handlePost = () => {
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
    else {
      const postData = {
        p_No: state?.p_Number,
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
      if (!state?.isProd) postProduct.mutate(postData);
      else editProduct.mutate(postData);
    }
  };

  const handleCheckPrice = (id: string, value: string) => {
    if (value[0] === '0')
      return toast.error('가격은 0부터 입력할 수 없습니다.');
    else if (PRICE_REG.test(value))
      return toast.error('숫자만 입력할 수 있습니다.');
    else if (id === 'price') return setProdPrice(value);
    else if (id === 'discount') return setProdDiscount(value);
  };

  const discountPrice = useMemo(() => {
    if (prodPrice && prodDiscount) {
      setIsDiscount(true);
      const discountVal =
        Number(prodPrice) - (Number(prodPrice) / 100) * Number(prodDiscount);
      return (
        <p>
          {discountVal < 0
            ? '할인율 적용이 올바르지 않습니다.'
            : `${discountVal}원`}
        </p>
      );
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
                <GeneralDropdown
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
                  type="text"
                  id="price"
                  value={prodPrice}
                  onChange={e => handleCheckPrice(e.target.id, e.target.value)}
                />
                <span>원</span>
                <p className={styles.label}>할인율</p>
                <Input
                  placeholder="0"
                  styleName="input100"
                  type="text"
                  id="discount"
                  value={prodDiscount}
                  onChange={e => handleCheckPrice(e.target.id, e.target.value)}
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
                <Option isProd={state?.isProd} />
              </div>
            </section>
          </div>
          <Editor contents={contents} setContents={setContents} />
        </div>
      </div>
      <div className={styles.btnWrap}>
        {!state?.isProd ? (
          <Button
            styleClass="medium_blue"
            text="상품등록"
            onClick={handlePost}
          />
        ) : (
          <div className={styles.btn_edit}>
            <Button
              styleClass="medium_blue"
              text="상품수정"
              onClick={handlePost}
            />
            <Button
              styleClass="medium_white"
              text="상품삭제"
              onClick={handleRemove}
            />
            <Button
              styleClass="medium_gray"
              text="취소"
              onClick={() => navigate('/setProd?category=전체&page=1')}
            />
          </div>
        )}
      </div>
    </div>
  );
}

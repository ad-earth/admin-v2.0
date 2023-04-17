import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { CATEGORY } from '../../constants';
import Button from '../../elements/Button';
import { GeneralDropdown } from '../../elements/DropDown';
import Input from '../../elements/Input';
import useModal from '../../hooks/useModal';
import usePostFormValidation from '../../hooks/usePostFormValidation';
import usePriceCheck from '../../hooks/usePriceCheck';
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

  const { checkPrice, price, discount, isDiscount, discountPrice } =
    usePriceCheck();
  const handleCheckPrice = (id: string, value: string) => {
    checkPrice(id, value);
  };

  useEffect(() => {
    if (prodList) {
      setCategory(prodList.p_Category);
      setProdName(prodList.p_Name);
      checkPrice('price', String(prodList.p_Cost));
      checkPrice('discount', String(prodList.p_Discount));
      setProdDesc(prodList.p_Desc);
      setThumb1Url(prodList.p_Thumbnail[0]);
      setThumb2Url(prodList.p_Thumbnail[1]);
      setContents(prodList.p_Content);
    }
  }, [state?.isProd, prodList]);

  const { formCheck } = usePostFormValidation();
  const { postProduct, editProduct } = useProduct();
  const handlePost = () => {
    const postData = {
      p_No: state?.p_Number,
      p_Category: category,
      p_Thumbnail: [thumb1Url, thumb2Url],
      p_Name: prodName,
      p_Cost: Number(price),
      p_Sale: isDiscount,
      p_Discount: Number(discount),
      p_Option: option,
      p_Desc: prodDesc,
      p_Content: contents,
    };
    if (formCheck(postData)) {
      if (!state?.isProd) postProduct.mutate(postData);
      else editProduct.mutate(postData);
    }
  };

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
                  value={price}
                  onChange={e => handleCheckPrice(e.target.id, e.target.value)}
                />
                <span>원</span>
                <p className={styles.label}>할인율</p>
                <Input
                  placeholder="0"
                  styleName="input100"
                  type="text"
                  id="discount"
                  value={discount}
                  onChange={e => handleCheckPrice(e.target.id, e.target.value)}
                />
                <span>%</span>
                {discountPrice ? (
                  <p>
                    {discountPrice > 0
                      ? `${discountPrice}원`
                      : '할인율 적용이 올바르지 않습니다.'}
                  </p>
                ) : null}
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

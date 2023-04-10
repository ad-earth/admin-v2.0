import { useState } from 'react';
// import { CATEGORY } from '../../constants';
// import { MediumDropdown } from '../../elements/DropDown';
import Input from '../../elements/Input';
import Editor from './Editor';
import Option from './Option';
import styles from './postForm.module.scss';
import Thumbnail from './Thumbnail';

export default function PostForm() {
  // const [category, setCategory] = useState<string>('');
  const [thumb1Url, setThumb1Url] = useState<string | undefined>('');
  const [thumb2Url, setThumb2Url] = useState<string | undefined>('');
  const [contents, setContents] = useState<string>('');

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
                {/* <MediumDropdown
                  id="상품선택"
                  placeholder="상품선택"
                  itemList={CATEGORY}
                  selected={category}
                  setSelected={setCategory}
                /> */}
              </div>
              <div className={styles.content}>
                <Input placeholder="상품명" styleName="input500" />
              </div>
              <div className={styles.content}>
                <Input placeholder="상품 가격" styleName="input200" />
                <span>원</span>
                <p className={styles.label}>할인율</p>
                <Input placeholder="0" styleName="input100" />
                <span>%</span>
              </div>
              <div className={styles.content}>
                <textarea
                  className={styles.textArea}
                  placeholder="5~30자 제한"
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
        <button>상품등록</button>
      </div>
    </div>
  );
}

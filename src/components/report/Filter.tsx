import { DATELIST } from '../../constants';
import { MediumDropdown } from '../../elements/DropDown';
import styles from './filter.module.scss';

type TProps = {
  nameList: string[];
};

export default function Filter({ nameList = [] }: TProps) {
  return (
    <div id={styles.filter}>
      <MediumDropdown
        id="조회기간"
        placeholder="조회기간"
        queryKey="term"
        itemList={DATELIST}
      />
      <MediumDropdown
        id="상품명"
        placeholder="상품명"
        queryKey="product"
        itemList={nameList}
      />
    </div>
  );
}

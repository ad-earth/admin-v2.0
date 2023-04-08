import DatePicker from '../../elements/DatePicker';
import { MediumDropdown } from '../../elements/DropDown';
import styles from './filter.module.scss';

type TProps = {
  nameList: string[];
};

export default function Filter({ nameList }: TProps) {
  return (
    <div id={styles.filter}>
      <DatePicker />
      <MediumDropdown
        id="상품명"
        placeholder="상품명"
        queryKey="products"
        itemList={nameList ? nameList : []}
      />
    </div>
  );
}

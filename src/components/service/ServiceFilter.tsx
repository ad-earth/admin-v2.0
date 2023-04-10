import { PARCEL_STATUS } from '../../constants';
import DatePicker from '../../elements/DatePicker';
import { MediumDropdown } from '../../elements/DropDown';
import styles from './serviceFilter.module.scss';

type TProps = {
  nameList: string[];
};

export default function ServiceFilter({ nameList }: TProps) {
  return (
    <div className={styles.filter_wrapper}>
      <DatePicker />
      <MediumDropdown
        id="상품명"
        placeholder="상품명"
        queryKey="products"
        itemList={nameList ? nameList : []}
      />
      <MediumDropdown
        id="배송상태"
        placeholder="배송상태"
        queryKey="parcel"
        itemList={PARCEL_STATUS && PARCEL_STATUS}
      />
    </div>
  );
}

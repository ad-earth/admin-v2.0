import type { Dispatch, SetStateAction } from 'react';
import { useEffect, useState } from 'react';
import { AD_MODAL_HEADS_LIST, KEYWORD_LEVEL } from '../../../constants';
import { GeneralDropdown } from '../../../elements/DropDown';
import Input from '../../../elements/Input';
import TableHead from '../../../elements/TableHead';
import type { IData, IFormTarget } from './PostAdModal';
import styles from './table.module.scss';

type TProps = {
  levelCost: number;
  keyword: string | null;
  kLevel: number;
  kCost: number;
  setDataList: Dispatch<SetStateAction<IData>>;
  adSubmit: (e: IFormTarget) => void;
};

export default function Table(props: TProps) {
  const { levelCost, keyword, kLevel, kCost, setDataList, adSubmit } = props;
  const [levelSelected, setLevelSelected] = useState(() =>
    kLevel ? String(kLevel) : '1'
  );
  const [levelInput, setLevelInput] = useState<string>(() =>
    kCost ? String(kCost) : '0'
  );

  useEffect(() => {
    if (!kLevel || kLevel === Number(levelSelected)) return;
    setDataList(prev => ({ ...prev, k_Level: Number(levelSelected) }));
  }, [levelSelected]);

  const changeLevelInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value.replaceAll(',', ''));
    if (isNaN(value)) {
      setLevelInput('0');
      setDataList(prev => ({ ...prev, k_Cost: 0 }));
    } else {
      setLevelInput(value.toLocaleString('ko-KR'));
      setDataList(prev => ({ ...prev, k_Cost: value }));
    }
  };
  return (
    <div className={styles.base}>
      <table className={styles.table}>
        <TableHead headList={AD_MODAL_HEADS_LIST} isCheck={false} />
        {keyword && levelCost ? (
          <tbody>
            <tr>
              <td>
                <p className={styles.keyword}>{keyword}</p>
              </td>
              <td>
                <GeneralDropdown
                  itemList={KEYWORD_LEVEL}
                  selected={levelSelected}
                  setSelected={setLevelSelected}
                  styleClass="xsm"
                />
              </td>
              <td>{levelCost.toLocaleString('ko-KR')} 원</td>
              <td>
                <form onSubmit={adSubmit} id="adForm">
                  <Input
                    type="text"
                    styleName="input100"
                    placeholder={levelInput}
                    value={levelInput || ''}
                    onChange={changeLevelInput}
                    name="level"
                  />
                </form>
              </td>
            </tr>
          </tbody>
        ) : (
          <tbody>
            <tr className={styles.none}>
              <td>키워드를 입력후 조회가 가능합니다.</td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
}

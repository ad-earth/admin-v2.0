import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import Button from '../../elements/Button';
import Input from '../../elements/Input';
import useOption from '../../hooks/useOption';
import { optionListState } from '../../store/option';
import styles from './option.module.scss';

interface IProps {
  isProd: boolean;
}

export default function Option({ isProd }: IProps) {
  const [optionList, setOptionList] = useRecoilState(optionListState);

  useEffect(() => {
    if (!isProd)
      setOptionList([
        {
          id: 1,
          colorCheck: false,
          optionCheck: false,
          color: null,
          colorCode: null,
          option: null,
          optionPrice: null,
          optionCnt: null,
        },
      ]);
    else return;
  }, [isProd]);
  console.log('isProd: ', isProd);

  const { addOptionItem, removeOptionItem, optionCheck, optionInput } =
    useOption();
  const handleAdd = () => addOptionItem();
  const handleRemove = (id: number) => removeOptionItem(id);
  const handleCheck = (id: string, name: string, checked: boolean) => {
    optionCheck({ id, name, checked });
  };
  const handleSetInput = (id: string, name: string, value: string) =>
    optionInput({ id, name, value });

  return (
    <div id={styles.Option}>
      {optionList.map((item, idx) => (
        <div key={idx}>
          <ul>
            <li>
              <input
                type="checkbox"
                id="color"
                name={String(item.id)}
                checked={item.colorCheck ? true : false}
                onChange={e =>
                  handleCheck(e.target.id, e.target.name, e.target.checked)
                }
              />
              <label htmlFor={String(item.id)}>색상 사용</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="option"
                name={String(item.id)}
                checked={item.optionCheck ? true : false}
                onChange={e =>
                  handleCheck(e.target.id, e.target.name, e.target.checked)
                }
              />
              <label htmlFor={String(item.id)}>옵션</label>
            </li>
            <li>추가금액</li>
            <li>수량</li>
          </ul>
          <div className={styles.wrap}>
            <Input
              styleName="input200"
              placeholder="색상 입력"
              id="colorName"
              name={String(item.id)}
              value={(item.color as string) || ''}
              disabled={item.colorCheck !== true ? true : false}
              onChange={e =>
                handleSetInput(e.target.id, e.target.name, e.target.value)
              }
            />
            <input
              className={styles.color_picker}
              id="colorPicker"
              type="color"
              name={String(item.id)}
              disabled={item.colorCheck !== true ? true : false}
              value={item.colorCode ? item.colorCode : '#ffffff'}
              onChange={e =>
                handleSetInput(e.target.id, e.target.name, e.target.value)
              }
            />
            <Input
              styleName="input200"
              placeholder="옵션 입력"
              id="optionName"
              name={String(item.id)}
              value={(item.option as string) || ''}
              disabled={item.optionCheck !== true ? true : false}
              onChange={e =>
                handleSetInput(e.target.id, e.target.name, e.target.value)
              }
            />
            <Input
              styleName="input200"
              placeholder="0"
              id="optionPrice"
              name={String(item.id)}
              value={(item.optionPrice as number) || ''}
              onChange={e =>
                handleSetInput(e.target.id, e.target.name, e.target.value)
              }
            />
            <Input
              styleName="input200"
              placeholder="0 (필수)"
              id="optionCnt"
              name={String(item.id)}
              value={(item.optionCnt as number) || ''}
              onChange={e =>
                handleSetInput(e.target.id, e.target.name, e.target.value)
              }
            />
            <button onClick={() => handleRemove(item.id)}>삭제</button>
          </div>
        </div>
      ))}
      <div className={styles.btnWrap}>
        <Button styleClass="small_blue" text="옵션 추가" onClick={handleAdd} />
      </div>
    </div>
  );
}

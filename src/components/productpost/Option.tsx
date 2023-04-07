import { useRecoilState } from 'recoil';
import Button from '../../elements/Button';
import Input from '../../elements/Input';
import { optionListState } from '../../store/option';
import styles from './option.module.scss';

export default function Option() {
  const [optionList, setOptionList] = useRecoilState(optionListState);

  const handleAdd = () => {
    const newOption = {
      id: optionList.length + 1,
      colorCheck: false,
      optionCheck: false,
      color: '',
      colorCode: '',
      option: '',
      optionPrice: 0,
      optionCnt: 0,
    };
    setOptionList([...optionList, newOption]);
  };

  const handleRemove = (id: number) => {
    if (optionList.length < 2) return;
    setOptionList(optionList.filter(el => el.id !== id));
  };

  const handleCheck = (id: string, name: string, checked: boolean) => {
    let copy = [...optionList];
    const findIndex = copy.findIndex(el => el.id === Number(name));
    if (findIndex !== -1 && id === 'color') {
      copy[findIndex] = { ...copy[findIndex], colorCheck: checked };
      if (!checked) {
        copy[findIndex] = { ...copy[findIndex], color: null, colorCode: null };
      }
    }
    if (findIndex !== -1 && id === 'option') {
      copy[findIndex] = { ...copy[findIndex], optionCheck: checked };
      if (!checked) {
        copy[findIndex] = { ...copy[findIndex], option: null };
      }
    }
    setOptionList(copy);
  };

  const handleSetInput = (id: string, name: string, value: string) => {
    let copy = [...optionList];
    const findIndex = copy.findIndex(el => el.id === Number(name));
    if (findIndex !== -1 && id === 'colorName') {
      copy[findIndex] = { ...copy[findIndex], color: value };
    }
    if (findIndex !== -1 && id === 'colorPicker') {
      copy[findIndex] = { ...copy[findIndex], colorCode: value };
    }
    if (findIndex !== -1 && id === 'optionName') {
      copy[findIndex] = { ...copy[findIndex], option: value };
    }
    if (findIndex !== -1 && id === 'optionPrice') {
      copy[findIndex] = { ...copy[findIndex], optionPrice: Number(value) };
    }
    if (findIndex !== -1 && id === 'optionCnt') {
      copy[findIndex] = { ...copy[findIndex], optionCnt: Number(value) };
    }
    setOptionList(copy);
  };

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
              <label htmlFor="color">색상 사용</label>
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
              <label htmlFor="option">옵션</label>
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
              value={item.colorCode !== null ? item.colorCode : '#ffffff'}
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

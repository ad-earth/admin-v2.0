import type { Dispatch, SetStateAction } from 'react';
import { useRef } from 'react';
import { thumbnailUploader } from '../../shared/api/imageUploader';
import styles from './thumbnail.module.scss';

export interface IProps {
  thumb1Url: string | undefined;
  setThumb1Url: Dispatch<SetStateAction<string | undefined>>;
  thumb2Url: string | undefined;
  setThumb2Url: Dispatch<SetStateAction<string | undefined>>;
}

export default function Thumbnail({
  thumb1Url,
  thumb2Url,
  setThumb1Url,
  setThumb2Url,
}: IProps) {
  const thumb1Ref = useRef<HTMLInputElement>(null);
  const thumb2Ref = useRef<HTMLInputElement>(null);

  const handleClickThumb1 = () => thumb1Ref.current?.click();
  const handleClickThumb2 = () => thumb2Ref.current?.click();

  const handleChangeThumb1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    thumbnailUploader(e.target.files).then(url => setThumb1Url(url));
  };
  const handleChangeThumb2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    thumbnailUploader(e.target.files).then(url => setThumb2Url(url));
  };

  return (
    <div id={styles.Thumbnail}>
      <img
        src={
          thumb1Url ? thumb1Url : process.env.PUBLIC_URL + './assets/down.png'
        }
        alt="thumbnail"
        onClick={handleClickThumb1}
      />
      <input
        type="file"
        accept="image/*"
        name="file"
        ref={thumb1Ref}
        onChange={handleChangeThumb1}
      />
      <img
        src={
          thumb2Url ? thumb2Url : process.env.PUBLIC_URL + './assets/down.png'
        }
        alt="thumbnail"
        onClick={handleClickThumb2}
      />
      <input
        type="file"
        accept="image/*"
        name="file"
        ref={thumb2Ref}
        onChange={handleChangeThumb2}
      />
    </div>
  );
}

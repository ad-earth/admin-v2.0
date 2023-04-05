import type { Dispatch, SetStateAction } from 'react';
import { useCallback, useMemo, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { editorUploader } from '../../shared/api/imageUploader';
import styles from './editor.module.scss';

export interface IProps {
  contents: string;
  setContents: Dispatch<SetStateAction<string>>;
}

export default function Editor({ contents, setContents }: IProps) {
  const QuillRef = useRef<ReactQuill>();
  const handleChange = useCallback(() => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.setAttribute('name', 'image');
    input.click();
    input.onchange = async () => {
      const file = input.files?.[0];
      if (file !== null) {
        try {
          editorUploader(input.files).then(url => {
            const imgUrl = url;
            const quill = QuillRef.current?.getEditor();
            console.log('quill: ', quill);
            const range = quill?.getSelection()?.index;
            if (typeof range !== 'number') return;
            quill?.setSelection(range, 1);
            quill?.clipboard.dangerouslyPasteHTML(
              range,
              `<img src=${imgUrl} alt="image" />`
            );
          });
        } catch (error) {
          alert('이미지 업로드에 실패했습니다.');
        }
      }
    };
  }, [QuillRef]);

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ size: ['small', false, 'large', 'huge'] }, { color: [] }],
          [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
            { align: [] },
          ],
          ['image'],
        ],
        handlers: {
          image: handleChange,
        },
      },
    }),
    [handleChange]
  );

  return (
    <div id={styles.Editor}>
      <p>상세 내용</p>
      <ReactQuill
        className={styles.reactQuill}
        ref={element => {
          if (element !== null) {
            QuillRef.current = element;
          }
        }}
        value={contents}
        onChange={setContents}
        modules={modules}
        theme="snow"
        placeholder="내용을 입력해주세요."
      />
    </div>
  );
}

import { useCallback, useMemo, useState } from 'react';
import SimpleMDE from 'react-simplemde-editor';
import { withLayout } from '../../layout/Layout';

import styles from './AddPost.module.css';

const AddPost = () => {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [oldImage, setOldImage] = useState('');
  const [newImage, setNewImage] = useState('');

  const onChange = useCallback((value) => {
    setText(value);
  }, []);

  const options = useMemo(
    () => ({
      spellChecker: false,
      maxHeight: '400px',
      autofocus: true,
      placeholder: 'Введите текст...',
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
      },
    }),
    []
  );

  return (
    <main className={styles.edit}>
      <div className={styles.attach}>
        <label className={styles.file}>
          Attach an image
          <input
            type="file"
            className={styles.hidden}
            onChange={(e) => {
              setNewImage(e.target.files[0]);
              setOldImage('');
            }}
          />
        </label>
        <div className={styles.img}>
          {oldImage && (
            <img
              src={`http://localhost:3002/${oldImage}`}
              alt={oldImage.name}
            />
          )}
          {newImage && (
            <img src={URL.createObjectURL(newImage)} alt={newImage.name} />
          )}
        </div>
      </div>

      <label className={styles.title}>
        Заголовок поста:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className={styles.input}
        />
      </label>
      <SimpleMDE
        className={styles.editor}
        value={text}
        onChange={onChange}
        options={options}
      />

      <div className={styles.buttons}>
        <button
          onClick={() => console.log('submitHandler')}
          className={styles.button}
        >
          Обновить
        </button>

        <button
          onClick={() => console.log('clearFormHandler')}
          className={styles.button}
        >
          Отменить
        </button>
      </div>
    </main>
  );
};

export default withLayout(AddPost);

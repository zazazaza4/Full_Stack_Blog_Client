import { useCallback, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../redux/slices/post/postSlice';
import axios from '../../utils/axios';
import SimpleMDE from 'react-simplemde-editor';
import { withLayout } from '../../layout/Layout';

import styles from './AddPost.module.css';
import { Button } from '../../components';

const AddPost = () => {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');

  const dispatch = useDispatch();

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

  const submitHandler = async () => {
    if (!title || !text) {
      return;
    }
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('text', text);
      formData.append('image', image);

      const { data: res } = await axios.post('posts', formData);
      dispatch(addPost(res));
    } catch (error) {
      console.log(error);
    }
  };

  const clearData = () => {
    setText('');
    setTitle('');
    setImage('');
  };

  return (
    <main className={styles.main}>
      <form onSubmit={(e) => e.preventDefault()} className={styles.edit}>
        <div className={styles.attach}>
          <label className={styles.file}>
            Attach an image
            <input
              type="file"
              accept="image/png, image/gif, image/jpeg"
              className={styles.hidden}
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
            />
          </label>
          <div className={styles.img}>
            {image && <img src={URL.createObjectURL(image)} alt={image.name} />}
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
          <Button onClick={submitHandler}>Add</Button>
          <Button onClick={clearData}>Cancel</Button>
        </div>
      </form>
    </main>
  );
};

export default withLayout(AddPost);

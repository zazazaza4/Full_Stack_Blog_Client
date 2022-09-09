import { useCallback, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SimpleMDE from 'react-simplemde-editor';

import { addPost } from '../../redux/slices/post/postSlice';
import axios from '../../utils/axios';
import { Banner, Button, Categories } from '../../components';
import { withLayout } from '../../layout/Layout';

import iconUpload from '../../assets/upload.png';

import styles from './AddPost.module.css';

const AddPost = () => {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');

  const navigate = useNavigate();

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

  const selectCategory = (name) => {
    setCategory(name);
  };

  const submitHandler = async () => {
    if (text.length === 0 || title.length === 0 || image.length === 0) {
      return;
    }
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('text', text);
      formData.append('category', category);
      formData.append('image', image);

      const { data: res } = await axios.post('posts', formData);
      dispatch(addPost(res));
      clearData();
      navigate('/');
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
      <Banner>Create your own post right now</Banner>
      <form onSubmit={(e) => e.preventDefault()} className={styles.edit}>
        <div className={styles.attach}>
          <label className={styles.file}>
            <img src={iconUpload} alt="" />
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
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className={styles.input}
          />
        </label>
        <Categories selectCategory={selectCategory} />
        <SimpleMDE
          className={styles.editor}
          value={text}
          onChange={onChange}
          options={options}
        />

        <div className={styles.buttons}>
          <Button onClick={submitHandler}>ADD</Button>
          <Button onClick={clearData}>CLEAR</Button>
        </div>
      </form>
    </main>
  );
};

export default withLayout(AddPost);

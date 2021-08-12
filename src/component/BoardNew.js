import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { dataSave } from '../module/boardReducer';
import { uriSave } from '../module/uriReducer';

function BoardNew() {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();

  const history = useHistory();

  const onSave = () => {
    const _inputData = {
      id: '',
      title: title,
      content: content
    }
    dispatch(dataSave(_inputData));
    setTitle('');
    setContent('');

    history.push('/');
    dispatch(uriSave('/'));
  }

  const handleTitle = (e) => {
    setTitle(e.target.value);
  }

  const handleContent = (e) => {
    setContent(e.target.value);
  }

  return (
    <div>
      <h2>게시글 작성</h2>
      <form>
        <div>
          <input type='text' className='inputTitle' placeholder='제목을 입력하세요' onChange={handleTitle} value={title} />
        </div>
        <div>
          <textarea className='inputContent' placeholder='내용을 입력하세요' onChange={handleContent} value={content} />
        </div>
        <div>
          <button type='submit' onClick={onSave}>작성</button>
        </div>
      </form>
    </div>
  )
};

export default BoardNew;
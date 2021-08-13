import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { dataSave } from '../module/boardReducer';
import { uriSave } from '../module/uriReducer';
import axios from 'axios';

function BoardNew() {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [writer, setWriter] = useState('')

  const today = new Date().toISOString().substr(0, 10).replace('T', ' ')


  const handleTitle = (e) => {
    setTitle(e.target.value);
  }

  const handleWriter = (e) => {
    setWriter(e.target.value)
  }

  const handleContent = (e) => {
    setContent(e.target.value);
  }

  const onSave = async () => {
    try {
      const res = await axios.post('/api/BoardInsert', { 'data': 'data' }, {
        params: {
          'title': title,
          'content': content,
          'writer': writer,
          'write_date': today
        }
      })

      document.location.href = '/'
    } catch (e) {
      console.error(e.message)
    }
  }


  return (
    <div>
      <h2>글 작성</h2>
      <div>
        <div>
          <input type='text' className='inputTitle' placeholder='제목을 입력하세요' value={title} onChange={handleTitle} />
        </div>
        <div>
          <input type='text' className='inputTitle' placeholder='작성자를 입력하세요' value={writer} onChange={handleWriter} />
        </div>
        <div>
          <textarea className='inputContent' placeholder='내용을 입력하세요' value={content} onChange={handleContent} />
        </div>
        <div>
          <button type='button' onClick={onSave}>submit</button>
        </div>
      </div>
    </div>
  )
};

export default BoardNew;
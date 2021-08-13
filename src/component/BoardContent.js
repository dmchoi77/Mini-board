import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { editContent, removeContent } from '../module/boardReducer';
// import { useHistory } from 'react-router-dom';
import axios from 'axios';

function BoardContent({ match }) {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [writer, setWriter] = useState('')
    const [date, setDate] = useState('')

    const idx = match.params.idx;

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleContent = (e) => {
        setContent(e.target.value)
    }

    const handleWriter = (e) => {
        setWriter(e.target.value)
    }

    // 데이터를 호출해 오는 동안 대기할 수 있도록 async, await 사용
    useEffect(async () => {
        try {
            // '/api/BoardContent' 라는 uri 로 DB를 불러온다.
            const res = await axios.get('/api/BoardContent', {
                // param 으로 idx 값을 넘겨준다.
                params: {
                    'idx': idx
                }
            })
            // 받아온 데이터를 useState 를 이용하여 선언한다.
            setTitle(res.data[0].title)
            setContent(res.data[0].content)
            setWriter(res.data[0].writer)
            setDate(res.data[0].write_date)

        } catch (e) {
            console.error(e.message)
        }
    }, [])

    const onChange = async () => {
        // edit 버튼 클릭 시 ghcnf
        try {
            // axios.post 는 config 로 받아갈 값이 3번째의 매개변수이기 때문에 data 를 임의로 넣어주었다.
            const res = await axios.post('/api/BoardUpdate', { 'data': 'data' }, {
                params: {
                    'idx': idx,
                    'title': title,
                    'content': content,
                    'writer': writer,
                    'write_date': date
                }
            })
            // DB로 관리할 것이기 때문에 useHistory 말고 document.location.href 로 페이지 이동(새로고침 가능)
            document.location.href = '/'
        } catch (e) {
            console.error(e.message)
        }
    }

    const onRemove = async () => {
        // delete 버튼 를릭 시 실행
        try {
            // axios.get 은 두번째 매개변수로 config 전달
            const res = await axios.get('/api/BoardDelete', {
                params: {
                    'idx': idx
                }
            })
            console.log('delete :: result :: ', res)
            document.location.href = '/'
        } catch (e) {
            console.error(e.message)
        }
    }

    return (
        <div>
            <h2>상세보기</h2>
            <div>
                <div>
                    <label htmlfor='title'>제목</label>
                    <input type='text' name='title' defaultValue={title} onChange={handleTitle} />
                </div>
                <div>
                    <label htmlfor='writer'>작성자</label>
                    <input type='writer' name='title' defaultValue={writer} onChange={handleWriter} />
                </div>
                <div>
                    <label htmlfor='writer'>작성일</label>
                    <input type='writer' name='title' defaultValue={date} disabled />
                </div>
                <div>
                    <label className='_content' htmlfor='content'>내용</label>
                    <textarea name='content' className='inputContent' defaultValue={content} onChange={handleContent} />
                </div>
                <div>
                    <button type='button' className='editBtn' onClick={onChange}>edit</button>
                    <button type='button' className='deleteBtn' onClick={onRemove}>delete</button>
                </div>
            </div>
        </div>
    )
}

export default BoardContent;
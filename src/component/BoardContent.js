import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editContent, removeContent } from '../module/boardReducer';
import { useHistory } from 'react-router-dom';

function BoardContent({ match }) {
    const idx = match.params.idx;
    console.log('idx ::', idx);

    const { selectRowData } = useSelector(state => state.boardReducer);

    const [title, setTitle] = useState(selectRowData.title);
    const [content, setContent] = useState(selectRowData.content);

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleContent = (e) => {
        setContent(e.target.value);
    }

    // 함수형 컴포넌트에서 useDispatch를 사용할 수 있도록 선언
    const dispatch = useDispatch()
    // 함수형 컴포넌트에서 useHistory 를 사용할 수 있도록 선언
    const history = useHistory();

    const onChange = () => {
        // reducer의 data와 동일한 형식으로 맞춰준다.
        const _inputData = {
            id: selectRowData.id,
            title: title,
            content: content
        }
        // reducer 의 edirContent 함수에 변경값 전달
        dispatch(editContent(_inputData));
        // input 란 초기화
        setTitle('');
        setContent('');
        // BoardList 페이지로 이동
        history.push('/');
    }

    const onRemove = () => {
        dispatch(removeContent(selectRowData.id));
        setTitle('');
        setContent('');
        history.push('/');
    }
    return (
        <div>
            <h2>상세보기</h2>
            <div>
                <div>
                    <input type='text' onChange={handleTitle} value={title}></input>
                </div>
                <div>
                    <textarea onChange={handleContent} value={content} />
                </div>
                <div>
                    <button onClick={onChange} type='button'>edit</button>
                    <button onClick={onRemove} type='button'>delete</button>
                </div>
            </div>
        </div>
    )
}

export default BoardContent;

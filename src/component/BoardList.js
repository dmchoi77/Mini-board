import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectRow } from '../module/boardReducer';

function BoardList() {
 

  const [inputData, setInputData] = useState([{
    idx: '',
    title: '',
    content: '',
    writer: '',
    write_date: ''
  }]);

  const [lastIdx, setLastIdx] = useState(0);

  useEffect(async () => {
    try {
      const res = await axios.get('/api/test');
      const _inputData = await res.data.map((rowData) => (
        setLastIdx(lastIdx + 1),
        {
          idx: rowData.idx,
          title: rowData.title,
          content: rowData.content,
          writer: rowData.writer,
          write_date: rowData.write_date
        })
      )
      setInputData(inputData.concat(_inputData))
    } catch (e) {
      console.error(e.message)
    }
  }, [])

  return (
    <div>
      <h2>게시판</h2>
      <div>
        <table className='listTable'>
          <tbody>
            <tr>
              <td >글번호</td>
              <td >title</td>
            </tr>
            {lastIdx !== 0 ?
              inputData.map((rowData,i) => (
                // 최초 선언한 기본값은 나타내지 않음
                rowData.idx !== '' &&
                <tr key={i}> 
                  <td className='listTableIndex'>
                    <Link to={`/BoardContent/${rowData.idx}`}>{rowData.idx}</Link>
                  </td>
                  <td className='listTableTitle'>
                    <Link to={`/BoardContent/${rowData.idx}`}>{rowData.title}</Link>
                  </td>
                </tr>
              )) :  // 작성된 목록이 없을 때 보여줄 내용
              <tr>
                <td></td>
                <td>작성된 글이 없습니다.</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BoardList;
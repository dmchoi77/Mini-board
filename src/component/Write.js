import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { uriSave } from '../module/uriReducer';

function Write() {
    const dispatch = useDispatch();
    const onClick =()=>{
        dispatch(uriSave('/BoardNew'));
    }

    return (
        <Link to='/BoardNew'>
            <button onClick={onClick}>
                Write
            </button>
        </Link>
    )
}

export default Write;
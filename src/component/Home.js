import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {uriSave} from '../module/uriReducer';

function Home() {
  const dispatch = useDispatch();

  const onClick =()=>{
    dispatch(uriSave('/'));
  }
  return (
    <Link to='/'>
      <button onClick={onClick}>home</button>
    </Link>
  )
}

export default Home;
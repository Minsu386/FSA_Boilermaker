import React, { useState, useEffect } from 'react';
import Login from './Login';
import { Routes, Route } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { fetchUsersAsync } from '../features/usersSlice';
import  { loginWithToken } from '../store';
import { logout } from '../store';


const Main = () => {
  const [users, setUser] =useState([]);
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(fetchUsersAsync()),
    dispatch(loginWithToken());
  }, []);
  
  return(
    <div>
      <h2>test</h2>
      {
        auth.id ? (
          <Routes>
            <Route path='/' element= {<div>LoggedIn { auth.username } <button onClick={ ()=> dispatch(logout())}>Logout</button></div>} />
          </Routes>
        ): (
          <Routes>
            <Route path='/' element= {<Login />} />
          </Routes>
        )
      }
    </div> 
  )  
}


export default Main;
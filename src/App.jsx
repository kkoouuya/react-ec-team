import React,{useEffect} from 'react';
import './assets/style.css';
import Router from './Router';
import { auth } from './firebase/index'
import { useSelector } from 'react-redux';
import { getUserId } from './reducks/users/selector';

const App = () => {

  const selector = useSelector((state) => state);
  let uid = getUserId(selector);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user){
        uid = user;
      }else{
        uid = null
      }
    })
  })

  return (
    <div>
      <Router />
    </div>
  );
};

export default App;

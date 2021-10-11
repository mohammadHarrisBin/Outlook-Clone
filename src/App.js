import React,{useEffect} from 'react';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import {useSelector, useDispatch} from 'react-redux';
import {login, logout, selectUser} from './features/user/userSlice';
import Login from './components/Login';
import {auth} from './firebase';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch(login({
          email:authUser.email,
          uid:authUser.uid,
          name:authUser.displayName,
      }))
      }else{
        dispatch(logout())
      }
    })
  },[])


  return (
    <div className="App">
      {/* header */}
      {!user ? <Login/> :
      <> 
      <Header/>
      <Body/>
      </>
      }
      
    </div>
  );
}

export default App;

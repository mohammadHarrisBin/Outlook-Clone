import React,{useState} from 'react'
import '../styles/login.css';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import {auth} from '../firebase';
import {useDispatch} from 'react-redux';
import {login} from '../features/user/userSlice'

function Login() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [username, setName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false)

    const handlePasswordVisibility = (e) =>{
        e.preventDefault();
        if(passwordVisible == true){
            setPasswordVisible(false)
        }
        else{
            setPasswordVisible(true)
        }
    }

    const handleInput = (e, setInput) =>{
        setInput(e.target.value);
    }


    const handleRegister = (e) =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password).then(authUser=>{
            authUser.user.updateProfile({
                displayName:username,
            }).then(()=>{
                dispatch(login({
                    email:authUser.user.email,
                    uid:authUser.user.uid,
                    name:username,
                }))
            })
        }).catch((error) => {
            alert(error);
          });
    }


    const handleSignIn = (e) =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
           .then(authUser=>{
               dispatch(login({
                email:authUser.user.email,
                uid:authUser.user.uid,
                name:username,
               }))
           }).catch((error) =>alert(error));
    }

    return (
        <div className='login'>
            <form> 
                <img src='https://logincdn.msauth.net/shared/1.0/content/images/microsoft_logo_ee5c8d9fb6248c938fd0dc19370e90bd.svg' width='100' height='100'/ >
                <p>Sign in</p>
                <input type='email' placeholder='Email' value={email} onChange={(e)=>handleInput(e, setEmail)}/>
                <input type='text' placeholder='Username if registering' value={username} onChange={(e)=>handleInput(e, setName)}/>
                <div className='login__passwordSection'>
                <input type={passwordVisible == false ? 'password' : 'text'} placeholder='Password' value={password} onChange={(e)=>handleInput(e, setPassword)}/>
                    <VisibilityOutlinedIcon onClick={(e)=>handlePasswordVisibility(e)}/>
                </div>
                <button type='submit' onClick={handleSignIn}>Sign in</button>
                <p className='login__registerText'>Does not have an account? <br/><button onClick={handleRegister}>Register instead</button></p>
            </form>
        </div>
    )
}

export default Login

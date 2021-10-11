import React, {useEffect, useState} from 'react'
import '../styles/email.css'
import Post from './Post'
import {db} from '../firebase';
import { LocalConvenienceStoreOutlined } from '@mui/icons-material';
import {useSelector} from 'react-redux';
import {selectUser} from '../features/user/userSlice';
function Email({isCircleClicked}) {
    const user = useSelector(selectUser);
    const [emails, setEmails] = useState([]);

    useEffect(() => {
        db.collection('Emails').orderBy('timestamp','desc').onSnapshot((snapshot)=>{
            setEmails(snapshot.docs.map((doc)=>(
                {
                    id:doc.id,
                    email:doc.data()
                }
            )))
        })
    }, [])


    return (
        <div className='email'>
            <div className='email__top'>
                <button className='email__fromBtn'>From</button>
                <button className='email__subjBtn'>Subject</button>
                <button className='email__receiveBtn'>Received</button>
            </div>
            <div className='email__bottom'>
            {emails.map(({id, email:{from, to, subject, username, message,date_created }})=>{
            if(to == user.email || from == user.email){
             return(
               <Post key={id} from={from} message={message} subject={subject} username={username} received={date_created} isCircleClicked={isCircleClicked} to={to}/>
              )
            }
            })}
            </div>
            
           
        </div>
    )
}

export default Email

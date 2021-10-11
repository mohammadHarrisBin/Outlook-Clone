import { Avatar } from '@mui/material'
import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import  {selectClickedState, clicked, notClicked} from '../features/circleClickedSlice';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import {db} from '../firebase';
import '../styles/post.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Post({from, subject,message, received, username, key,to}) {

    const circleClickedState = useSelector(selectClickedState);
    const dispatch = useDispatch();

    const [actionBtnVisible, setActionBtnVisible] = useState('actionButton__hide')
    const [emails, setEmails] = useState([]);
    const handleMousEnter = () =>{
        setActionBtnVisible('actionButton__show')
    }
    const handleMousLeave = () =>{
        setActionBtnVisible('actionButton__hide')
    }
    
    const postActionButton = (icon) =>{
        return(
            <button className={actionBtnVisible} >{icon && icon}</button>
        )
    }
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

    const [showMessageClass, setShowClass] = useState('post__messageHide');

    const handleShowMessage = () =>{
        if (showMessageClass == 'post__message'){
            setShowClass('post__messageHide')
        }
        else{
            setShowClass('post__message')
        }
    }
    console.log(received)
    return (
        <div className='post' key={key} >
            
            <div className='post__top' onClick={handleShowMessage}>
            <button className='post__fromBtn' onMouseEnter={handleMousEnter} onMouseLeave={handleMousLeave}>
                   {circleClickedState == true?<Avatar className='avatar'>{username[0]}</Avatar>:<CheckCircleIcon className='avatar2'/>}
                   
                   <span>{from}</span>
                   {postActionButton(<DeleteOutlineIcon/>)}
                   {postActionButton(<DraftsOutlinedIcon/>)}
                   {postActionButton(<OutlinedFlagIcon/>)}
                   
                   </button>
                   <button className='post__subjBtn'>{subject}</button>
                   
                   <button className='post__receiveBtn'>{received}</button> 
            </div>
            <div className={showMessageClass}>
               <div className='post__messageHeader'>Message</div>
                <div className='post__messageBody'>{message?
                <>
                <p>From: <a href="#">{from}</a></p>
                <p>To: <a href='#'>{to}</a></p>
                <p>Sent at: {received}</p>
                <p>Message: <br/>{message}</p>
                </>
                
                :
                
                <>
                <p>From: <a href="#">{from}</a></p>
                <p>To: {to}</p>
                <p>Sent at: {received}</p>
                <p>Message: <br/>Message sent to you is empty:)</p>
                </>}</div>
            </div>
            
        </div>
        
    )
}

export default Post

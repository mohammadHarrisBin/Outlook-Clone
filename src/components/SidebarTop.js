import React from 'react'
import '../styles/sidebarTop1.css'
import '../styles/sidebarTop2.css'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import {db} from '../firebase';
import firebase from 'firebase';
import {selectUser} from '../features/user/userSlice';
import {useSelector} from 'react-redux'

function SidebarTop() {
    const user = useSelector(selectUser); 
    const headerButton = (icon, text, onClick) => {
        if (text) {
          return (
            <button onClick={onClick} className="sidebarTop__menuFlex">
              {icon}
              {text ? text : ""}
              
            </button>
          );
        }
        else{
            return (
                <button className="sidebarTop__buttonMenu ">
                  {icon}
                </button>
              );
        }
      };

      const goto = (e) =>{
        e.preventDefault();
        // let from = prompt('from');
        let to = prompt('Who do you want to send it to?')
        let subject = prompt('subject')
        // let username = prompt('username')
        let message = prompt('what is your message?')

        
        db.collection('Emails').add({
          from:user.email,
          to:to,
          subject:subject,
          message:message,
          username:user.name,
          date_created:new Date().toLocaleDateString('en-US'),
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
      }
    return (
        <div className='sidebarTop'>
            <div className='sidebarTop__right'>
            {headerButton(<MenuOutlinedIcon/>)}
            {headerButton(<span></span>, 'New Message',goto )}
            </div>
            <div className='sidebarTop__left'>
            {headerButton(<DraftsOutlinedIcon/>, 'Mark all as read')}
            {headerButton(<UndoOutlinedIcon/>, 'Undo')}
            </div>
           
        </div>
    )
}

export default SidebarTop

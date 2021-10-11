import React, { useState } from 'react'
import '../styles/feedtopbar.css'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TopbarOptions from './TopbarOptions';
import CheckIcon from '@mui/icons-material/Check';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Email from './Email';
function NewEmail() {
    const [ClickCircle, setClickCircle] = useState(CheckCircleOutlineOutlinedIcon)
    const [VisibleOption, setVisibleOption] = useState('topbar__options');
    
    const handleClickCircle = () =>{
        if(ClickCircle == CheckCircleOutlineOutlinedIcon){
            setClickCircle(CheckCircleIcon)
        }else{
            setClickCircle(CheckCircleOutlineOutlinedIcon)
        }
    }

    const handleVisibleOptions = () =>{
        if(VisibleOption == 'topbar__options'){
            setVisibleOption('topbar__optionsHidden')
        }else{
            setVisibleOption('topbar__options')
        }
    }

    const sidebarButton = (title, icon) =>{
        return(
            <div className='sideBarOptions'>
            <button>{icon && icon}<p>{title}</p></button>
            </div>
        )
    }

    return (
        <div className='topbar'>


        <div className='topbar__sidebar'>
        {sidebarButton('Favourites',<ChevronRightIcon/>)}
        {sidebarButton('Folders',<ChevronRightIcon/>)}
        {sidebarButton('Groups',<ChevronRightIcon/>)}
        </div>



    <div className='topbar_feed0'>
        create new email
    </div>   
       


         </div>
    )
}

export default NewEmail;

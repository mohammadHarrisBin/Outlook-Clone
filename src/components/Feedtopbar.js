import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import  {selectClickedState, clicked, notClicked} from '../features/circleClickedSlice';
import '../styles/feedtopbar.css'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TopbarOptions from './TopbarOptions';
import CheckIcon from '@mui/icons-material/Check';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Email from './Email';
function Feedtopbar() {

    const circleClickedState = useSelector(selectClickedState);
    const dispatch = useDispatch();

    const [ClickCircle, setClickCircle] = useState(CheckCircleOutlineOutlinedIcon)
    const [VisibleOption, setVisibleOption] = useState('topbar__options');
    
    const handleClickCircle = () =>{
        if(ClickCircle == CheckCircleOutlineOutlinedIcon){
            setClickCircle(CheckCircleIcon)
            dispatch(notClicked())
            console.log(circleClickedState);
        }else{
            setClickCircle(CheckCircleOutlineOutlinedIcon)
            dispatch(clicked())
            console.log(circleClickedState);
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
        <div className='topbar__feed'>
            <div className='topbar__left'>
                <ClickCircle onClick={handleClickCircle}/>
        
                <button className='topbar__buttonFocused'>
                    Focused
                </button>
                <button className='topbar__button'>
                    Other
                </button>
            </div>
            <div className='topbar__right'>
                <button onClick={handleVisibleOptions}>Filter <KeyboardArrowDownOutlinedIcon/></button>
                <div className={VisibleOption}>
                    <TopbarOptions title={'All'} icon={<CheckIcon/>} isClicked={true}/>
                    <TopbarOptions title={'Unread'}icon={<CheckIcon/>}/>
                    <TopbarOptions title={'To me'}icon={<CheckIcon/>}/>
                    <TopbarOptions title={'Flagged'}icon={<CheckIcon/>}/>
                    <TopbarOptions title={'Mentions'}icon={<CheckIcon/>}/>
                    <TopbarOptions title={'Attachments'}icon={<CheckIcon/>}/>
                </div>
            </div>         
        </div>
        <Email/>
    </div>   
       


         </div>
    )
}

export default Feedtopbar

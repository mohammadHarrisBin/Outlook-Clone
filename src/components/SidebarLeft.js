import React from 'react'
import '../styles/sidebarLeft.css'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';
function SidebarLeft() {
    
    const SideBarLeftButton = (icon) =>{
        return(
            <div className='sideLeft__SideBarLeftButton'>
                {icon}
            </div>
        )
    }

    return (
        <div className='sideLeft'>
            {SideBarLeftButton(<EmailOutlinedIcon/>)}
            {SideBarLeftButton(<DateRangeOutlinedIcon/>)}
            {SideBarLeftButton(<PeopleAltOutlinedIcon/>)}
            {SideBarLeftButton(<AttachFileOutlinedIcon/>)}
            {SideBarLeftButton(<DoneOutlineOutlinedIcon/>)}

        </div>
    )
}

export default SidebarLeft

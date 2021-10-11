import React from 'react'
import Feedtopbar from './Feedtopbar'
import '../styles/feed.css';
import Email from './Email';

function Feed() {
    return (
        <div className='feed'>
            {/* feed topbar */}
            <Feedtopbar/>
        </div>
        
    )
}

export default Feed

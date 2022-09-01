import React from 'react'
import '../App.css';

const UserShowS = ({avatar,url,username,Score}) => {

  return (
    <>
<div className='user'>
<img
src={avatar}
alt="Profile"
width="70"
height="75"
 />
 <a href={url} target="_blank" rel="noreferrer">{username}</a>


</div>
    </>
  )
}

export default UserShowS;

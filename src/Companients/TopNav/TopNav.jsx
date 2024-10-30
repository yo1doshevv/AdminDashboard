import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import "./TopNav.scss"
import { NavLink } from 'react-router-dom';

const TopNav = () => {
  return (
    <div className='topnav'>
      <div className="topnav_wrapper">
        <div className="topnav_btn1">
        </div>
        <div className="topnav_btn2">
          <button><PersonIcon/><NavLink className="link" to="/login">Admin</NavLink></button>
        </div>
      </div>
    </div>
  )
}

export default TopNav
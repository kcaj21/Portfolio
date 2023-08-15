import React from "react";
import {Link} from 'react-router-dom';

const NavBar = () => {
  return(
  <>
    <div className='NavBar'>
    <div className='NavContainer'>
    <span>
        <Link to={'/Profile'}><p className="NavBarText">Profile</p></Link>
    </span>

    </div>
    </div>



  </>
  )
}

export default NavBar
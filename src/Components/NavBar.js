import React from "react";
import {Link} from 'react-router-dom';

const NavBar = () => {
    // SInce portfolio is the default url pathname when launching the app, it is designated as profile in the P tag, because I want the profile page to be the landing page
  return(
  <>
    <div className='NavBar'>
    <div className='NavContainer'>
    <span className="Profile-bgc">
        <Link to={'/Portfolio'}><p className="NavBarText">Profile</p></Link>
    </span>
    <span className="Projects-bgc">
        <Link to={'/Projects'}><p className="NavBarText">Projects</p></Link>
    </span>

    </div>
    </div>



  </>
  )
}

export default NavBar
import React, {Fragment} from 'react';
import { Link, NavLink } from 'react-router-dom';
import Fejin_Resume from '../Images/Fejin_Resume.pdf'

const Navbar = (props) => {
    // setTimeout(() => {
    //     props.history.push('/about')
    // }, 2000);
    return (
<div className="container-fluid">
<nav  className="navbar navbar-expand-lg navbar-light mt-6 ">
  <a className="navbar-brand " style={{fontFamily: 'Oswald'}} href="/"> <h2> Fejin Abdul Rasheed</h2></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
    <ul className="navbar-nav d-flex flex-reverse pull-right">
      <li className="nav-item p-2">
      <NavLink className="Link" activeClassName="active" to="/"><i className="fas fa-home"></i> Home</NavLink>
      </li>

      <li className="nav-item p-2">
      <NavLink className="Link" activeClassName="active" to="/about"> <i className="fas fa-info-circle"></i> About</NavLink>
      </li>
      <li className="nav-item p-2">
      <NavLink className="Link" activeClassName="active" to="/contact"> <i className="fas fa-phone-square"></i> Contact</NavLink>
      </li>

      <li className="nav-item p-2"> 
      <a className="Link" target="_blank" activeClassName="active" href={Fejin_Resume}> <i className="far fa-file"></i> Resume</a>
      </li>
    
    </ul>

  </div>
</nav>

</div>

   
    )
}
export default Navbar;
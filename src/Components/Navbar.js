import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import styled from 'styled-components';




class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
        <NavWrapper className="nav navbar-expand-sm navbar-dark px-sm-5">
            <Link to="/company-presentation" className="nav-link">
          Home
          </Link>

            <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5" ></li>
            <Link to="/" className="nav-link">
            Products
            </Link>
            </ul>
           
        </NavWrapper> );
    }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link{
    color:var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;
  }
`
 
export default Navbar;
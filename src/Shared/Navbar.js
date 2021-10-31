import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Usefirebase from '../Hooks/Usefirebase';


const logo = 'https://i.ibb.co/HYwVKZx/352-3523121-peeps-clip-art.png';

const Navbar = () => {
  const {user,logout} = Usefirebase();
    return (

        <nav className="navbar-sticky-top">
        <header class="p-2 navbar-sticky-top bg-light text-white">
        <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white">
          <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
        </a>  

            <h1 className="text-dark nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 fsw-bold">
              <img style={{width:"50px"}}  src={logo} alt="" srcset="" />
              <span style={{color:"#1f487e"}} >Holiday Hype</span> 
              
            </h1>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">

          <Link to="/home">
          <li><a href="#" class="nav-link px-2 text-dark  ">Home</a></li>
          </Link>

          <Link to="/about">
          <li><a  class="nav-link px-2 text-dark fsw-bold">About Us</a></li>
          </Link>
          
         

         

          <Link to="/admin">
          <li><a href="#" class="nav-link px-2 text-dark">Add Services</a></li>
          </Link>

          <Link to="/myorder">
          <li><a href="#" class="nav-link px-2 text-dark">MY Order</a></li>
          </Link>


          <Link to="/semi">
          <li><a href="#" class="nav-link px-2 text-dark">Contact Us</a></li>
          </Link>
          

          
         

        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          {user?.email&&
         
          <li><span style={{color:"#1f487e"}} class="navbar-text text-dark"> {user.displayName} </span></li>
          }
         
        </form>


        <div class="text-end ">
{user.email ? 
          <button onClick={logout} type="button" class="btn btn-outline-dark me-2">Logout</button>:
          <Link to="/login">
           <button type="button" class="btn btn-outline-dark me-2">Login</button>
         </Link>
           


}
          <Link to="/signup">
          <button type="button" style={{backgroundColor:"#1f487e"}} class="btn text-light">Sign-up</button>
          </Link>
          
 
        </div>
 
      </div>
    </div>
  </header>
    </nav>







          
         
       
    );
};

export default Navbar;
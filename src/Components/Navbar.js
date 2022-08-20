import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {  Link } from "react-router-dom";
import auth from '../firebase.init';
const Navbar = () => {
    const [user]=useAuthState(auth)
    const logout=()=>{
        signOut(auth)
        
    }
    return (
        <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">SERVICE</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse  navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto" >
              <Link class="nav-link active" aria-current="page" to="/">Home</Link>
              {user? <li className='me-3'><button className='mt-2  border-0 text-black'  onClick={logout}>{user.displayName}<i class="fa-solid ms-1 text-white fs-6 fa-right-from-bracket"></i></button></li> 
            :
            <>
            <li class="nav-item me-3 ">
              <Link class="nav-link active " aria-current="page" to="/login">Login </Link>
            </li>
            <li class="nav-item me-3 ">
              <Link class="nav-link active " aria-current="page" to="/register">Register</Link>
            </li></>}

            </div>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;
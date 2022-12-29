import React, {useState} from 'react';
import { Link } from 'react-router-dom';
// router
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faSignOut,faUser,faPlus } from '@fortawesome/free-solid-svg-icons';
import * as ROUTES from '../constants/routes';
import '../styles/Menu.css';
import FirebaseContext from "../context/firebase";
import { useContext } from "react";
import UserContext from "../context/user";



export default function Menu() {
    const {firebase} = useContext(FirebaseContext);
    const {user} = useContext(UserContext);
    return (
        <div class="dropdown">
        <button class="dropbtn"><FontAwesomeIcon icon={faUser} className="fa-black" style={{display: "inline-block",
  borderRadius: "50px",
  boxShadow: "0 0 2px #00274C",
  color: "#FFCB05",
  marginTop: "10%",
  padding: "0.5em 0.6em"}}> </FontAwesomeIcon><div className = "flex items-center cursor-pointer mr-3">
                </div></button>
        <div class="dropdown-content">
<<<<<<< HEAD
                <b>{user.displayName}</b>
=======
                <div className='text-bold'>
                    <b>{user.displayName}</b>
                </div>
>>>>>>> refs/remotes/origin/main
                <Link to={ROUTES.DASHBOARD}>
                    Dashboard
                </Link>
                <Link to={ROUTES.PROFILE}>
                    Profile
                </Link>
                <Link to={ROUTES.CREATEPOST}>
                    Create Post
                </Link>
                <Link to={ROUTES.LOGIN}  onClick={() => {
                    firebase.auth().signOut();
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      firebase.auth().signOut();
                    }}}>
                    <i>Sign out</i>
                </Link>
        </div>
      </div>
  );
}
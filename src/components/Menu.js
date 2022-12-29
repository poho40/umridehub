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
        <button class="dropbtn"><FontAwesomeIcon icon={faUser} className="mr-3 fa-black"> </FontAwesomeIcon><div className = "flex items-center cursor-pointer mr-3">
                  {user.displayName}
                </div></button>
        <div class="dropdown-content">
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
                    Sign out
                </Link>
        </div>
      </div>
  );
}
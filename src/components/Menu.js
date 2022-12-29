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
                <b>{user.displayName}</b>
                <Link to={ROUTES.DASHBOARD}>
                <FontAwesomeIcon icon={faHome} className="fa-black"></FontAwesomeIcon> Dashboard
                </Link>
                <Link to={ROUTES.PROFILE}>
                <FontAwesomeIcon icon={faUser} className="fa-black"></FontAwesomeIcon> Profile
                </Link>
                <Link to={ROUTES.CREATEPOST}>
                <FontAwesomeIcon icon={faPlus} className="fa-black"></FontAwesomeIcon> Create Post
                </Link>
                <Link to={ROUTES.LOGIN}  onClick={() => {
                    firebase.auth().signOut();
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      firebase.auth().signOut();
                    }}}>
                   <FontAwesomeIcon icon={faSignOut} className="fa-black"></FontAwesomeIcon> <i>Sign out</i>
                </Link>
        </div>
      </div>
  );
}
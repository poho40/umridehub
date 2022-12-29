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



const Menu = props => {
    // conditionally render dropdown affect based on this boolean
    const [openMenu, setOpenMenu] = useState(false)

    // parameter num corresponds to .open-# classes
    // is assigned when Menu clicked triggering animated dropdown
    const setClassNames = num => {
        const classArr = ["m-item"];
        if (openMenu) classArr.push(`open-${num}`)
        return classArr.join(' ')
    }

    // takes route string as parameter
    const pushToRoute = route => {
        props.push(route)
        setOpenMenu(false)
    }
    const {firebase} = useContext(FirebaseContext);
    const {user} = useContext(UserContext);
    return (
        <div className="Menu">
            <div className={"m-item m-logo"} 
                onClick={() => setOpenMenu(!openMenu)}>
                <FontAwesomeIcon icon={faUser} className="mr-3 fa-black"> <div className = "flex items-center cursor-pointer mr-3">
                  {user.displayName}
                </div></FontAwesomeIcon>
            </div>
            <div className={setClassNames(1)}>

                <Link to={ROUTES.DASHBOARD}>
                    Dashboard
                </Link>
            </div>
            <div className={setClassNames(2)}>
                <Link to={ROUTES.PROFILE}>
                        Profile
                </Link>
            </div>
            <div className={setClassNames(3)}>
                 <Link to={ROUTES.CREATEPOST}>
                        CreatePost
                </Link>
            </div>
            <div className={setClassNames(4)}
                onClick={() => pushToRoute(ROUTES.LOGIN)}>
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

export default Menu;
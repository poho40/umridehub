import { useContext } from "react";
import { Link } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import UserContext from "../context/user";
import * as ROUTES from '../constants/routes'
import Dashboard from "../pages/dashboard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faSignOut,faUser,faPlus } from '@fortawesome/free-solid-svg-icons'


export default function Header() {
    const {firebase} = useContext(FirebaseContext);
    const {user} = useContext(UserContext);


    return(
    <header className="h-16 border-b border-gray-primary mb-8" style={{
    }}>
         <div className="container mx-auto max-w-screen-lg h-full">
            <div className="justify-between flex h-full">
                <div className="text-gray-700 text-center flex items-center align-items cursor-pointer">
                    <h1 className="flex justify-center-w-full">
                        <Link to={ROUTES.DASHBOARD}>
                            <img src="/images/typography.png" alt="Typography Logo" className="mt-2 w-6/12"/>
                        </Link>
                    </h1>
                </div>
                <div className="text-gray-700 text-center flex items-center align-items">
                {user ? (     
                    <>
                <Link to={ROUTES.DASHBOARD} aria-label="Dashboard">
                  <FontAwesomeIcon icon={faHome} className = "mr-3"></FontAwesomeIcon>
                </Link>

                <Link to={ROUTES.PROFILE} aria-label="Profile">
                  <FontAwesomeIcon icon={faUser} className="mr-3"></FontAwesomeIcon>
                </Link>


                <Link to={ROUTES.CREATEPOST} aria-label="CreatePOst">
                  <FontAwesomeIcon icon={faPlus} className="mr-3"></FontAwesomeIcon>
                </Link>


                <div className = "flex items-center cursor-pointer mr-3">
                  {user.displayName}
                </div>

                <button
                  type="button"
                  title="Sign Out"
                  onClick={() => {
                    firebase.auth().signOut();
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      firebase.auth().signOut();
                    }
                  }}
                >
                  <FontAwesomeIcon icon={faSignOut} className = "mr-3"></FontAwesomeIcon>
                </button>

                </> 
                ) : (
                    <>
                    <Link to={ROUTES.LOGIN}>
                      <button
                      type = "button"
                      className="bg-blue-medium font-bold text-sm-rounded text-white w-20 h-8"
                      >
                      Log in
                      </button>
                    </Link>
                    <Link to={ROUTES.SIGNUP}>
                      <button
                      type = "button"
                      className="font-bold text-sm-rounded text-blue-medium w-20 h-8"
                      >
                      Sign up
                      </button>
                    </Link>
                    </>
                )}
                </div>
            </div>
         </div>
    </header>
    )
}
import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/user";
import * as ROUTES from '../constants/routes'
import Dashboard from "../pages/dashboard";
import Menu from "./Menu";


export default function Header() {
    const {user} = useContext(UserContext);


    return(
    <header className="h-16 border-b border-gray-primary mb-8 bg-white" style={{
    }}>
         <div className="container mx-auto max-w-screen-lg h-full">
            <div className="justify-between flex h-full">
                <div className="text-gray-700 text-center flex items-center align-items cursor-pointer">
                    <h1 className="flex justify-center-w-full">
                        <Link to={ROUTES.DASHBOARD}>
                            <img src="/images/typography.png" alt="Typography Logo" className="mt-2 w-6/12" style={{width:"30%"}}/>
                        </Link>
                    </h1>
                </div>
                <div className="text-gray-700 text-center flex items-center align-items">
                {user ? (     
                    <>
                  <Menu/>
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
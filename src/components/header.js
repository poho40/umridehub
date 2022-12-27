import { useContext } from "react";
import { Link } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import UserContext from "../context/user";
import * as ROUTES from '../constants/routes'



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
                            <Link to={ROUTES.DASHBOARD}
                            aria-label = "Dashboard">
                                <p>home button</p>
                            </Link>
                            
                            <button 
                                type="button"
                                title="Sign Out"
                                onClick={()=> firebase.auth().signOut()}
                                onKeyDown = {(event)=>{
                                    if(event.key==='Enter'){
                                        firebase.auth().signOut();
                                    }
                                }}
                            />
                        </>
                    ) :(
                        <>
                        </>
                    )
                    }
                </div>
            </div>
         </div>
    </header>
    )
}
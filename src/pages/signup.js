import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import * as ROUTES from '../constants/routes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'


export default function SignUp(){
    const history = useNavigate();
    const {firebase} = useContext(FirebaseContext);

    const [fullName, setFullName] = useState('');

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const isInvalid = password === '' || emailAddress === '';

    const handleSignUp = async (event) => {
      event.preventDefault();

      const emailExists = await doesUserNameExist(emailAddress);
      try {
      } catch (error) {
        
      }
    };

    useEffect(() => {
        document.title = 'Sign Up -  UMRideHub';
    });


    return (
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
        <div className="flex w-3/5">
          <img src="/images/wolverine_in_convertible.png" alt="Wolverine logo" />
        </div>
        <div className="flex flex-col w-2/5">
          <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded">
            <h1 className="flex justify-center w-full">
              <img src="/images/typography.png" alt="Typography Logo" />
            </h1>
  
            {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}
  
            <form onSubmit={handleSignUp
    } method="POST">
              <div className="flex flex-wrap items-stretch w-full mb-4 relative h-15 bg-white items-center rounded mb-6 pr-10">
              <FontAwesomeIcon icon={faUser} className = "mr-3"></FontAwesomeIcon>
              <input
                aria-label="Enter your full name"
                type="text"
                placeholder="Full Name"
                className=" text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                onChange={({ target }) => setFullName(target.value)}
                value={fullName || ''}
              />
              </div>
              <div className="flex flex-wrap items-stretch w-full mb-4 relative h-15 bg-white items-center rounded mb-6 pr-10">
              <FontAwesomeIcon icon={faEnvelope} className = "mr-3"></FontAwesomeIcon>
              <input
                aria-label="Enter your email address"
                type="text"
                placeholder="Email Address"
                className=" text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                onChange={({ target }) => setEmailAddress(target.value)}
                value={emailAddress || ''}
              />
              </div>
              <div className="flex flex-wrap items-stretch w-full mb-4 relative h-15 bg-white items-center rounded mb-6 pr-10">
              <FontAwesomeIcon icon={faKey} className = "mr-3"></FontAwesomeIcon>
              <input
                aria-label="Enter your password"
                type="password"
                placeholder="Password"
                className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                onChange={({ target }) => setPassword(target.value)}
                value={password || ''}
              />
              </div>
              <button
                disabled={isInvalid}
                type="submit"
                className={`bg-blue-medium text-white w-full rounded h-8 font-bold
                  ${isInvalid && 'opacity-50'
                }`}
              >
                Sign Up
              </button>
            </form>
          </div>
          <div className="flex justify-center items-center flex-col w-full bg-white p-4 rounded border border-gray-primary">
            <p className="text-sm">
              Already have an account?{` `}
              <Link to={ROUTES.LOGIN} className="font-bold text-blue-medium">
              Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    )
}
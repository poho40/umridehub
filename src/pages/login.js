import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FirebaseContext from "../context/firebase";

export default function Login(){
    const history = useNavigate();
    const {firebase} = useContext(FirebaseContext);

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const isInvalid = password === '' || emailAddress === '';

    const handleLogin = () => {};

    useEffect(() => {
        document.title = 'Login -  UMRideHub';
    });


    return (
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
            <div className="flex w-2/5">
                <img src="/images/wolverine_in_convertible.png" style="width:30"></img>
            </div>
            <div className="flex flex-col w-2/5">
                <p>login</p>
            </div>
        </div>
    );
}
import Header from "../components/header";
import { useEffect, useState, useContext } from "react";
import FirebaseContext from "../context/firebase";
import UserContext from "../context/user";
import { Link, Navigate, useNavigate } from "react-router-dom";
import * as ROUTES from '../constants/routes';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";


    export default function AddPost() {
        useEffect(() => {
            document.title = 'CreatePost';
        },[]);
        const comments = [];
        const [title, setTitle] = useState('');
        const [departureLocation, setDepartureLocation] = useState('');
        const [destinationLocation, setDestination] = useState('');
        const [dateCreated] = useState(Date.now());
        const [departureDate, setDepartureDate] = useState('');
        const [departureTime, setDepartureTime] = useState('');
        const [transportation, setTransportation] = useState('');
        const { firebase, FieldValue } = useContext(FirebaseContext);
        const history = useNavigate();
        const {
          user: { displayName }
        } = useContext(UserContext);
        const {
            user: { uid: userId }
          } = useContext(UserContext);
        const handlePost = (event) => {
          event.preventDefault();
          history(ROUTES.PROFILE)
          return firebase
            .firestore()
            .collection('photos')
            .add({comments, title, departureLocation, destinationLocation, dateCreated, departureDate, departureTime, transportation, displayName, userId}
            );
        };
    return(
        <div className="bg-gray-background">
            <Header />
            <form className="w-full max-w-lg justify-center grid place-items-center" style={{alignContent:"center", alignItems:'center', paddingBottom:"100px", paddingTop:"15px"}} method="POST"
            onSubmit={(event) => handlePost(event)
        }>
            <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <input maxLength = "50em" className="inputCSS" id="title" type="text" placeholder="Title" onChange={({ target }) => setTitle(target.value)}/>
      <p className="text-gray-600 text-xs italic"></p>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-3">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mr-3">
      <input onChange={({ target }) => setDepartureLocation(target.value)}className="inputCSS" id="grid-first-name" type="text" placeholder="Departure Location"/>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <input onChange={({ target }) => setDestination(target.value)} className="inputCSS" id="grid-last-name" type="text" placeholder="Destination"/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3">
        <select onChange={({ target }) => setTransportation(target.value)} className="inputCSS" id="grid-last-name" type="text" name="cars">
          <option disabled selected value> -- Mode of Transportation -- </option>
        <option value="Lyft">Lyft</option>
          <option value="Uber">Uber</option>
          <option value="Carpool">Carpool</option>
          <option value="Taxi">Taxi</option>
          <option value="Bus">Bus</option>
          <option value="WeedCart">WeedCart</option>
          </select>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mr-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Departure Date
      </label>
      <input onChange={({ target }) => setDepartureDate(target.value)} min = {new Date().toISOString().split("T")[0]} className="inputCSS" id="date" type="date"/>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        Departure Time
      </label>
      <input onChange={({ target }) => setDepartureTime(target.value)} className="inputCSS" id="time" type="time"/>
    </div>
  </div>
    <button
    style={{  alignItems: "center",
      backgroundColor: "#FFCB05",
      borderRadius: "24px",
      boxSizing: "border-box",
      boxShadow:"2px 2px 2px 2px #00274C",
      color: "#3c4043",
      cursor: "pointer",
      display: "inline-flex",
      fontSize: "14px",
      fontWeight: "500",
      height: "40px",
      justifyContent: "center",
      letterSpacing: ".25px",
      lineHeight: "normal",
      maxWidth: "100%",
      overflow: "visible",
      position: "relative",
      textAlign: "center",
      width: "30%",
      }}
      className={`text-sm font-bold grid place-items-center${(!title || !departureTime ||!departureDate || !departureLocation || !destinationLocation || !transportation) && 'opacity-25'}`}
      type="button"
      onClick={handlePost}
        disabled = {(!title || !departureTime ||!departureDate || !departureLocation || !destinationLocation || !transportation)}>
            <FontAwesomeIcon className="mr-1" icon={faArrowUpFromBracket}></FontAwesomeIcon> <p> Create Post</p>
    </button>
</form>
 </div>
    )
}
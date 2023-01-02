import Header from "../components/header";
import Footer from "../components/footer";
import { useEffect, useState, useContext } from "react";
import FirebaseContext from "../context/firebase";
import UserContext from "../context/user";
import { Link, Navigate, useNavigate } from "react-router-dom";
import * as ROUTES from '../constants/routes';
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";


    export default function UpdatePosts() {
        useEffect(() => {
            document.title = 'UpdatePost';
        },[]);
        const location = useLocation();
        let content = location.state.content;
        const [title, setTitle] = useState(content.title);
        const [departureLocation, setDepartureLocation] = useState(content.departureLocation);
        const [destinationLocation, setDestination] = useState(content.destinationLocation);
        const [departureDate, setDepartureDate] = useState(content.departureDate);
        const [departureTime, setDepartureTime] = useState(content.departureTime);
        const [transportation, setTransportation] = useState(content.transportation);
        const {
          user: { displayName }
        } = useContext(UserContext);
        const { firebase, FieldValue } = useContext(FirebaseContext);
        const history = useNavigate();
        function UpdateForm() {
            history(ROUTES.PROFILE);
            return firebase
            .firestore()
            .collection("photos")
            .doc(content.docId)
            .update({title : title,
            departureDate: departureDate,
            departureLocation : departureLocation,
            departureTime : departureTime,
            destinationLocation : destinationLocation,
            transportation : transportation})
        }
    return(
        <div className="bg-gray-background">
            <Header />
            <h1 className=" grid place-items-center font-bold" style={{textAlign:'center'}}>Edit Post</h1>
            <form className="w-full max-w-lg justify-center grid place-items-center" style={{alignContent:"center", alignItems:'center', paddingBottom:"120px", paddingTop:"20px"}} method="POST">
            <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <input maxLength = "50em" className="inputCSS" id="title" type="text" placeholder="Title" defaultValue = {content.title} onChange={({ target }) => setTitle(target.value)}/>
      <p className="text-gray-600 text-xs italic"></p>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-3">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mr-3">
      <input defaultValue = {content.departureLocation} onChange={({ target }) => setDepartureLocation(target.value)}className="inputCSS" id="grid-first-name" type="text" placeholder="Jane"/>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <input defaultValue = {content.destinationLocation} onChange={({ target }) => setDestination(target.value)} className="inputCSS" id="grid-last-name" type="text" placeholder="Doe"/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3">
        <select defaultValue = {content.transportation} onChange={({ target }) => setTransportation(target.value)} className="inputCSS" id="grid-last-name" type="text" name="cars">
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
      <input defaultValue = {content.departureDate} onChange={({ target }) => setDepartureDate(target.value)} min = {new Date().toISOString().split("T")[0]} className="inputCSS" id="date" type="date"/>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        Departure Time
      </label>
      <input defaultValue = {content.departureTime} onChange={({ target }) => setDepartureTime(target.value)} className="inputCSS" id="time" type="time"/>
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
      className={`text-sm font-bold text-blue-medium ${(!title || !departureTime ||!departureDate || !departureLocation || !destinationLocation || !transportation) && 'opacity-25'}`}
      type="button"
      onClick={UpdateForm}
      disabled = {(!title || !departureTime ||!departureDate || !departureLocation || !destinationLocation || !transportation)}>
            <FontAwesomeIcon className="mr-1" icon={faPencil}></FontAwesomeIcon> <p> Edit Post</p>
    </button>
</form>
<div style={{marginTop:"80px"}}><Footer /></div>
 </div>
    )
}
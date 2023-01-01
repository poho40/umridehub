import Header from "../components/header";
import { useEffect, useState, useContext } from "react";
import FirebaseContext from "../context/firebase";
import UserContext from "../context/user";
import { Link, Navigate, useNavigate } from "react-router-dom";
import * as ROUTES from '../constants/routes';


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
            <form className="w-full max-w-lg" method="POST"
            onSubmit={(event) => handlePost(event)
        }>
            <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        Title
      </label>
      <input maxLength = "50em" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="title" type="text" placeholder="Title" onChange={({ target }) => setTitle(target.value)}/>
      <p className="text-gray-600 text-xs italic"></p>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Departure Location
      </label>
      <input onChange={({ target }) => setDepartureLocation(target.value)}className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
      <p className="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        Destination 
      </label>
      <input onChange={({ target }) => setDestination(target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
        Mode of Transportation
      </label>
      <select onChange={({ target }) => setTransportation(target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" name="cars">
        <option disabled selected value> -- select an option -- </option>
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
  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Departure Date
      </label>
      <input onChange={({ target }) => setDepartureDate(target.value)} min = {new Date().toISOString().split("T")[0]} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="date" type="date"/>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        Departure Time
      </label>
      <input onChange={({ target }) => setDepartureTime(target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="time" type="time"/>
    </div>
  </div>
    <button
      className={`text-sm font-bold text-blue-medium ${(!title || !departureTime ||!departureDate || !departureLocation || !destinationLocation || !transportation) && 'opacity-25'}`}
      type="button"
      onClick={handlePost}
        disabled = {(!title || !departureTime ||!departureDate || !departureLocation || !destinationLocation || !transportation)}>
            Create Post
    </button>
</form>
 </div>
    )
}
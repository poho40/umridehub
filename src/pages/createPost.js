import Header from "../components/header";
import { useEffect, useState, useContext } from "react";
import FirebaseContext from "../context/firebase";
import UserContext from "../context/user";

    export default function AddPost() {
        useEffect(() => {
            document.title = 'CreatePost';
        },[]);
        const [post, setPost] = useState('');
        const comments = [];
        const [title, setTitle] = useState('');
        const [departureLocation, setDepartureLocation] = useState('');
        const [destinationLocation, setDestination] = useState('');
        const [dateCreated, setDateCreated] = useState('');
        const [departureDateTime, setDepartureDateTime] = useState('');
        const [transportation, setTransportation] = useState('');
        const { firebase, FieldValue } = useContext(FirebaseContext);
        const {
          user: { displayName }
        } = useContext(UserContext);
        const {
            user: { uid }
          } = useContext(UserContext);
      
        const handlePost = (event) => {
          event.preventDefault();
      
          setPost([{comments, title, departureLocation, destinationLocation, dateCreated, departureDateTime, transportation, displayName, uid}]);
        //   return firebase
        //     .firestore()
        //     .collection('photos')
        //     .update({
        //       FieldValue.arrayUnion({ title, departureLocation, destinationLocation, dateCreated, departureDateTime, transportation, displayName })
        //     });
        
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
      <input onChange={({ target }) => setTransportation(target.value)}  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
        Departure Date/Time
      </label>
      <input onChange={({ target }) => setDepartureDateTime(target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque"/>
    </div>
  </div>
  <button
          className={`text-sm font-bold text-blue-medium ${!post && 'opacity-25'}`}
          type="button"
          onClick={handlePost}
        >
          Post
        </button>
</form>
 </div>
    )
}
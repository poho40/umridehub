import Header from "../components/header";
import Footer from "../components/footer";
import { useEffect, useState, useContext } from "react";
import FirebaseContext from "../context/firebase";
import UserContext from "../context/user";
import { Link, Navigate, useNavigate } from "react-router-dom";
import * as ROUTES from '../constants/routes';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import usePosts from "../hooks/use-posts"

export default function Search() {
    const {posts} = usePosts();
    return (
        <div className="bg-gray-background">
        <Header />
        <h1 className=" grid place-items-center font-bold" style={{textAlign:'center'}}>Search</h1>
        <form className="w-full max-w-lg justify-center grid place-items-center" style={{alignContent:"center", alignItems:'center', paddingBottom:"120px", paddingTop:"20px"}} method="POST">
        <div className="flex flex-wrap -mx-3 mb-6">
<div className="w-full px-3">
  <input maxLength = "50em" className="inputCSS" id="title" type="text" placeholder="Title" onChange={({ target }) => setTitle(target.value)}/>
  <p className="text-gray-600 text-xs italic"></p>
</div>
</div>
<div className="flex flex-wrap -mx-3 mb-3">
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
<div className="w-full md:w-1/2 px-3">
  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
    Departure Time
  </label>
  <input onChange={({ target }) => setDepartureTime(target.value)} className="inputCSS" id="time" type="time"/>
</div>
</div>
</form>
<div style={{marginTop:"80px"}}><Footer /></div>
</div>
)
}
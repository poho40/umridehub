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

    return(
        <div className="bg-gray-background">
            <Header />
            <div className = "grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
            </div>
            <Footer/>
        </div>
    )
}
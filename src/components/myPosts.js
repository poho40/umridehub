import Skeleton from "react-loading-skeleton"
import useUserPosts from "../hooks/use-userPosts"
import Card from "./cards";
import FirebaseContext from "../context/firebase";
import { useContext, useState } from "react";
import { deleteFromFireStore } from "../services/firebase";
import { Link, Navigate, useNavigate } from "react-router-dom";
import * as ROUTES from '../constants/routes';
import UpdatePosts from "../pages/updateForm";

export default function MyPosts() {
    const { firebase, FieldValue } = useContext(FirebaseContext);
    const history = useNavigate();
    function deletePost(docId) {
        history(ROUTES.DASHBOARD)
        return firebase
            .firestore()
            .collection("photos")
            .doc(docId)
            .delete()
        
    }
    function UpdatePost(content) {
       history(ROUTES.UPDATEFORM, {state : {content : content} })
       return content;
    }

    const {posts} = useUserPosts(); 
    return (<div className="container col-span-3">
        {!posts ? (
            <>
            {[...new Array(4)].map((_, index) =>
                <Skeleton key = {index} count = {4} width = {320} height = {400} className = "mb-3"/>
            )}
            </>
        ) : (
            posts.map((content) => <div className = "p-4 pt-1 pb-4 bg-white"><Card key = {content.docId} content = {content}/><button className = "bg-red font-bold text-sm-rounded text-white w-20 h-8 rounded-full" onClick={() => deletePost(content.docId)}>Delete</button><button className = "bg-red font-bold text-sm-rounded text-white w-20 h-8 rounded-full" onClick={() => UpdatePost(content)}>Edit</button></div>)
        )}
    </div>
    );
}
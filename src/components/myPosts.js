import Skeleton from "react-loading-skeleton"
import useUserPosts from "../hooks/use-userPosts"
import Card from "./cards";
import FirebaseContext from "../context/firebase";
import { useContext, useState } from "react";
import { deleteFromFireStore } from "../services/firebase";
import { Link, Navigate, useNavigate } from "react-router-dom";
import * as ROUTES from '../constants/routes';

export default function MyPosts() {
    const { firebase, FieldValue } = useContext(FirebaseContext);
    const history = useNavigate();
    const refresh = () => window.location.reload(true)
    function deletePost(docId) {
        refresh();
        return firebase
        .firestore()
        .collection("photos")
        .doc(docId)
        .delete()
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
            posts.map((content) => <div className = "p-4 pt-1 pb-4 bg-white"><Card key = {content.docId} content = {content}/><button className = "bg-blue-medium font-bold text-sm-rounded text-white w-20 h-8" onClick={() => deletePost(content.docId)}>hello</button></div>)
        )}
    </div>
    );
}
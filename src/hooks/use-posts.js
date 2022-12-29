import { useContext, useEffect, useState } from "react";
import UserContext from "../context/user";
import { getUserByUserId, getPosts } from "../services/firebase";

export default function usePosts(){
    const[posts, setPosts] = useState(null);
    const{
        user:{uid: userId =' '}

    } = useContext(UserContext);

    useEffect(() =>{
        async function getRecentPosts(){

            const {others} = await getUserByUserId(userId);
            let otherPosts = [];

            if(others.length > 0){
                otherPosts =  await getPosts(userId, others);
            }
            
        }
    },[]);

    return{posts};
}
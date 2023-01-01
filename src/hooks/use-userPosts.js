import { useContext, useEffect, useState } from "react";
import UserContext from "../context/user";
import { getUserByUserId, myRecentPosts } from "../services/firebase";

export default function useUserPosts(){
    const[posts, setPosts] = useState(null);
    const{
        user:{uid: userId =' '}

    } = useContext(UserContext);

    useEffect(() =>{
        async function getRecentPosts(){
            const [others] = await getUserByUserId(userId);
            let otherPosts = [];

            otherPosts =  await myRecentPosts(userId);
            otherPosts.sort((a,b) => b.dateCreated - a.dateCreated);
            setPosts(otherPosts);
        }

        getRecentPosts();

    },[userId]);
    console.log(posts);
    return{posts};
}
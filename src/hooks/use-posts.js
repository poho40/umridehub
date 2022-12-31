import { useContext, useEffect, useState } from "react";
import UserContext from "../context/user";
import { getUserByUserId, recentPosts } from "../services/firebase";

export default function usePosts(){
    const[posts, setPosts] = useState(null);
    const{
        user:{uid: userId =' '}

    } = useContext(UserContext);

    useEffect(() =>{
        async function getRecentPosts(){
            const [others] = await getUserByUserId(userId);
            let otherPosts = [];

            otherPosts =  await recentPosts(userId);
            console.log(otherPosts);
            otherPosts.sort((a,b) => b.dateCreated - a.dateCreated);
            setPosts(otherPosts);
        }

        getRecentPosts();

    },[userId]);

    return{posts};
}
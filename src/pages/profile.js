import Header from "../components/header";
import { useEffect } from "react";
import MyPosts from "../components/myPosts";


export default function Profile(){
    useEffect(() => {
        document.title = 'MyProfile';
    },[]);

    return(
        <div className="bg-gray-background">
            <Header />
            <div className = "grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
                <MyPosts />
            </div>

        </div>
    )
}
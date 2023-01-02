import Header from "../components/header";
import Footer from "../components/footer";
import { useEffect } from "react";
import MyPosts from "../components/myPosts";


export default function Profile(){
    useEffect(() => {
        document.title = 'MyProfile';
    },[]);

    return(
        <div className="bg-gray-background">
            <Header />
            <div className = "grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg" style={{paddingBottom:"40px"}}>
                <MyPosts />
            </div>
            <div style={{paddingTop:"80px"}}><Footer /></div>

        </div>
    )
}
import { useEffect } from "react";
import Header from "../components/header";
import MyPosts from "../components/myPosts";
import Recent from '../components/recent';

export default function Dashboard(){
    useEffect(() => {
        document.title = 'UMRideHub';
    },[]);

    return(
        <div className="bg-gray-background">
            <Header />
            <MyPosts />
            <div className = "grid">
                <Recent />
            </div>

        </div>
    )
}
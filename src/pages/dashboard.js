import { useEffect } from "react";
import Header from "../components/header";
import Recent from '../components/recent';

export default function Dashboard(){
    useEffect(() => {
        document.title = 'UMRideHub';
    },[]);

    return(
        <div className="bg-gray-background">
            <Header />
            <div className = "grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
                <Recent />
            </div>

        </div>
    )
}
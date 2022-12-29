import Header from "../components/header";
import { useEffect } from "react";

export default function Profile(){
    useEffect(() => {
        document.title = 'MyProfile';
    },[]);

    return(
        <div className="bg-gray-background">
            <Header />

        </div>
    )
}
import Header from "../components/header";
import { useEffect } from "react";

export default function CreatePost(){
    useEffect(() => {
        document.title = 'CreatePost';
    },[]);

    return(
        <div className="bg-gray-background">
            <Header />

        </div>
    )
}
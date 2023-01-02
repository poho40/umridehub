import Header from "../components/header";
import Footer from "../components/footer";
import { useEffect } from "react";


export default function Search(){
    useEffect(() => {
        document.title = 'Search';
    },[]);

    return(
        <div className="bg-gray-background">
            <Header />
            <div className = "grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
            </div>
            <Footer/>
        </div>
    )
}
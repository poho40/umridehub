import { useEffect } from "react";

export default function NotFound(){
    useEffect(() => {
        document.title = 'NOT FOUND - UMRideHub';
    },[]);
    return(
        <div className="bg-gray-background">
            <div className="mx-auth max-w-screen-lg">
                <p className="text-center text-2xl">NOT FOUND!</p>
            </div>
        </div>
    );
}

import Skeleton from "react-loading-skeleton"
import useUserPosts from "../hooks/use-userPosts"
import Card from "./cards";

export default function MyPosts() {
    const {posts} = useUserPosts(); 
    return (<div className="container col-span-3">
        {!posts ? (
            <>
            {[...new Array(4)].map((_, index) =>
                <Skeleton key = {index} count = {4} width = {320} height = {400} className = "mb-3"/>
            )}
            </>
        ) : (
            posts.map((content) => <div className = "p-4 pt-1 pb-4 bg-white"><Card key = {content.docId} content = {content}/> <button className = "bg-red-500">hello</button></div>)
        )}
    </div>
    );
}
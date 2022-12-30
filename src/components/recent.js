import Skeleton from "react-loading-skeleton"
import usePosts from "../hooks/use-posts"
import useUser from "../hooks/use-user"
import SimpleDateTime  from 'react-simple-timestamp-to-date';
import Card from "./cards";

export default function Recent() {
    const {posts} = usePosts(); 
    const postComment = async(event) => {

    }

    return (<div className="container col-span-3">
        {!posts ? (
            <>
            {[...new Array(4)].map((_, index) =>
                <Skeleton key = {index} count = {4} width = {320} height = {400} className = "mb-3"/>
            )}
            </>
        ) : (
            posts.map((content) => <Card key = {content.docId} content = {content}/>)
        )}
    </div>
    );
}
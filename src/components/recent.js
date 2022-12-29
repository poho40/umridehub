import Skeleton from "react-loading-skeleton"
import usePosts from "../hooks/use-posts"
import useUser from "../hooks/use-user"

export default function Recent() {
    const {posts} = usePosts(); 


    return (<div className="container col-span-">
        {posts ? (
            <>
            {[...new Array(4)].map((_, index) =>
                <Skeleton key = {index} count = {1} width = {320} height = {400} className = "mb-3"/>
            )}
            </>
        ) : (
            posts.map((content) => <p>{content.caption}</p>)
        )}
    </div>
    );
}
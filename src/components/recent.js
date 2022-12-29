import Skeleton from "react-loading-skeleton"
import usePosts from "../hooks/use-posts"
import useUser from "../hooks/use-user"

export default function Recent() {
    const {posts} = usePosts(); 

    console.log('posts', posts);

    return <div className="container col-span-3">
        <p>I am the recents</p>
    </div>
}
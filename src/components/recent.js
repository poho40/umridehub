import Skeleton from "react-loading-skeleton"
import usePosts from "../hooks/use-posts"
import useUser from "../hooks/use-user"
import SimpleDateTime  from 'react-simple-timestamp-to-date';

export default function Recent() {
    const {posts} = usePosts(); 


    return (<div className="container col-span-3">
        {!posts ? (
            <>
            {[...new Array(4)].map((_, index) =>
                <Skeleton key = {index} count = {4} width = {320} height = {400} className = "mb-3"/>
            )}
            </>
        ) : (
            posts.map((content) =><div key = {content.docId} className="card">
            <h1>{content.fullName}</h1>
            <p>Date Created : <SimpleDateTime dateFormat = "MDY" dateSeparator="/" timeSeparator="-" showTime = "0">{content.dateCreated}</SimpleDateTime></p>
            <p>Departure Date/Time : <SimpleDateTime dateFormat = "MDY" dateSeparator="/" timeSeparator=":" meridians = "1">{content.departureDateTime}</SimpleDateTime></p>
            <p>Departure : {content.departureLocation}</p>
            <p>Destination : {content.destinationLocation}</p>
            <p><button>Add comment</button></p>
          </div>)
        )}
    </div>
    );
}
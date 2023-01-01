import { useState } from 'react';
import PropTypes from 'prop-types';
import { differenceInMilliseconds, formatDistance } from 'date-fns';
import AddComment from './addComment';

export default function Comments({ docId, comments: allComments, posted, commentInput }) {
  const [comments, setComments] = useState(allComments);
  const [commentsSlice, setCommentsSlice] = useState(2);
  const showNextComments = () => {
    setCommentsSlice(commentsSlice + 3);
  };
  return (
    <>
      <div className="p-4 pt-1 pb-4 bg-white justify-between mx-auto max-w-screen-lg">
        {comments.slice(0, commentsSlice).map((item) => (
          <p key={`${item.comment}-${item.displayName}`} className="mb-1 col-span-2">
              <span className="mr-1 font-bold">{item.displayName} <span style={{whiteSpace: "pre-line",wordWrap: "break-word", fontWeight:"normal"}}>{item.comment}</span></span>
          </p>
        ))}
        {comments.length >= 3 && commentsSlice < comments.length && (
          <button
            className="text-sm text-gray-base mb-1 cursor-pointer focus:outline-none"
            type="button"
            onClick={showNextComments}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                showNextComments();
              }
            }}
          >
            View more comments
          </button>
        )}
        <p className="text-gray-base uppercase text-xs mt-2">
          {formatDistance(new Date(posted), new Date())} ago
          
          
        </p>
      </div>
      <AddComment
        docId={docId}
        comments={comments}
        setComments={setComments}
        commentInput={commentInput}
      />
    </>
  );
}

Comments.propTypes = {
  docId: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
  posted: PropTypes.number.isRequired,
  commentInput: PropTypes.object.isRequired
};
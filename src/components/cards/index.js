import PropTypes from 'prop-types';
import { useRef } from 'react';
import Comments from './comment';
import SimpleDateTime from 'react-simple-timestamp-to-date';

export default function Card({ content }) {
    const commentInput = useRef(null);
    return (
    <div>
    <div className='mb-5'>
    <div className="p-4 pt-1 pb-4 bg-white border-t border-b border-gray-primary">
        <h1 className='font-bold inline'>{content.fullName} <p className = "text-right font-normal"> Contact Info : {content.emailAddress}</p> <p className = "text-right">Date Created : <SimpleDateTime dateFormat = "MDY" dateSeparator="/" timeSeparator="-" showTime = "0">{content.dateCreated}</SimpleDateTime></p></h1>
            <p>Departure Date : <SimpleDateTime dateFormat = "MDY" timeFormat = "HM" dateSeparator="/" timeSeparator=":" showTime = "0" meridians = "1">{content.departureDateTime}</SimpleDateTime></p>
            <p>Departure Time : <SimpleDateTime dateFormat = "MDY" timeFormat = "HM" dateSeparator="/" timeSeparator=":" showDate = "0" meridians = "1">{content.departureDateTime}</SimpleDateTime></p>
            <p>Departure Location : {content.departureLocation}</p>
            <p>Destination : {content.destinationLocation}</p>
      </div>
        <Comments
          docId={content.docId}
          comments={content.comments}
          posted={content.dateCreated}
          commentInput={commentInput}
        />
      </div>
    </div>
    );
  }









Card.propTypes = {
    content: PropTypes.shape({
      departureDateTime :  PropTypes.number.isRequired, 
      fullName: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      docId: PropTypes.string.isRequired,
      departureLocation: PropTypes.string.isRequired,
      destinationLocation: PropTypes.string.isRequired,
      comments: PropTypes.array.isRequired,
      dateCreated: PropTypes.number.isRequired,
      emailAddress : PropTypes.string.isRequired
    })
  };
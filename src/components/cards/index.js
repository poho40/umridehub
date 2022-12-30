import PropTypes from 'prop-types';
import { useRef } from 'react';
import Comments from './comment';
import SimpleDateTime from 'react-simple-timestamp-to-date';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPlaneDeparture, faCalendar, faClock, faPlaneArrival } from '@fortawesome/free-solid-svg-icons';

export default function Card({ content }) {
    const commentInput = useRef(null);
    return (
    <div>
    <div className='mb-5'>
    <div className="p-4 pt-1 pb-4 bg-white border-t border-b border-gray-primary">
    <h1 className='font-bold'>{content.title} <span style={{float:'right'}}>{content.fullName}</span></h1>
        <p className="text-right"><SimpleDateTime dateFormat = "MDY" dateSeparator="/" timeSeparator="-" showTime = "0">{content.dateCreated}</SimpleDateTime></p>
            <p className="text-right">{content.emailAddress}</p>
            <div className='text-center mb-2'><FontAwesomeIcon icon={faCalendar} className="fa-black mr-3"></FontAwesomeIcon> <SimpleDateTime dateFormat = "MDY" timeFormat = "HM" dateSeparator="/" timeSeparator=":" showTime = "0" meridians = "1">{content.departureDateTime}</SimpleDateTime></div>
            <div className='text-center mb-2'><FontAwesomeIcon icon={faClock} className="fa-black mr-4"></FontAwesomeIcon><SimpleDateTime dateFormat = "MDY" timeFormat = "MH" dateSeparator="/" timeSeparator=":" showDate = "0" meridians = "1">{content.departureDateTime}</SimpleDateTime></div>
            <div className='text-center mb-2'><FontAwesomeIcon icon={faPlaneDeparture} className="fa-black mr-3"></FontAwesomeIcon> {content.departureLocation}</div>
            <div className='text-center mb-2'><FontAwesomeIcon icon={faPlaneArrival} className="fa-black mr-3"></FontAwesomeIcon> {content.destinationLocation}</div>
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
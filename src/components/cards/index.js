import PropTypes from 'prop-types';
import { useRef } from 'react';
import Comments from './comment';
import SimpleDateTime from 'react-simple-timestamp-to-date';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPlaneDeparture, faCalendar, faClock, faPlaneArrival, faRoad } from '@fortawesome/free-solid-svg-icons';

export default function Card({ content }) {
    const commentInput = useRef(null);
    function Clock(time) {
      var meridian;
      var int = parseInt(time[0] + time[1]);
      if(time[0] == '0' || time[1] < '2') {
        meridian = 'AM';
      }
      else {
        meridian = 'PM';
      }
      if(meridian === 'PM') {
        int -=12;
      }
      int += '';
      if(int === '0') {
        int = "12";
      }
      int += time[2];
      int += time[3];
      int += time[4];
      int += ' '
      int += meridian
      return int;
    }

    function Uniqname(email){
      return email.slice(0,-10);
    }

    function Date(date) {
      var ans = '';
      ans += date[5];
      ans += date[6];
      ans += '/';
      ans += date[8];
      ans += date[9];
      ans += '/';
      ans += date[0];
      ans += date[1];
      ans += date[2];
      ans += date[3]
      return ans;
    }
    return (
    <div>
    <div className='mb-5'>
    <div className="p-4 pt-1 pb-4 bg-white border-b border-gray-primary">
    <div className="grid grid-cols-5">
      <h1 className='font-bold col-span-3'>{content.title}</h1>
      <h1 className='col-span-1'></h1>
      <h1 className='font-bold' style={{textAlign:'right'}}>{content.displayName}</h1>
    </div>
    <div className="grid grid-cols-5 mb-5">
      <h1 className="col-span-3"><SimpleDateTime dateFormat = "MDY" dateSeparator="/" timeSeparator="-" showTime = "0">{content.dateCreated/1000}</SimpleDateTime></h1>
      <h1 className='col-span-1'></h1>
      <h1 className='float-right' style={{textAlign:'right', display:'block'}}>{Uniqname(content.emailAddress)}</h1>
    </div>
            <div className='mb-2'><FontAwesomeIcon icon={faCalendar} className="fa-black mr-4"></FontAwesomeIcon>{Date(content.departureDate)}</div>
            <div className='mb-2'><FontAwesomeIcon icon={faClock} className="fa-black mr-4"></FontAwesomeIcon>{Clock(content.departureTime)}</div>
            <div className='mb-2'><FontAwesomeIcon icon={faPlaneDeparture} className="fa-black mr-3"></FontAwesomeIcon> {content.departureLocation}</div>
            <div className='mb-2'><FontAwesomeIcon icon={faPlaneArrival} className="fa-black mr-3"></FontAwesomeIcon> {content.destinationLocation}</div>
            <div className='mb-2'><FontAwesomeIcon icon={faRoad} className="fa-black mr-3"></FontAwesomeIcon> Mode of Transport: {content.transportation}</div>
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
      departureDate :  PropTypes.string.isRequired, 
      departureTime :  PropTypes.string.isRequired, 
      displayName: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      docId: PropTypes.string.isRequired,
      departureLocation: PropTypes.string.isRequired,
      destinationLocation: PropTypes.string.isRequired,
      comments: PropTypes.array.isRequired,
      dateCreated: PropTypes.number.isRequired,
      emailAddress : PropTypes.string.isRequired
    })
  };
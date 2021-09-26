import React from 'react';
import './CardDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const CardDetails = (props) => {

    const {imge, Language, dssignedBy, firstAppeared, stableRelease, point, isSelected} = (props.item);
    return (
        <div className="cardDetails">
            <img className="images" src={imge} alt="" />
            <h3>Language: {Language}</h3>
            <h3>Designed By: {dssignedBy}</h3>
            <h3>First Appeared: {firstAppeared}</h3>
            <h3>Stable Release: {stableRelease}</h3>
            <h3>Point: {point}</h3>
            <button style={{opacity: isSelected ? '50%':'100%'}} disabled={isSelected} onClick= {() => props.addPoint(props.item)}   className="btn"><FontAwesomeIcon icon={faPlus}/> Add</button>
        </div>
    );
};

export default CardDetails;<h3>Card Details</h3>
import React from "react";
import rightArrow from '../../assets/media/right-arrow.png';
const LocationRow = ({locationArray}) => {

   
    return (
        <div className="dashboard-location-container">
            {locationArray.map((location, index) => (
                <React.Fragment key={index}>
                    {index !== 0 && <img src={rightArrow} alt=">" />}
                    <div className="dashboard-location-item" key={index}>
                        {location.title}
                    </div>
                </React.Fragment>
            ))}
        </div>
    )
}
export default LocationRow;
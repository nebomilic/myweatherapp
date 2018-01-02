import React  from 'react';
import PropTypes from 'prop-types';

const WeatherCard = ({data}) => {

    return (
        <div className='weather-card'>
            {data.day}<br/>
            {data.date}<hr /> 
         max {data.high} <br /> 
         min {data.low}
        </div>  
    );
};


WeatherCard.propTypes = {
    data: PropTypes.object
};

export default WeatherCard;
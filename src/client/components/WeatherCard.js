import React  from 'react';
import PropTypes from 'prop-types';

const WeatherCard = ({data}) => {

    return (
        <div className='weather-card'>
            <div className='day'>{data.day}</div>
            <div className='date'>{data.date.substr(0,6)}</div>
            <hr className='clear-float'/> 
            <div className='center-text'>

                <span className='high'>{data.high} &deg;C / </span> 
                <span className='low'> {data.low} &deg;C </span><br />
                <span className='text'>{data.text} </span>

            </div>
        </div>  
    );
};


WeatherCard.propTypes = {
    data: PropTypes.object
};

export default WeatherCard;
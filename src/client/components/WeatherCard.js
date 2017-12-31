import React, {Component} from 'react';

const WeatherCard = ({data}) => {

    return (
        <div className='weather-card'>
         {data.day}<br/>
         {data.date}<hr /> 
         max {data.high} <br /> 
         min {data.low}
        </div>  
    );
}

export default WeatherCard;
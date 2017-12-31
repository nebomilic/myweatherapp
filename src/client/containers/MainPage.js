import React, { Component } from 'react';
import WeatherCard from '../components/WeatherCard';
import PropTypes from 'prop-types';
class MainPage extends Component { 

    render() {
        return (
            <div className='weather-content'>
                <header>myWeatherApp</header>
                <div className='left-control'>&lt;</div>
                <div className='weather-cards-container'>
                    {this.props.forecast.map((item, i)=> <WeatherCard data={item} key={i}/>)}
                </div>
                <div className='right-control'>&gt;</div>
            </div>

        );
    }
}

MainPage.propTypes = {
    forecast: PropTypes.array
};

export default MainPage;


import React, { Component } from 'react';
import WeatherCard from '../components/WeatherCard';
class MainPage extends Component { 

    someMethod() {
        // I put this here just to avoid some linter errors
        console.log(this.props);
    }


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

export default MainPage;


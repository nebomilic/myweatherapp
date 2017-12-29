import React, { Component } from 'react';
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
            {this.props.forecast.map((item, i)=>
                <div className='weather-card' key={i}>
                {item.day}<br/>
                {item.date}<hr /> 
                max {item.high} <br /> 
                min {item.low}</div>  
        )}
            </div>
            <div className='right-control'>&gt;</div>

        </div>

        );
    }
}


export default MainPage;


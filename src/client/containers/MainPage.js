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
                <div className='weather-card'>today<br/>19/12<br /> max 1 <hr /> min -2</div>  
                <div className='weather-card'>tomorrow<br/>19/12<br /> max 1 <hr /> min -2</div>  
                <div className='weather-card'>sunday<br/>19/12<br /> max 1 <hr /> min -2</div>  
                <div className='weather-card'>Monday<br/>19/12<br /> max 1 <hr /> min -2</div>  
                
            </div>
            <div className='right-control'>&gt;</div>

        </div>

        );
    }
}


export default MainPage;


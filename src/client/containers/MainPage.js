import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from '../components/Slider';
class MainPage extends Component {      
    render() {       
        return (
            <div className='weather-content'>
                <header>myWeatherApp</header>
                <Slider  forecast={this.props.forecast} />
            </div>
        );
    }  
}

MainPage.propTypes = {
    forecast: PropTypes.array
};

export default MainPage;


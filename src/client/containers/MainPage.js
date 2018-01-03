import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from '../components/Slider';
import BarChart from '../components/BarChart';
import UnitToggle from '../components/UnitToggle';
class MainPage extends Component {      
    render() {       
        return (
            <div className='weather-content'>
                <header>myWeather <UnitToggle clickHandler={this.props.unitClickHandler}/></header>
                <Slider  forecast={this.props.forecast} />                
                <BarChart />
            </div>
        );
    }  
}

MainPage.propTypes = {
    forecast: PropTypes.array,
    unitClickHandler: PropTypes.func
};

export default MainPage;


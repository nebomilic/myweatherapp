import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { convertToCurrentUnitString } from '../utils';


class WeatherCard extends Component { 

    //returns full string
    convertToCurrentUnitString = (value) => {
        let returnValue = value;
        if (this.props.unit === 'C') {
            returnValue = Math.ceil((value - 32 ) * 5/9);
        }

        const returnValueString = `${returnValue} °${this.props.unit}`;
        return returnValueString; 
    }

    render() {

        const {data, unit} = this.props;
        return (
            <div className='weather-card'>
                <div className='day'>{this.props.data.day}</div>
                {/*<div className='date'>{this.props.data.date.substr(0,6)}</div>*/}
                <hr className='clear-float'/> 
                <div className='center-text'>
    
                    <span className='high'>{convertToCurrentUnitString(data.high, unit)} / </span> 
                    <span className='low'> {convertToCurrentUnitString(data.low, unit)}</span><br />
                    <span className='text'>{data.text} </span>
    
                </div>
            </div>  
        );
    }
}

const mapStateToProps = ( state ) => ({  
    unit: state.forecastReducer.unit
});


WeatherCard.propTypes = {
    data: PropTypes.object,
    unit: PropTypes.string
};

const WeatherCardContainer = connect(mapStateToProps)(WeatherCard);

export default WeatherCardContainer;
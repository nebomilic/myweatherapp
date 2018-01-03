import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class WeatherCard extends Component { 

    //returns full string
    useCurrentUnit = (value) => {
        let returnValue = value;
        if (this.props.unit === 'C') {
            returnValue = Math.ceil((value - 32 ) * 5/9);
        }

        const returnValueString = `${returnValue} °${this.props.unit}`;
        return returnValueString; 
    }

    render() {

        return (
            <div className='weather-card'>
                <div className='day'>{this.props.data.day}</div>
                <div className='date'>{this.props.data.date.substr(0,6)}</div>
                <hr className='clear-float'/> 
                <div className='center-text'>
    
                    <span className='high'>{this.useCurrentUnit(this.props.data.high)} / </span> 
                    <span className='low'> {this.useCurrentUnit(this.props.data.low)}</span><br />
                    <span className='text'>{this.props.data.text} </span>
    
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
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { convertToCurrentUnit } from '../../utils';


class WeatherCard extends Component {

    //check weather icons https://erikflowers.github.io/weather-icons/

    render() {

        const {data, unit} = this.props;
        return (
            <div className='weather-card'>
                <span className='day'>{this.props.data.day}</span>
                <br />    
                <i className='wi wi-night-sleet icon'></i>
                <br />    
                <span className='high'>{convertToCurrentUnit(data.high, unit)}&deg; | </span> 
                <span className='low'> {convertToCurrentUnit(data.low, unit)}&deg;</span><br />
                {/*<span className='text'>{data.text} </span>*/}
    
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
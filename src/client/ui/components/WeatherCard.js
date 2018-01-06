import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { convertToCurrentUnit } from '../../utils';
import config from '../../config';

class WeatherCard extends Component {

    
    codeToIcon = (code) => {
        return `wi icon ${config.ICONS_DICTIONARY[code]}`;
    }

    render = () => {

        const {data, unit} = this.props;
        return (
            <div className='weather-card'>
                <span className='day'>{data.day}</span>
                <br />    
                <i className={this.codeToIcon(data.code)} title={data.text}></i>
                <br />    
                <span className='high'>{convertToCurrentUnit(data.high, unit)}&deg; | </span> 
                <span className='low'> {convertToCurrentUnit(data.low, unit)}&deg;</span><br />
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
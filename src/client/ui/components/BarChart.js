import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { convertToCurrentUnitString, convertToCurrentUnit } from '../../utils';

class BarChart extends Component { 

    convertToPercent = (value, unit) => {
        const MAX_C = 40;
        const MAX_F = 122;
        const convertedValue = convertToCurrentUnit(value, unit);
        const maxVal = unit === 'C' ? MAX_C: MAX_F;
        const percentValue = Math.ceil((parseInt(convertedValue) / maxVal)*100);
        return `${percentValue}%`;
    }

    render = () => {

        const {unit} = this.props;
        return (
            <ul className='chart'>
                { this.props.forecast.map((item, i) => 
                    <li key={i}>
                        <span key={item.code} style={{ 'height' : this.convertToPercent(item.high, unit) }} title={`${convertToCurrentUnit(item.high, unit)}°`}></span>
                    </li>
                )}                
            </ul>   
        );}
}

const mapStateToProps = ( state ) => ({  
    unit: state.forecastReducer.unit
});

BarChart.propTypes = {
    data: PropTypes.object,
    unit: PropTypes.string
};


BarChart.propTypes = {
    forecast: PropTypes.array
};

const BarChartContainer = connect(mapStateToProps)(BarChart);

export default BarChartContainer;
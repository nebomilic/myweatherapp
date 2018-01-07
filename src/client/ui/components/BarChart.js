import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { convertToCurrentUnit } from '../../utils';
class BarChart extends Component { 

    convertToPercent = (value, unit) => {
        const MAX_C = 20;
        const MAX_F = 80;
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

BarChart.propTypes = {
    unit: PropTypes.string,
    forecast: PropTypes.array
};

export default BarChart;
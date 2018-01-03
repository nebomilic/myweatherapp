import React, { Component } from 'react';
//import PropTypes from 'prop-types';

class BarChart extends Component {

    render = () => {
        return (
            <ul className='chart'>
                <li>
                    <span style={{ 'height' : '5%' }} title='12 &deg;C'></span>
                </li>
                <li>
                    <span style={{ 'height' : '70%' }} title='24 &deg;C'></span>
                </li>
                <li>
                    <span style={{ 'height' : '50%' }} title='20 &deg;C'></span>
                </li>
                <li>
                    <span style={{ 'height' : '15%' }} title='18 &deg;C'></span>
                </li>
                <li>
                    <span style={{ 'height' : '5%' }} title='12 &deg;C'></span>
                </li>
                <li>
                    <span style={{ 'height' : '55%' }} title='22 &deg;C'></span>
                </li>
                <li>
                    <span style={{ 'height' : '1%' }} title='5 &deg;C'></span>
                </li>
                <li>
                    <span style={{ 'height' : '9%' }} title='8 &deg;C'></span>
                </li>
            </ul>   
        );};
}


// BarChart.propTypes = {
//     data: PropTypes.object
// };

export default BarChart;
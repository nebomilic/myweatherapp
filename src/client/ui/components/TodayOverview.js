import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { convertToCurrentUnit } from '../../utils';
class TodayOverview extends Component {

    render = () => { 
        const {data, unit} = this.props;
        return (
            <div className='overview clear-float' >  
                <p className='conditions'>{data.conditions}</p>    
                <p className='temperature'>{convertToCurrentUnit(data.temperature, unit)}<sup className='unit'>&deg;</sup></p>          
                <p className='location'>{data.location}</p>          
                <p className='time'>{data.time}</p>
            </div>  

        ); 
    }   
}
TodayOverview.propTypes = {
    data: PropTypes.object,
    unit: PropTypes.string
};

export default TodayOverview;
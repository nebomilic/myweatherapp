import React, { Component } from 'react';
import PropTypes from 'prop-types';
class TodayOverview extends Component {

    render = () => { 
        return (
            <div className='overview' >  
                <p className='conditions'>{this.props.data.conditions}</p>    
                <p className='temperature'>{this.props.data.temperature}</p>          
                <p className='location'>{this.props.data.location}</p>          
                <p className='time'>{this.props.data.time}</p>
            </div>  

        ); 
    }   
}
TodayOverview.propTypes = {
    data: PropTypes.object
};

export default TodayOverview;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
class UnitToggle extends Component {

    render = () => { 
        return (
            <div className='toggle-container' >  
                <div className='toggle' >  
                    <span className='toggleText'>&deg;F</span>          
                    <input type="checkbox" id="switch" onClick={this.props.clickHandler}/>
                    <label htmlFor="switch">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</label>
                    <span className='toggleText'>&deg;C</span>
                </div>  
            </div>  

        ); 
    }   
}
UnitToggle.propTypes = {
    clickHandler: PropTypes.func
};

export default UnitToggle;
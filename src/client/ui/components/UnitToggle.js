import React from 'react';
import PropTypes from 'prop-types';
const UnitToggle = ({clickHandler}) => { 
    return (
        <div className='toggle-container' >
            <div className='toggle' >  
                <span className='toggleText'>&deg;F</span>          
                <input type="checkbox" id="switch" onClick={clickHandler}/>
                <label htmlFor="switch">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</label>
                <span className='toggleText'>&deg;C</span>
            </div>  
        </div>  

    ); 
};   

UnitToggle.propTypes = {
    clickHandler: PropTypes.func
};

export default UnitToggle;
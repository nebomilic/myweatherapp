import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Slider from '../components/Slider';
import BarChart from '../components/BarChart';
import UnitToggle from '../components/UnitToggle';
import { switchUnit } from '../actions';
class MainPage extends Component {      

    unitClickHandler = () => {
        this.props.dispatch(switchUnit());
    }

    render() {       
        return (
            <div className='weather-content'>
                <header>myWeather <UnitToggle clickHandler={this.unitClickHandler}/></header>
                <Slider  forecast={this.props.forecast} />                
                <BarChart forecast={this.props.forecast}/>
            </div>
        );
    }  
}

MainPage.propTypes = {
    forecast: PropTypes.array,
    dispatch: PropTypes.func
};

const mapStateToProps = ( state ) => ({  
    forecast: state.forecastReducer.forecast
});

const MainPageContainer = connect(mapStateToProps)(MainPage);

export default MainPageContainer;


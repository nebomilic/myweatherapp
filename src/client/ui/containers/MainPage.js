import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Slider from '../components/slider/Slider';
import BarChart from '../components/BarChart';
import UnitToggle from '../components/UnitToggle';
import TodayOverview from '../components/TodayOverview';
import { switchUnit } from '../../redux/actions';
class MainPage extends Component {      

    unitClickHandler = () => {
        this.props.dispatch(switchUnit());
    }

    render() {       
        return (
            <div className='weather-content fade-in'>
                <UnitToggle clickHandler={this.unitClickHandler}/>
                <TodayOverview  data={this.props.today} unit={this.props.unit}/> 
                <Slider  forecast={this.props.forecast} />                
                <BarChart forecast={this.props.forecast}/>
                <footer>see sourcecode on <a href='https://github.com/nebomilic/myweatherapp' target='_blank' rel='noopener noreferrer'>github</a></footer>
            </div>
        );
    }  
}

MainPage.propTypes = {
    forecast: PropTypes.array,
    dispatch: PropTypes.func,
    today: PropTypes.object,
    unit: PropTypes.string
};

const mapStateToProps = ( state ) => ({  
    forecast: state.forecastReducer.forecast,
    unit: state.forecastReducer.unit,
    today: state.forecastReducer.today
});

const MainPageContainer = connect(mapStateToProps)(MainPage);

export default MainPageContainer;


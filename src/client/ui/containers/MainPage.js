import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Slider from '../components/Slider';
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
            <div className='weather-content'>
                <UnitToggle clickHandler={this.unitClickHandler}/>
                <TodayOverview  data={this.props.today} unit={this.props.unit}/> 
                <Slider  forecast={this.props.forecast} />                
                <BarChart forecast={this.props.forecast}/>
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


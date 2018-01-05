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
                <TodayOverview  data={this.props.today} /> 
                {/*<UnitToggle clickHandler={this.unitClickHandler}/>*/}
                <Slider  forecast={this.props.forecast} />                
                <BarChart forecast={this.props.forecast}/>
            </div>
        );
    }  
}

MainPage.propTypes = {
    forecast: PropTypes.array,
    dispatch: PropTypes.func,
    today: PropTypes.object
};

const mapStateToProps = ( state ) => ({  
    forecast: state.forecastReducer.forecast,
    today: state.forecastReducer.today
});

const MainPageContainer = connect(mapStateToProps)(MainPage);

export default MainPageContainer;


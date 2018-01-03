import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchForecast, switchUnit } from '../actions';
import LoadingPage from './LoadingPage';
import MainPage from './MainPage';

class App extends Component { 

    componentWillMount = () => {
        this.props.dispatch(fetchForecast());
    }

    unitClickHandler = () => {
        this.props.dispatch(switchUnit());
    }

    render() {       
        return (
            <div>
                {this.props.isLoading === true &&   
            <LoadingPage loadingError={this.props.loadingError}/>
                }
                {this.props.isLoading === false &&   
            <MainPage forecast={this.props.forecast} unitClickHandler={this.unitClickHandler}/>
                }
            </div>
        );
    }
}

const mapStateToProps = ( state ) => ({  
    forecast: state.forecastReducer.forecast,
    isLoading: state.forecastReducer.isLoading,
    loadingError: state.forecastReducer.loadingError,
});
/* const mapDispatchToProps = {
    activateGeod,
    closeGeod,
  }; */
const AppContainer = connect(mapStateToProps)(App);
App.propTypes = {
    isLoading: PropTypes.bool,
    loadingError: PropTypes.bool,
    forecast: PropTypes.array,
    dispatch: PropTypes.func
};
export default AppContainer;


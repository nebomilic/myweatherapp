import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchForecast } from '../actions';
import LoadingPage from './LoadingPage';
import MainPage from './MainPage';

class App extends Component { 

    componentWillMount = () => {
        this.props.dispatch(fetchForecast());
    }

    render() {       
        return (
            <div>
                {(this.props.isLoading === true || this.props.loadingError === true) &&  
            <LoadingPage loadingError={this.props.loadingError}/>
                }
                {(this.props.isLoading === false &&  this.props.loadingError === false) && 
            <MainPage forecast={this.props.forecast} />
                }
            </div>
        );
    }
}

const mapStateToProps = ( state ) => ({  
    forecast: state.forecastReducer.forecast,
    isLoading: state.forecastReducer.isLoading,
    loadingError: state.forecastReducer.loadingError
});
/* const mapDispatchToProps = {
    activateGeod,
    closeGeod,
  }; */
App.propTypes = {
    isLoading: PropTypes.bool,
    loadingError: PropTypes.bool,
    forecast: PropTypes.array,
    dispatch: PropTypes.func
};
const AppContainer = connect(mapStateToProps)(App);
export default AppContainer;


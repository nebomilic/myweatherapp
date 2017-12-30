import React, { Component } from 'react';
import LoadingPage from './LoadingPage';
import MainPage from './MainPage';
import {connect} from "react-redux";
import {fetchForecast} from '../actions';

class App extends Component { 

    componentWillMount() {
        this.props.dispatch(fetchForecast());
    }

    render() {
       
        return (
        <div>

        {this.props.isLoading === true &&   
            <LoadingPage loadingError={this.props.loadingError}/>
        }

        {this.props.isLoading === false &&   
            <MainPage forecast={this.props.forecast} />
        }
        </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({  
    forecast: state.forecastReducer.forecast,
    isLoading: state.forecastReducer.isLoading,
    loadingError: state.forecastReducer.loadingError,  
  });
  
 /* const mapDispatchToProps = {  
    activateGeod,
    closeGeod,
  };*/
  
  const AppContainer = connect(  
    mapStateToProps
  )(App);

  //used store connection code from http://blog.tylerbuchea.com/super-simple-react-redux-application-example/
  
  export default AppContainer;


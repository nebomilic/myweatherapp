import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
class LoadingPage extends Component { 
   
    render() {
        const loadingClass = this.props.loadingError?'loading-sun--error':'loading-sun';
        return (
            <div className='loading-content'>
                <img className={loadingClass} src='assets/images/sun.svg' alt='' width='120' height='120' />
                {this.props.loadingError === true &&
                <div>Something went wrong. <br /> Please try again later.</div>
                }
                
                {this.props.loadingError === false &&
                <div>Loading...</div>
                }
            </div>
        );
    }
}

const mapStateToProps = ( state ) => ({ 
    loadingError: state.forecastReducer.loadingError,
});

LoadingPage.propTypes = {
    loadingError: PropTypes.bool
};

const LoadingPageContainer = connect(mapStateToProps)(LoadingPage);
export default LoadingPageContainer;


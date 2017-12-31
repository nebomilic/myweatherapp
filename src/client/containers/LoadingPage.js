import React, { Component } from 'react';
class LoadingPage extends Component { 
   
    render() {
        return (
            <div className='loading-content'>
                <img className='loading-sun' src='/assets/sun.svg' alt='' width='120' height='120' />
                <div>Just a moment...</div>
            </div>
        );
    }
}

export default LoadingPage;


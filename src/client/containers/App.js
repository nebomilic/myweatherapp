import React, { Component } from 'react';
import LoadingPage from './LoadingPage';
import MainPage from './MainPage';
class App extends Component { 

    componentWillMount() {
        this.setState({isLoading:true});
        setTimeout(() => {
            this.setState({isLoading:false});
        }, 1000);
    }

    render() {
       
        return (
        <div>

        {this.state.isLoading === true &&   
            <LoadingPage />
        }

        {this.state.isLoading === false &&   
            <MainPage />
        }
        </div>
        );
    }
}


export default App;


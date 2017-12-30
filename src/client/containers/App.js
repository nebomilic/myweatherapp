import React, { Component } from 'react';
import LoadingPage from './LoadingPage';
import MainPage from './MainPage';
import config from '../config';
import callUrl from '../utils';
class App extends Component { 


    componentWillMount() {
        this.setState({isLoading:true, loadingError: false});

        callUrl(config.GET_WEATHER_URL, 'GET').then(function(result){
            const data = JSON.parse(result);
            this.setState({forecast: data.query.results.channel.item.forecast});
        }.bind(this)).catch(function(error){
            this.setState({loadingError:true});
        }.bind(this));


        setTimeout(() => {
            this.setState({isLoading:false});
        }, 1000);
    }

    render() {
       
        return (
        <div>

        {this.state.isLoading === true &&   
            <LoadingPage loadingError={this.state.loadingError}/>
        }

        {this.state.isLoading === false &&   
            <MainPage forecast={this.state.forecast} />
        }
        </div>
        );
    }
}


export default App;


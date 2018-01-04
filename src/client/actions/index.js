import {getUrl} from '../utils';
import config from '../config';

export function fetchForecast(){
    return function(dispatch){
        getUrl(config.GET_WEATHER_URL)
            .then((response) =>{
                const data = JSON.parse(response);
                setTimeout(() => {
                    const forecast  = data.query.results.channel.item.forecast;
                    forecast[0].day = 'Today';
                    dispatch({type:'FETCH_FORECAST_FULFILLED', payload:forecast});
                }, config.LOADING_SCREEN_DURATION); // delay a bit in order to show the cool loading screen
            })
            .catch((err) => {
                dispatch({type:'FETCH_FORECAST_REJECTED', payload:err});
            });
    };
}

export function switchUnit() {
    return function(dispatch){
        dispatch({type:'SWITCH_UNIT'});
    };

}
import {getUrl} from '../utils';
import config from '../config';

export function fetchForecast(){

  return function(dispatch){
    getUrl(config.GET_WEATHER_URL)
        .then((response) =>{
          const data = JSON.parse(response);
          setTimeout(() => {
            dispatch({type:'FETCH_FORECAST_FULFILLED', payload:data.query.results.channel.item.forecast});
            }, config.LOADING_SCREEN_DURATION); // delay a bit in order to show the cool loading screen
            })
        .catch((err) => {
          dispatch({type:'FETCH_FORECAST_REJECTED', payload:err})
        })
  }
}
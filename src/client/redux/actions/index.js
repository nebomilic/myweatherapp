import {getUrl} from '../../utils';
import config from '../../config';

export function fetchForecast(){
    return function(dispatch){
        getUrl(config.GET_WEATHER_URL)
            .then((response) =>{
                const data = JSON.parse(response);
                // TODO: check if this is the right place
                // probably better move it to reducer
                setTimeout(() => {
                    const forecast  = data.query.results.channel.item.forecast;
                    // const now = new Date();
                    // const time = `Today, ${now.getHours()}:${now.getMinutes()}`;
                    const time = 'Now';
                    const today = {
                        conditions: data.query.results.channel.item.condition.text,
                        temperature: data.query.results.channel.item.condition.temp,
                        location: data.query.results.channel.location.city,
                        time: time, 
                    };
                    const payload = {forecast: forecast, today: today};
                    forecast[0].day = 'Today';
                    dispatch({type:'FETCH_FORECAST_FULFILLED', payload:payload});
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
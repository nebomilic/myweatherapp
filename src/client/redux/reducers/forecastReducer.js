export default function reducer(state={
    forecast:[],
    isLoading: true,
    loadingError: false,
    unit: 'F',
    today: {}
}, action){
    switch (action.type) {
    case 'FETCH_FORECAST':{
        return {...state};
    }
    case 'FETCH_FORECAST_FULFILLED':{
        const forecast = action.payload.item.forecast;
        forecast[0].day = 'Today'; // because we don't want to show the date for today
        const today = {
            conditions: action.payload.item.condition.text,
            temperature: action.payload.item.condition.temp,
            location: action.payload.location.city,
            time: 'Now', 
        };

        return {
            ...state,
            isLoading: false,
            forecast: forecast,
            today: today
        };
    }
    case 'FETCH_FORECAST_REJECTED':{
        return {
            ...state,
            isLoading: false,
            loadingError: true,
        };
    }

    case 'SWITCH_UNIT':{
        const newUnit = state.unit === 'F'?'C':'F';
        return {
            ...state,
            unit: newUnit
        };
    }    
  
    }
    return state;
}

//used as reference https://medium.com/technoetics/simple-react-redux-app-5f7390f4482b
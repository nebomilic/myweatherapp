export default function reducer(state={
    forecast:[],
    isLoading: true,
    loadingError: false,
    unit: 'F'
}, action){
    switch (action.type) {
    case 'FETCH_FORECAST':{
        return {...state};
    }
    case 'FETCH_FORECAST_FULFILLED':{
        return {
            ...state,
            isLoading: false,
            forecast:action.payload,
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
export default {
    //GET_WEATHER_URL: 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Honolulu%2C%20HI%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', // honolulu
    GET_WEATHER_URL: 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(769293)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', // Palma de Mallorca
    LOADING_SCREEN_DURATION: 1000, // in miliseconds
    ICONS_DICTIONARY:
    {
        0: 'wi-tornado', //	tornado
        1: 'wi-storm-showers', //	tropical storm
        2: 'wi-hurricane', //	hurricane
        3: 'wi-thunderstorm', //	severe thunderstorms
        4: 'wi-thunderstorm', //	thunderstorms
        5: 'wi-snow', //	mixed rain and snow
        6: 'wi-sleet', //	mixed rain and sleet    
        7: 'wi-snow', //	mixed snow and sleet
        8: 'wi-sprinkle', //	freezing drizzle
        9: 'wi-sprinkle', //	drizzle
        10: 'wi-rain-mix', //	freezing rain
        11: 'wi-showers', //	showers
        12: 'wi-showers', //	showers
        13: 'wi-snow', //	snow flurries
        14: 'wi-snow', //	light snow showers
        15: 'wi-snow-wind', //	blowing snow
        16: 'wi-snow', //	snow
        17: 'wi-hail', //	hail
        18: 'wi-day-sleet', //	sleet
        19: 'wi-dust', //	dust
        20: 'wi-fog', //	foggy
        21: 'wi-day-haze', //	haze
        22: 'wi-smoke', //	smoky
        23: 'wi-dust', //	blustery
        24: 'wi-windy', //	windy
        25: 'wi-snowflake-cold', //	cold
        26: 'wi-cloudy', //	cloudy
        27: 'wi-night-alt-cloudy', //	mostly cloudy (night)
        28: 'wi-day-cloudy', //	mostly cloudy (day)
        29: 'wi-night-partly-cloudy', //	partly cloudy (night)
        30: 'wi-day-cloudy', //	partly cloudy (day)
        31: 'wi-night-clear', //	clear (night)
        32: 'wi-day-sunny', //	sunny
        33: 'wi-night-alt-cloudy', //	fair (night)
        34: 'wi-day-cloudy', //	fair (day)
        35: 'wi-hail', //	mixed rain and hail
        36: 'wi-hot', //	hot
        37: 'wi-day-thunderstorm', //	isolated thunderstorms
        38: 'wi-day-thunderstorm', //	scattered thunderstorms
        39: 'wi-day-thunderstorm', //	scattered thunderstorms
        40: 'wi-showers', //	scattered showers
        41: 'wi-snow', //	heavy snow
        42: 'wi-showers', //	scattered snow showers
        43: 'wi-snow', //	heavy snow
        44: 'wi-day-cloudy', //	partly cloudy
        45: 'wi-storm-showers', //	thundershowers
        46: 'wi-snow', //	snow showers
        47: 'wi-storm-showers', //	isolated thundershowers
        3200: 'wi-earthquake', //not available
    }
};
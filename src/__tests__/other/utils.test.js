import {convertToCurrentUnit, getUrl} from '../../client/utils';
import config from '../../client/config';

test ('Test unit conversion utility function convertToCurrentUnit()', () => {

    expect(convertToCurrentUnit(32)).toEqual(32);  
    expect(convertToCurrentUnit(32, 'F')).toEqual(32);  
    expect(convertToCurrentUnit(32, 'C')).toEqual(0);  

});

test ('Test util function for rest calls getUrl() - and yahoo api result', (done) => {
    getUrl(config.GET_WEATHER_URL).then((response) => {
        const data = JSON.parse(response);
        // check if api return is fine
        expect(data.query.results.channel.item.forecast).toBeDefined();
        expect(data.query.results.channel.item.condition.text).toBeDefined();
        expect(data.query.results.channel.item.condition.temp).toBeDefined();
        expect(data.query.results.channel.location.city).toBeDefined();

        done();

    });
});

test ('Test util function for rest calls getUrl() with bogus url', (done) => {
    getUrl('http://totally-bogus-non-existing-url.com').catch((error) => {        
        expect(error).toBeDefined();
        done();
    });
});

test ('Test util function for rest calls getUrl() with bogus protocol', (done) => {
    getUrl('hxttp://www.yahoo.com').catch((error) => {        
        expect(error).toBeDefined();
        done();
    });
});

test ('Test util function for rest calls getUrl() with 404 page', (done) => {
    getUrl('https://query.yahooapis.com/v1/public/noexist').catch((error) => {        
        expect(error).toBeDefined();
        done();
    });
});

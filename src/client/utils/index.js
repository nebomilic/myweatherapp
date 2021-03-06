function callUrl(url, method) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject(new Error(`${this.status} : ${xhr.statusText}`));
            }
        };
        xhr.onerror = function () {
            reject(new Error(`${this.status} : ${xhr.statusText}`));
        };
        xhr.open(method, url, true);
        xhr.send();
    });
}

export function getUrl(url) {
    return callUrl(url, 'GET');
}

export function convertToCurrentUnit(value, unit='F') {
    let returnValue = value;
    if (unit === 'C') {
        returnValue = Math.ceil((value - 32 ) * 5/9);
    }
    return returnValue; 
}


export default function callUrl(url, method) {
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
           if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                status: this.status,
                statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
             reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
            
        xhr.open(method, url, true);
        xhr.send();

    });

}


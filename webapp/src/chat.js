import http from 'http'

var chat = {}
chat.get = function(url) {
    return new Promise(resolve => {
        // This is an example of an http request, for example to fetch
        // user data from an API.
        // This module is being mocked in __mocks__/request.js
        http.get({path: 'http://localhost:3000/api' + url}, response => {
            let data = '';
            response.on('data', _data => data += _data);
            response.on('end', () => resolve(data));
        });
    });
}
export default chat

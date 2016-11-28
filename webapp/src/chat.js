import http from 'http'

var chat = {}
var api_url = function(path){
    return "http://localhost:3000/api" + path
}

chat.get = function(path,fn) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            return fn(response)
        }
    };
    xhr.open("GET", api_url(path));
    xhr.send();
}

chat.post = function(path,body,fn) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 201) {
            var response = JSON.parse(this.responseText);
            return fn(response)
        }
    };
    xhr.open("POST", api_url(path));

    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.send(JSON.stringify(body));
}
export default chat

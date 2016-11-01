var ChatApi = {
    rooms: function(fn){
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var rooms = JSON.parse(this.responseText);
                return fn(rooms)
            }
        };
        xhr.open("GET", "http://localhost:3000/api/rooms");
        xhr.send();
    }
}
export default ChatApi;

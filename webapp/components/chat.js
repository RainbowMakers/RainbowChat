var chat = {
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
    },
    createRoom: function(room,fn){ 
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 201) {
                var room = JSON.parse(this.responseText);
                return fn(room)
            }
        };
        xhr.open("POST", "http://localhost:3000/api/rooms");
        xhr.send({name: 'pepito'});
    }
}
export default chat;

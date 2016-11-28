import React from 'react'
import chat from './chat'

class Room extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: [ {name: 'hola' } ],
            newRoomName: ""
        };
        this.addRoomItem = this.addRoomItem.bind(this);
        this.clearList = this.clearList.bind(this);
        this.inputChanged = this.inputChanged.bind(this);
    }

    inputChanged(event) {
        this.setState({ newRoomName: event.target.value });
    }

    componentDidMount() {
        chat.get("/rooms",function(res) {
            this.setState({
                rooms: res
            })
        }.bind(this))
    }

    addRoomItem() {
        if(this.state.newRoomName) {
            chat.post("/rooms",{ name: this.state.newRoomName },function(res) {
                this.setState({
                    rooms: this.state.rooms.concat([res])
                });
            }.bind(this))
        }
    }

    clearList(event) {
        this.setState({roms: []});
    }

    render() {
        let roomComponents = [],
            newRoomInput,
            newRoomAddButton,
            clearListButton;
            for(var index = 0; index < this.state.rooms.length; index++) {
                roomComponents.push(
                    <RoomItem
                    room={this.state.rooms[index]} />
                );
            }

            newRoomInput = <input className='new-item' type="text" onChange={this.inputChanged}/>;
            newRoomAddButton = <button className='add-room' onClick={this.addRoomItem}>Add new Room</button>;
            clearListButton = <button className='clear-list' onClick={this.clearList}>Clear the List</button>;

            return (
                <div>
                <ul>
                {roomComponents}
                </ul>
                {newRoomInput}
                {newRoomAddButton}
                {clearListButton}
                </div>
            );
    }
}

class RoomItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>
            {this.props.room.name}
            {this.props.room._id}
            </li>
        );
    }
}

export default Room;

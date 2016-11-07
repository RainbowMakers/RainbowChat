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
        chat.rooms(function(rooms){
            this.setState({
                rooms: rooms
            })
        }.bind(this))
    }

    addRoomItem() {
        if(this.state.newRoomName) {
            let newRoomItem = { name: this.state.newRoomName };
            chat.createRoom(function(createdRoom){
                alert('a')
                this.setState({
                    rooms: this.state.rooms.concat([createdRoom])
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

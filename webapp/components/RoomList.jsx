import React from 'react'

class Room extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            room: [
                {
                    name: "prueba",
                }
            ],
            newRoomName: ""
        };

        this.addRoomItem = this.addRoomItem.bind(this);
        this.clearList = this.clearList.bind(this);
        this.inputChanged = this.inputChanged.bind(this);
    }

    inputChanged(event) {
        this.setState({ newRoomName: event.target.value });
    }

    addRoomItem() {
        if(this.state.newRoomName) {
            let newRoomItem = { name: this.state.newRoomName };
            this.setState({
                room: this.state.room.concat([newRoomItem])
            });
        }
    }

    clearList(event) {
        this.setState({room: []});
    }

    render() {
        let roomComponents = [],
            newRoomInput,
            newRoomAddButton,
            clearListButton;
            for(var index = 0; index < this.state.room.length; index++) {
                roomComponents.push(
                    <RoomItem
                    room={this.state.room[index]} />
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
            </li>
        );
    }
}

export default Room;

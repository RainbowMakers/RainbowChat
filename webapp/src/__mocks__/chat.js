const rooms = {
    4: {name: 'Room 4'},
    5: {name: 'Room 5'},
};

export default function chat(url) {
    return new Promise((resolve, reject) => {
        process.nextTick(() =>  
            resolve(rooms) 
                        );
    });
}

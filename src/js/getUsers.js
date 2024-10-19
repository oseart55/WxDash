const socket = new WebSocket('ws://localhost:8080');

let connections = 1;

socket.onmessage = function (event) {
    data = JSON.parse(event.data);
    console.log(data)
    connections = data.count;
    $('.userCount')[0].innerHTML = `Users on page: ${connections}`
};

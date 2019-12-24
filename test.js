const Ws = require('ws');

const wss = new Ws.Server({ port: 8081 });
const ws = new Ws('ws://localhost:8081');

ws.on('open', () => {

    ws.onclose = () => console.log('Websocket closed');
    ws.onerror = (err) => console.log(`Websocket errored: ${err.message}`);

    wss.close();
    ws.close();
});

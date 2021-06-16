import React from 'react';
import SockJsClient from 'react-stomp';

class Socket extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    console.log(1, 12312123);
  }
  
  sendMessage = (msg) => {
    this.clientRef.sendMessage('/topic/public', msg);
  };
  
  render() {
    return (
        <div>
          <SockJsClient
              url="https://dd8636b83bb6.ngrok.io/cash4trash-api/ws"
              topics={['/topic/public']}
              onMessage={(msg, e) => {
                console.log(msg, e, 132812838);
              }}
              headers={ {
                token:
                    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkYW5ueSIsImV4cCI6MTYyMzg5MjQ0MSwiaWF0IjoxNjIzODc0NDQxfQ.sUhxyaOTBWI-Yt2qPfoFpngPlsOn7LVteQpd8sLyJNAA9TXhTK12BsJo_ceafBBlgnRHD3cJhTCh2ckTEjHUoA',
              }}
              onConnect={(msg) => {
                console.log(this.clientRef, 132812838);
                
                this.clientRef.sendMessage(
                    '/app/chat.addUser',
                    JSON.stringify({sender: 'test', type: 'JOIN'})
                );
              }}
              onDisconnect={(msg) => {
                console.log(msg, 132812838);
              }}
              onConnectFailure={(msg) => {
                console.log(msg, 132812838);
              }}
              onConnected={(msg) => {
                console.log(msg, 132812838);
              }}
              ref={(client) => {
                console.log(client);
                this.clientRef = client;
              }}
          />
        </div>
    );
  }
}

export default Socket;

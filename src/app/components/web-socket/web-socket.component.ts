import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-web-socket',
  templateUrl: './web-socket.component.html',
  styleUrls: ['./web-socket.component.css']
})
export class WebSocketComponent implements OnInit {

  messages: string[] = [];

  private stompClient;

  inputString: string;

  constructor() {
  }

  ngOnInit(): void {
    // this.initWebSocketConnection();
  }

  // initWebSocketConnection(): void {
  //   this.connect();
  //   const that = this;
  //   this.stompClient.connect({}, frame =>
  //     that.stompClient.subscribe('/chat', (message) => {
  //       if (message.body) {
  //         that.messages.push(message.body);
  //       }
  //     })
  //   );
  // }
  //
  // connect(): void {
  //   this.stompClient = over(new SockJS(API_URL + 'end'));
  // }
  //
  // sendMessage(): void {
  //   this.stompClient.send('/app/send', {}, this.inputString);
  //   this.inputString = '';
  // }

}

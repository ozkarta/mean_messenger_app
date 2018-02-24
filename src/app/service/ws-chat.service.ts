import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs/Rx';
import {WebSocketService} from './ws.service';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';


@Injectable()
export class ChatWebSocketService {
  public ws: Subject<any>;
  public connected: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private weService: WebSocketService, private http: HttpClient) {
    console.log('Creating web socket...');

    this.ws = <Subject<any>>this.weService.connect('ws://' + location.host)
      .map((response: MessageEvent): any => {
        const jsonData = JSON.parse(response.data);
        console.dir(jsonData);
        return jsonData;
      });
    this.subscribeChatServer();
  }

  subscribeChatServer() {

    this.ws.subscribe(
      successResponse => {
        console.dir(successResponse);
      },
      error => {
        console.dir(error);
      },
      () => {
        console.log('Closed');
      }
    );
  }

  sendMessage(message: any) {
    this.ws.next(message);
  }
}
import {Component, OnInit} from '@angular/core';
import {ChatWebSocketService} from '../../../service/ws-chat.service';
import {ChatService} from '../../../service/chat.service';
import {AppService} from '../../../service/app.service';
import {UserService} from '../../../service/user.service';
@Component({
  selector: 'app-messenger-component',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.style.css']
})

export class MessengerComponent implements OnInit {
  public user: any = null;
  public chats: any[] = [];
  public activeChat: any = null;
  constructor(private chatWSService: ChatWebSocketService,
              private chatService: ChatService,
              private appService: AppService,
              private userService: UserService) {

  }

  ngOnInit() {
    this.appService.user.subscribe(
      user => {
        this.user = user;
        if (this.user) {
          this.chatService.getChatListForUser(this.user['_id'])
            .subscribe(
              res => {
                if (res.chats) {
                  this.chats = res.chats;
                  if (this.chats.length) {
                    this.activeChat = this.chats[0];
                  }
                }
              },
              error => {
                console.dir(error);
              }
            );
        }
      }
    );
  }

  getChatTitle(chat) {
    let result = '';

    chat.participants.forEach(participant => {
      if (participant && participant['_id'] !== this.user['_id']) {
        result += `${participant['firstName']} ${participant['lastName']}, `;
      }
    });

    result = result.substr(0, result.length - 2);
    return result;
  }
}
import {Component, OnInit} from '@angular/core';
import {ChatService} from '../../../service/ws-chat.service';
@Component({
	selector: 'app-messenger-component',
	templateUrl: './messenger.component.html',
	styleUrls: ['./messenger.style.css']
})

export class MessengerComponent implements OnInit {
	constructor(private chatService: ChatService) {

	}

	ngOnInit() {

	}
}
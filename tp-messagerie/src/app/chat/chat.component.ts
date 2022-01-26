import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ChatService} from "./shared/services/chat.service";
import {first, skip} from "rxjs/operators";

interface IMessage {
  pseudo: string;
  content: string;
  date: number;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
  @Input() public pseudo!: string;
  @ViewChild('chatView') private chatView!: ElementRef;
  public message!: string;
  public messages!: IMessage[];

  constructor(private chat: ChatService) {
  }

  ngOnInit(): void {
    this.chat.connect();
    this.messages = [];

    // On récupère l'historique des messages précédents
    this.chat.requestAllMessages();
    this.chat.$allMessages
      .pipe(skip(1), first()) // On écoute la première et on se désabonne, on skip le premier element qui est le tableau vide
      .subscribe((messages: IMessage[]) => {
        this.messages = messages;
      });

    // On écoute les nouveaux messages
    this.chat.$newMessages
      .subscribe((message: any) => {
        this.messages.unshift(message);
      });
  }

  public onSendMessage(): void {
    this.chat.sendNewMessage(this.pseudo, this.message);
    this.message = '';
  }

  ngOnDestroy(): void {
    this.chat.close();
  }
}










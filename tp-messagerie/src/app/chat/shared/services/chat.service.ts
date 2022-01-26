import {Injectable} from '@angular/core';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from "../../../../environments/environment";

interface DataFromServer {
  type: 'error' | 'newMessage' | 'allMessages';
  datas: any;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private $socket!: WebSocketSubject<any>;
  public $allMessages!: BehaviorSubject<any[]>;
  public $newMessages!: BehaviorSubject<any[]>;
  public $error!: BehaviorSubject<any>;

  public connect(): void {
    if (this.$socket) {
      return;
    }

    this.$socket = webSocket('ws://serveur-demo.macademia.fr:8081');
    this.$allMessages = new BehaviorSubject<any>([]);
    this.$newMessages = new BehaviorSubject<any>([]);
    this.$error = new BehaviorSubject(null);

    this.$socket.subscribe((dataFromServer: DataFromServer) => {
      const type = dataFromServer.type;
      const datas = dataFromServer.datas;

      if (type === 'newMessage') {
        this.$newMessages.next(datas);
      } else if (type === 'allMessages') {
        this.$allMessages.next(datas);
      } else if (type === 'error') {
        this.$error.next(datas);
      }
    });
  }

  requestAllMessages() {
    this.$socket.next({type: 'getMessages'});
  }

  sendNewMessage(pseudo: string, content: string) {
    this.$socket.next({pseudo, content, type: 'sendMessage'});
  }

  close() {
    this.$socket.complete();
    this.$allMessages.complete();
    this.$newMessages.complete();
    this.$error.complete();
  }
}

import { Component, OnInit } from '@angular/core';
import {APIHelper} from './shared/providers/api-helper/api-helper.service';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [APIHelper]
})
export class AppComponent implements OnInit {

  wsConnection: WebSocketSubject<any> = webSocket('ws://serveur-demo.macademia.fr:8081');

  message: string = 'JPP'
  messages: string[] = [];
  constructor(private apiHelper: APIHelper) { }

  ngOnInit(): void {
    this.wsConnection.subscribe(
      dataFromServer => this.messages.concat(dataFromServer),
      (err) => console.error(err),
      () => console.log("Connexion fermée")
      );

  }

  envoyerMessage() {
    /**let datas = {
      content: this.message, pseudo: 'Florian Ohruh le vrai'
    };
    this.apiHelper.requestApi({action: '/', method: 'post', datas}).then();*/
    this.wsConnection.next({type:'sendMessage', content: this.message, pseudo: 'dup'});
    
  }

  recupererMessage() {
    this.wsConnection.next({type:'allMessages'});
    
  }
}

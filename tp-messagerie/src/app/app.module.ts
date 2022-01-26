import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ChatComponent} from './chat/chat.component';
import {AvatarComponent} from "./chat/shared/components/avatar/avatar.component";
import { AskPseudoComponent } from './ask-pseudo/ask-pseudo.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    AvatarComponent,
    AskPseudoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

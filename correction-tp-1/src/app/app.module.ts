import {TicketComponent} from './list-tickets/shared/components/ticket/ticket.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {ListTicketsComponent} from './list-tickets/list-tickets.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';


@NgModule({
    declarations: [
        AppComponent,
        ListTicketsComponent,
        TicketComponent,
        LoginComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(APP_ROUTES,{useHash: false})
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
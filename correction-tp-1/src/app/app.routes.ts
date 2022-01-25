import { ListTicketsComponent } from "./list-tickets/list-tickets.component";
import { LoginComponent } from "./login/login.component";

export const APP_ROUTES = [
    {
        component: LoginComponent,
        path: 'login'
    },
    {
        component: ListTicketsComponent,
        path: 'list_tickets'
    },
    {
        redirectTo:'/login',
        path: '**'
    },
];
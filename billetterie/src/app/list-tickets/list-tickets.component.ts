import { Component, OnInit } from '@angular/core';
import { ticketsFromFichier } from '../fichierTickets';

@Component({
  selector: 'app-list-tickets',
  templateUrl: './list-tickets.component.html',
  styleUrls: ['./list-tickets.component.css']
})
export class ListTicketsComponent implements OnInit {
  listTickets = ticketsFromFichier;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
  template: `<input type="text" [(ngModel)]="name">
          <div>
            Bonjour {{name}} ! Comment tu vas?
          </div>`
})
export class TicketComponent implements OnInit {

  //public titre: string;
  //public quantite: number;
  //public description: string;

  constructor() {
    }

  ngOnInit(): void {
  }

}
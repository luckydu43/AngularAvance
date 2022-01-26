import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-ask-pseudo',
  templateUrl: './ask-pseudo.component.html',
  styleUrls: ['./ask-pseudo.component.scss']
})
export class AskPseudoComponent implements OnInit {
  @Output() public choosePseudo = new EventEmitter<string>();
  public pseudo: string;

  constructor() {
  }

  ngOnInit(): void {
  }
}

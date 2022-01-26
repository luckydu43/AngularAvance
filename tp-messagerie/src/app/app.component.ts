import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public pseudo!: string;

  onChoosePseudo(str: string) {
    this.pseudo = str;
  }
}

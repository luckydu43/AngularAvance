import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'log-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  @Input() name!: string;
  @Input() reversed!: boolean;
  @Input() type = 'small';
  public displayLetters!: string;

  constructor() {
  }

  ngOnInit(): void {
    const strs = this.name.split(' ');
    if (strs.length > 1) {
      this.displayLetters = strs[0].slice(0, 1) + strs[1].slice(0, 1);
    } else {
      this.displayLetters = strs[0].slice(0, 2);
    }
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <p>
      input-button-unit works!
      The title is: {{ title }}
    </p>
  `,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title: string;
  constructor() {
    this.changeTitle('My First Angular App');
   }

  ngOnInit() {
  }

  changeTitle(newTitle: string) {
    this.title = newTitle;
  }

}

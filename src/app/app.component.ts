import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'starterCode';
  handlevent() {
    this.title = "text cliked"
  }

  show = false;
}

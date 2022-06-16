import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'starterCode';
  testProps = new FormControl('')
  handlevent() {
    this.title = "text cliked"
  }

  show = false;
}

import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, NgFor, NgIf, NgClass, NgStyle],
})
export class AppComponent {
  numbers = [1, 2, 3, 4, 5];
  onlyOdd = false;
  evenNumbers = [2, 4, 6, 8];
  oddNumbers = [1, 3, 5, 7, 9];
  selected = true;

  onChangeState() {
    this.selected = !this.selected;
    console.log(this.selected);
  }
}

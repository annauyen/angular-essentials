import { NgFor, NgIf } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementComponent {
  @Input({ required: true }) element!: {
    type: string;
    name: string;
    content: string;
  };
  // serverElements: { type: string; name: string; content: string }[] = [];
}

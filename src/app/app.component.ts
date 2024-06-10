import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServerElementComponent } from './server-element/server-element.component';
import { NgFor } from '@angular/common';
import { CockpitComponent } from './cockpit/cockpit.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, ServerElementComponent, NgFor, CockpitComponent],
})
export class AppComponent {
  serverElements = [
    { type: 'server', name: 'ohohoho', content: 'test' },
    { type: 'blueprint', name: 'ohohoho', content: 'test' },
  ];
  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }
  onBlueprintAdded(blueprintData: {
    blueprintName: string;
    blueprintContent: string;
  }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.blueprintName,
      content: blueprintData.blueprintContent,
    });
  }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cockpit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css',
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output() blueprintCreated = new EventEmitter<{
    blueprintName: string;
    blueprintContent: string;
  }>();
  newServerName = '';
  newServerContent = '';
  onAddBlueprint() {
    this.blueprintCreated.emit({
      blueprintName: this.newServerName,
      blueprintContent: this.newServerContent,
    });
  }
  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });
  }
}

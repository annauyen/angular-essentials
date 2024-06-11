import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { EditServerComponent } from './edit-server/edit-server.component';
import { ServerComponent } from './server/server.component';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-servers',
  standalone: true,
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
  imports: [EditServerComponent, ServerComponent, NgFor, RouterLink],
})
export class ServersComponent implements OnInit {
  public servers: { id: number; name: string; status: string }[] = [];

  constructor(private serversService: ServersService) {}

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }
}

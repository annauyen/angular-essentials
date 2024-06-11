import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { NgFor, NgIf } from '@angular/common';
import { Server } from '../server/server.model';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule],
  templateUrl: './edit-server.component.html',
  styleUrl: './edit-server.component.css',
})
export class EditServerComponent implements OnInit {
  server?: Server;
  serverName = '';
  serverStatus = '';
  allowEdit: boolean = false;

  // private serversService: ServersService
  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);

    this.route.queryParams.subscribe((queryParams: Params) => {
      this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
    });
    this.route.fragment.subscribe();
    this.server = this.serversService.getServer(1);
    this.serverName = this.server!.name;
    this.serverStatus = this.server!.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server!.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { Server } from './server.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  standalone: true,
  imports: [],
  templateUrl: './server.component.html',
  styleUrl: './server.component.css',
})
export class ServerComponent implements OnInit {
  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  server!: Server;

  ngOnInit() {
    const id = +this.route.snapshot.params['id']; // parsing string to number
    this.server = this.serversService.getServer(id)!;
    this.route.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(+params['id'])!;
    });
  }
  onEdit() {
    this.router.navigate(['edit'], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve',
    }); //queryparamshandling: keep the data when clicking
    //append the /edit to the current /servers/:id path
  }
}

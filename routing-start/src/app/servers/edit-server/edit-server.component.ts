import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CanServerEditDeactivate } from 'src/app/deactivate-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanServerEditDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  editable = false;
  isSaved = false;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.server = this.serversService.getServer(+params['id']);
          this.serverName = this.server.name;
          this.serverStatus = this.server.status;
        }
      );

    this.route.queryParams
      .subscribe(
        (queryParams: Params) => {
          this.editable = queryParams['editable'] === '1';
        }
      );
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.isSaved = true;
    this.router.navigate(['../'], { relativeTo: this.route, preserveQueryParams: true });
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.serverName === this.server.name && this.serverStatus === this.server.status) {
      return true;
    }

    if (!this.editable) {
      return true;
    }

    if (!this.isSaved) {
      return confirm('Do you want to leave this page with unsaved data?');
    }

    return true;
  }
}

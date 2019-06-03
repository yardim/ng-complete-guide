import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverCreationStatus = 'no server was created';
  allowNewServer = false;
  serverName = 'Test Server';
  isServerCreated = false;
  servers = ['Server 1', 'Server 2'];

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.servers.push(this.serverName);
    this.isServerCreated = true;
    this.serverCreationStatus = 'server created - ' + this.serverName;
  }
}

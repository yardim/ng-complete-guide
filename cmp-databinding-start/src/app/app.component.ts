import { Component } from '@angular/core';
import { ServerData } from './types/server-data.interface';
import { Server } from './types/server.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements: Server[] = [{
    type: 'server',
    name: 'test server',
    content: 'test content'
  }];

  onServerCreated(serverData: ServerData) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintCreated(serverData: ServerData) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }
}

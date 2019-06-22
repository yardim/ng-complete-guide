import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ServerData } from '../types/server-data.interface';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<ServerData>();
  @Output() blueprintCreated = new EventEmitter<ServerData>();
  @ViewChild('serverContentInput', { static: true })
  serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() { }

  onAddServer(newServerName: string) {
    this.serverCreated.emit({
      serverName: newServerName,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(newServerName: string) {
    this.blueprintCreated.emit({
      serverName: newServerName,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }
}

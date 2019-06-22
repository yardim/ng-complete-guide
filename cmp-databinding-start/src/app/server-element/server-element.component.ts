import { Component, OnInit, Input } from '@angular/core';
import { Server } from '../types/server.interface';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input() element: Server;

  constructor() { }

  ngOnInit() { }
}

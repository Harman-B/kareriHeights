import { Component, OnInit, EventEmitter } from '@angular/core';
import { Activity } from '../activity';

@Component({
  selector: 'activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css'],
  inputs: ['activities'],
  outputs: ['SelectActivity']
})
export class ActivityListComponent implements OnInit {
  
  public SelectActivity =  new EventEmitter();



  constructor() { }

  ngOnInit() {
  }

  onSelect(act: Activity){
    this.SelectActivity.emit(act);

  }

}

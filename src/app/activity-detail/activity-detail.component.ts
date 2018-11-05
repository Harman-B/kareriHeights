import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css'],
  inputs:['activity'],
  outputs: ['updateActivityEvent'],

})
export class ActivityDetailComponent implements OnInit {
  
  activity: any;
  private editTitle: boolean = false;
  private updateActivityEvent =  new EventEmitter();
  constructor() { }

  ngOnInit() {
    
  }
  

  ngOnChanges() {
    this.editTitle = false;
  }

  onTitleClick(){
    this.editTitle=true;
  }

  updateActivity(){
    this.updateActivityEvent.emit(this.activity);
  }


}

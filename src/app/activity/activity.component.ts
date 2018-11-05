import { Component, OnInit } from '@angular/core';
import { Activity } from '../activity';
import {ActivityService} from '../activity.service'
@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css'],
  providers: [ActivityService]
})
export class ActivityComponent implements OnInit {
  
  activities: Array<Activity>;
  
  selectedActivity: Activity;
  private hidenewActivity: boolean = true;

  constructor(private _activityService: ActivityService) { 


  }

  ngOnInit() {
    this._activityService.getActivities()
    .subscribe(Data => this.activities=Data); 

  }

  onSelectActivity(activity:any){
    this.selectedActivity =  activity;
    this.hidenewActivity = true;
    console.log(this.selectedActivity);
  }


  newActivity() {
    this.hidenewActivity = false;
  }
  
  onSubmitAddActivity(activity: Activity){
    this._activityService.addActivity(activity)
      .subscribe((Data : Activity) => {
        this.activities.push(Data);
        this.hidenewActivity = true;
        this.selectedActivity = Data;
      });
  }
  
  onUpdateActivityEvent(activity: any) {
    this._activityService.updateActivity(activity)
      .subscribe(Data => activity = Data);
    this.selectedActivity = null;
  };

}

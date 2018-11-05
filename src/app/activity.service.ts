import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Activity} from './activity';
@Injectable()
export class ActivityService {
  
  private _getUrl = "/api/activities";
  private _postUrl = "/api/activity";
  private _putUrl = "/api/activity";
  constructor(private _http:HttpClient) { }

  getActivities(): Observable<Activity[]> {
    return this._http.get<Activity[]>(this._getUrl);
}

addActivity(activity: Activity) {
  let options ={
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
return this._http.post(this._postUrl, JSON.stringify(activity), options);
    
}

updateActivity(activity: Activity) {
  let options ={
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
return this._http.post(this._putUrl+"/"+activity._id, JSON.stringify(activity), options);
    
}

}

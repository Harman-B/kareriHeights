import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ActivityComponent } from './activity/activity.component';
import { BookingorderComponent } from './bookingorder/bookingorder.component';
import { BookingunitComponent } from './bookingunit/bookingunit.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ActivityComponent,
    BookingorderComponent,
    BookingunitComponent,
    HomeComponent,
    ActivityListComponent,
    ActivityDetailComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

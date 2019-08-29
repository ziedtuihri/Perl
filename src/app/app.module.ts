import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { Component1Component } from './component1/component1.component';
import { RequiredComponent } from './required/required.component';
import { SampleComponent } from './sample/sample.component';
import { NameChildComponent } from './name-child/name-child.component';
import { NameParentComponent } from './name-parent/name-parent.component';
import { MyVoterComponent } from './my-voter/my-voter.component';
import { VoteTakerComponent } from './vote-taker/vote-taker.component';
import { PagerComponent } from './pager/pager.component';
import { DataComponent } from './data/data.component';
import { MissionComponent } from './mission/mission.component';
import { ChildmissionComponent } from './childmission/childmission.component';


@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    Component1Component,
    RequiredComponent,
    SampleComponent,
    NameChildComponent,
    NameParentComponent,
    MyVoterComponent,
    VoteTakerComponent,
    PagerComponent,
    DataComponent,
    MissionComponent,
    ChildmissionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

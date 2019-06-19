import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { ChartComponent } from './components/chart/chart.component';

import { APP_ROUTING } from './app.routing';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  entryComponents: [
    InfoComponent
  ],
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    HomeComponent,
    InfoComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    APP_ROUTING,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { CardComponent } from './card/card.component';
import { BarChartArrayDataComponent } from './bar-chart-array-data/bar-chart-array-data.component';

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    CardComponent,
    BarChartArrayDataComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

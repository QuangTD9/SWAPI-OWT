import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { VehiclesDetailComponent } from './components/vehicle-detail/vehicles-detail.component';
import { CustomFormatPipe } from './common/pipes/custom-format.pipe';
import { CustomDatePipe } from './common/pipes/custom-date.pipe';
import { CurrencyPipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    VehiclesComponent,
    VehiclesDetailComponent,
    CustomFormatPipe,
    CustomDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

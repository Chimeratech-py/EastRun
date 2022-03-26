import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './_components/home/home.component';
import { NavComponent } from './_components/nav/nav.component';
import { MatIconModule } from '@angular/material/icon';
import { CarCardComponent } from './_components/car-card/car-card.component';
import { CarListComponent } from './_components/car-list/car-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    CarCardComponent,
    CarListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

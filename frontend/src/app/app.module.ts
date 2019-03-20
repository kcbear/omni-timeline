import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataVisualComponent } from './data-visual/data-visual.component';

// self added module:
import { HttpClientModule } from '@angular/common/http';

// end self added module

@NgModule({
  declarations: [
    AppComponent,
    DataVisualComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

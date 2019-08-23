import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { CheckboxMcqModule } from 'checkbox-mcq';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CheckboxMcqModule,
    FlexLayoutModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

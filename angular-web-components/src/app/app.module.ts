import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConnectAccountButtonModule } from './connect-account-button.module'
import { DeviceTableModule } from './device-table.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ConnectAccountButtonModule,
    DeviceTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

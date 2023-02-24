import { DropDownTreeModule } from '@syncfusion/ej2-angular-dropdowns';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '../app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DropDownTreeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

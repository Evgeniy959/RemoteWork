import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CountPipe } from './pipes/count.pipe';
import { StringSortPipe } from './pipes/string-sort.pipe';
import { GenderIconPipe } from './pipes/gender-icon.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CountPipe,
    StringSortPipe,
    GenderIconPipe
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

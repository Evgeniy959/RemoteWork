import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LinkDirective } from './link.directive';
import { LangclsDirective } from './langcls.directive';
import { LangDirective } from './lang.directive';

@NgModule({
  declarations: [
    AppComponent,
    LinkDirective,
    LangclsDirective,
    LangDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

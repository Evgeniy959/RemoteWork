import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LangService } from './lang.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {//implements OnInit {
  //  ngOnInit(): void {
  //    setTimeout(() => {
  //     this.json = 'Hello , from json';
  //    }, 2000);
  //  }
  // title = 'Directives';


  //  show:boolean = true;
  //  json:string = '';



  // constructor(private cookieServices:CookieService) {
  // }
  // ngOnInit(): void {
  //      if (this.cookieServices.check('lang')) {
  //          this.currentLang = this.cookieServices.get('lang');
  //      }
  // }




  currentLang : string = 'en';

  constructor(private langService:LangService){}

  onChangeLanguage(lang:string):void{
    this.langService.currentlang=lang;
     //    window.document.cookie
  //   this.cookieServices.set("lang",lang);
  }






}

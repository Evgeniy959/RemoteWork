import { EventEmitter, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root',
})
export class LangService {
  private _currentLang: string = 'en';
  public changed:EventEmitter<string> = new EventEmitter<string>();

  constructor(private cookieServices: CookieService) {
    if (this.cookieServices.check('lang')) {
      this._currentLang = this.cookieServices.get('lang');
    }
  }

  set currentlang(lang: string) {
    this._currentLang = lang;
    this.cookieServices.set('lang', lang);
    this.changed.emit(lang);
  }

  get currentlang() {
    return this._currentLang;
  }
}

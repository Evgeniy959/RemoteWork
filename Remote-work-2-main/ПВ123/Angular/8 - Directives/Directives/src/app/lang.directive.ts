import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LangService } from './lang.service';

@Directive({
  selector: '[appLang]',
})
export class LangDirective implements OnInit {
  @Input('appLang') lang: string = '';

  constructor(
    // private element: ElementRef,
    private langService: LangService,
    private template: TemplateRef<any>,
    private container: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.render();
    this.langService.changed.subscribe(x=>this.render());

  }


  private render(){
    this.container.clear();
    if (this.langService.currentlang == this.lang) {
      this.container.createEmbeddedView(this.template);
    }
  }
}

import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appLink]',
})
export class LinkDirective implements OnInit {
  constructor(public element: ElementRef) {}

  @Input('appLink') color:string = 'red';
  originText:string = '';

  ngOnInit(): void {
    console.log('Loaded!');
    this.originText = this.element.nativeElement.innerText;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    console.log('Mouse enter');
    this.element.nativeElement.style = `background:${this.color}`;
    let href = this.element.nativeElement.href;
    this.element.nativeElement.innerText = href;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    console.log('Mouse leave');
    this.element.nativeElement.style = `background:none`;
    this.element.nativeElement.innerText = this.originText;
  }
}

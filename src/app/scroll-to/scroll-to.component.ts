import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component( {
  selector: 'app-scroll-to',
  template: `
  <div class="scrollLinkContainer" [ngClass]="style" (click)="scrollTo()">
    <p class="button">{{ linkText }}</p>
  </div>
  `,
  styleUrls: ['./scroll-to.component.scss']
} )
export class ScrollToComponent implements OnInit {
  @Input()
  linkText: string;
  @Input()
  scrollToClass: string;
  @Input()
  style: string;
  @Output()
  scroll: EventEmitter<string>;

  constructor() {
    this.scroll = new EventEmitter();
  }

  ngOnInit () { }

  scrollTo (): void {
    const elementList = document.querySelectorAll( '.' + this.scrollToClass );
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView( { behavior: 'smooth' } );
    this.scroll.emit( 'scrolled to: ' + this.scrollToClass );
  }
}
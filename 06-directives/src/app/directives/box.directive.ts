import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBox]',
})
export class BoxDirective implements AfterViewInit {
  constructor(private element: ElementRef) {}

  ngAfterViewInit(): void {
    this.element.nativeElement.style.border = '1px solid black';
  }
}

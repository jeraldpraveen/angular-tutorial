import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appBox]',
})
export class BoxDirective implements AfterViewInit {
  @Input()
  size = '1px';
  type = 'solid';

  @Input()
  color = 'red';

  constructor(private element: ElementRef) {}

  ngAfterViewInit(): void {
    this.element.nativeElement.style.border = `${this.size} ${this.type} ${this.color}`;
  }
}

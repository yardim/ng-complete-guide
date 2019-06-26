import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') openClass = false;

  constructor(private elementRef: ElementRef) { }

  @HostListener('document:click', ['$event']) switchClass(event: MouseEvent) {
    this.openClass = (this.elementRef.nativeElement as HTMLElement).contains(event.target as Node)
      ? !this.openClass
      : false;
  }
}

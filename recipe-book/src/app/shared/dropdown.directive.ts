import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('click') switchClass() {
    const className = 'open';
    const el: HTMLElement = this.elementRef.nativeElement;

    if (!el.classList.contains(className)) {
      this.renderer.addClass(el, className);
    } else {
      this.renderer.removeClass(el, className);
    }
  }
}

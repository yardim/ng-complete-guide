import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
  ) { }

  ngOnInit(): void { }

  @HostListener('mouseenter') mouseEnter() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'cyan');
    this.backgroundColor = 'cyan';
  }

  @HostListener('mouseleave') mouseLeave() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = 'transparent';
  }
}

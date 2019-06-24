import { Directive, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @Input() defaultColor = 'transparent';
  @Input('appBetterHighlight') highlightColor: string;

  constructor() { }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    this.highlightColor = this.highlightColor
      ? this.highlightColor
      : 'cyan';
  }

  @HostListener('mouseenter') mouseEnter() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave() {
    this.backgroundColor = this.defaultColor;
  }
}

import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appFocusOn]",
})
export class FocusOnDirective {
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) {}
  ngAfterViewInit() {
    this.elementRef.nativeElement.focus();
  }
}

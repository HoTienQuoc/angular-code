import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[appHoverLighlight]",
})
export class HoverLighlightDirective {
  @Input() highlightColor: string = "yellow";
  @Input() defaultColor: string = "transparent";

  //elementRef: give access to the DOM element this directive is attached to
  //renderer: modify DOM properties and style
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) {}
  private setBackgroundColor(color: string) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      "background-color",
      color,
    );
  }
  @HostListener("mouseenter") onMouseEnter() {
    this.setBackgroundColor(this.highlightColor);
  }
  @HostListener("mouseleave") onMouseLeave() {
    this.setBackgroundColor(this.defaultColor);
  }
}

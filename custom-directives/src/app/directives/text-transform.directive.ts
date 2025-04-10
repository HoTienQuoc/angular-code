import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appTextTransform]",
})
export class TextTransformDirective {
  @Input() transformType: "uppercase" | "lowercase" = "uppercase";

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) {}
  private setTransformText(text: string) {
    if (this.transformType === "uppercase") {
      this.renderer.setProperty(
        this.elementRef.nativeElement,
        "innerText",
        text.toUpperCase(),
      );
    } else {
      this.renderer.setProperty(
        this.elementRef.nativeElement,
        "innerText",
        text.toLowerCase(),
      );
    }
  }
  ngOnInit() {
    this.setTransformText(this.elementRef.nativeElement.innerText);
  }
}

import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appClickOutside]",
})
export class ClickOutsideDirective {
  constructor(private elementRef: ElementRef) {}
  @HostListener("document:click", ["$event"])
  onClick(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      // Handle click outside logic here
      console.log("Clicked outside");
    } else {
      console.log("Clicked inside");
    }
  }
}

import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[myStyles]'
})
export class MyStylesDirective {

  @Input() fontSize: string;

  constructor(private elRef: ElementRef) {
    elRef.nativeElement.style.color = 'red';
    elRef.nativeElement.style.backgroundColor = 'yellow';
    elRef.nativeElement.fontSize = '30px';

   }

   // tslint:disable-next-line: use-lifecycle-interface
   ngAfterViewInit(): void {
     // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
     // Add 'implements AfterViewInit' to the class.
     this.elRef.nativeElement.style.fontSize = this.fontSize;
   }

   @HostListener('mouseenter') onMouseEnter() {
     this.elRef.nativeElement.style.backgroundColor = 'blue';
   }

   @HostListener('mouseleave') onMouseLeave() {
    this.elRef.nativeElement.style.backgroundColor = 'green';
  }

}

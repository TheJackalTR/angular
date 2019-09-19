import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[myIf]'
})
export class MyIfDirective {

  constructor(private templateRef: TemplateRef<any>, private container: ViewContainerRef) { }

  @Input()
  set myIf(condition: boolean) {
    if (condition) {
      this.container.createEmbeddedView(this.templateRef);
    } else {
      this.container.clear();
    }
  }
}

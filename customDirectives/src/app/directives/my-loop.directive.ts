import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[MyLoop]'
})
export class MyLoopDirective {

  constructor(private templateRef: TemplateRef<any>, private container: ViewContainerRef) { }

  @Input('MyLoop') set myCustomLoop(num: number) {
    for (let i = 0; i < num; i++) {
      this.container.createEmbeddedView(this.templateRef);
    }
  }

}

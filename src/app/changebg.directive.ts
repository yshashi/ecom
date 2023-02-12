import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[changeBg]'
})
export class ChangeBgDirective {

  constructor(private el: ElementRef) {
    console.log(this.el.nativeElement);
    this.el.nativeElement.style.color = "red"
  }

}

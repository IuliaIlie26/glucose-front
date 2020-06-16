import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[numbersOnly]'
})
export class NumbersOnlyDirective {
    el: ElementRef;

    constructor(el: ElementRef) {
        el.nativeElement.oninput = evt => {
            el.nativeElement.value = el.nativeElement.value.replace(/[^0-9]/g, '');
        }
    }
}
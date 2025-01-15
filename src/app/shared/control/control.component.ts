import {
  AfterViewInit,
  Component,
  contentChild,
  ElementRef,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
  },
})
export class ControlComponent {
  private controlElement =
    contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>(
      'input'
    );
  label = input.required<string>();

  onclick() {
    console.log(this.controlElement);
  }
}

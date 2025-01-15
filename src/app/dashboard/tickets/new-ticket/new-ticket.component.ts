import {
  AfterViewInit,
  Component,
  ElementRef,
  output,
  viewChild,
  ViewChild,
} from '@angular/core';
import { ControlComponent } from '../../../shared/control/control.component';
import { ButtonComponent } from '../../../shared/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, ButtonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements AfterViewInit {
  /*   @ViewChild('formElement') formElement?: ElementRef<HTMLFormElement>; // */

  add = output<{ title: string; text: string }>();

  private formElement =
    viewChild.required<ElementRef<HTMLFormElement>>('formElement');

  ngAfterViewInit() {
    console.log(this.formElement().nativeElement);
  }

  onSubmit(title: string, description: string) {
    console.log(title);
    console.log(description);
    this.add.emit({ title: title, text: description });

    this.formElement()?.nativeElement.reset(); // resetta i valori del form
  }
}

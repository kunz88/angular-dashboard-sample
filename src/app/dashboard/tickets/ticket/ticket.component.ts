import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../../../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  ticket = input.required<Ticket>();
  detailsVisible = signal(false);
  close = output();

  onToogleDetails() {
    this.detailsVisible.update((oldValue) => !oldValue);
  }

  onMarkAsComplited() {
    this.close.emit();
  }
}

import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket } from '../../ticket.model';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  onAdd({ title, text }: { title: string; text: string }) {
    this.tickets.push({
      title: title,
      request: text,
      status: 'open',
      id: this.tickets.length + 1 + '',
    });
  }

  onClose(id: string) {
    this.tickets = this.tickets.map((ticket) => {
      if (ticket.id === id) {
        ticket.status = 'closed';
      }
      return ticket;
    });
  }
}

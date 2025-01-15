import {
  Component,
  DestroyRef,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
// Implementare una interfaccia in un componente obbliga ad utilizzarne i metodi
export class ServerStatusComponent implements OnInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');
  /*   private interval?: ReturnType<typeof setInterval>; */
  private destroyRef = inject(DestroyRef);

  constructor() {}

  ngOnInit() {
    // funzione che viene eseguita al caricamento del componente
    const interval = setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000); // ogni 5 secondi eseguo una funzione

    // nuovo metodo di instanziare una funzione di clean up
    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }

  /*   ngOnDestroy() {
    // cleanup function
    // funzione che viene eseguita al distruggimento del componente
    // per evitare memory leak eliminiamo l'intervallo
    clearInterval(this.interval);
  } */
}

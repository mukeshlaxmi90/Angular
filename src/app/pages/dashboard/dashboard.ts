
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  selectedPeriod = 'Monthly';

  setPeriod(event: Event): void {
    this.selectedPeriod = (event.target as HTMLSelectElement).value;
  }
}

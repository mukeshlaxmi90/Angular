import { Component, EventEmitter, Output,Input } from '@angular/core';

@Component({
  selector: 'app-heder',
  standalone: true,
  imports: [],
  templateUrl: './heder.html',
  styleUrl: './heder.css'
})
export class Header {
  
 @Input() isCollapsed = false;

  @Output() menuToggle = new EventEmitter<void>();

  toggleMenu(): void {
    this.menuToggle.emit();
  }
}

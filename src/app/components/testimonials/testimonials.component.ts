import { Component, inject } from '@angular/core';
import { AppStateService } from '../../services/app-state.service';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  protected appState = inject(AppStateService);
}

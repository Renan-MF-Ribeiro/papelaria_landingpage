import { Component, inject } from '@angular/core';
import { AppStateService } from '../../services/app-state.service';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
})
export class FeaturesComponent {
  protected appState = inject(AppStateService);
}

import { Component, inject } from '@angular/core';
import { AppStateService } from '../../services/app-state.service';

@Component({
  selector: 'app-shopee-cta',
  standalone: true,
  imports: [],
  templateUrl: './shopee-cta.component.html',
  styleUrl: './shopee-cta.component.scss',
})
export class ShopeeCTAComponent {
  protected appState = inject(AppStateService);
}

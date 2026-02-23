import { Component, inject } from '@angular/core';
import { AppStateService } from '../../services/app-state.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent {
  protected appState = inject(AppStateService);
}

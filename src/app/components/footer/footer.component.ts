import { Component, inject } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { AppStateService } from '../../services/app-state.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [DividerModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  protected appState = inject(AppStateService);
}

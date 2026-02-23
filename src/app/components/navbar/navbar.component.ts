import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { AppStateService } from '../../services/app-state.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  protected appState = inject(AppStateService);
}

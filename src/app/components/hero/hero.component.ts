import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { AppStateService } from '../../services/app-state.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ButtonModule, TagModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  protected appState = inject(AppStateService);

  // Seleciona uma imagem aleatória do gallery
  protected randomImage =
    this.appState.galleryItems()[Math.floor(Math.random() * this.appState.galleryItems().length)];
}

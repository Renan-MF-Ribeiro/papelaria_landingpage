import { Component, inject } from '@angular/core';
import { TagModule } from 'primeng/tag';
import { AppStateService } from '../../services/app-state.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [TagModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  protected appState = inject(AppStateService);
}

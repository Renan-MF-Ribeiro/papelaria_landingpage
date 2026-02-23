import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesComponent } from './components/features/features.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ShopeeCTAComponent } from './components/shopee-cta/shopee-cta.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    FeaturesComponent,
    CategoriesComponent,
    GalleryComponent,
    ShopeeCTAComponent,
    TestimonialsComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}

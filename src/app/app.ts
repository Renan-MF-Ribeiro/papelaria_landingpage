import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { TagModule } from 'primeng/tag';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonModule, CardModule, RatingModule, FormsModule, AvatarModule, TagModule, DividerModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  readonly shopeeUrl = 'https://shopee.com.br';

  readonly features = [
    { icon: 'pi pi-star-fill', title: 'Qualidade Premium', description: 'Selecionamos os melhores produtos de papelaria para você.' },
    { icon: 'pi pi-truck', title: 'Entrega Rápida', description: 'Receba seus pedidos em casa com agilidade e segurança.' },
    { icon: 'pi pi-palette', title: 'Design Exclusivo', description: 'Produtos criativos e personalizados para expressar sua personalidade.' },
    { icon: 'pi pi-heart-fill', title: 'Feito com Amor', description: 'Cada produto é escolhido com carinho para inspirar o seu dia.' },
  ];

  readonly categories = [
    { icon: '📓', name: 'Cadernos', description: 'Cadernos pautados, pontilhados e personalizados', bg: '#fde68a' },
    { icon: '✏️', name: 'Canetas & Lápis', description: 'Canetas coloridas, marcadores e lápis de qualidade', bg: '#bbf7d0' },
    { icon: '📅', name: 'Agendas', description: 'Agendas semanais, mensais e bullet journal', bg: '#bfdbfe' },
    { icon: '🎨', name: 'Arte & Craft', description: 'Materiais para desenho, aquarela e scrapbook', bg: '#fecaca' },
    { icon: '🖇️', name: 'Organização', description: 'Clips, fichários, pastas e acessórios', bg: '#e9d5ff' },
    { icon: '🎁', name: 'Kits Presente', description: 'Kits especiais para presentear com estilo', bg: '#fed7aa' },
  ];

  readonly testimonials = [
    { name: 'Ana Lima', role: 'Estudante', rating: 5, text: 'Amei os cadernos! São lindos, de ótima qualidade e chegaram super rápido. Já virei cliente fiel!', avatar: 'AL' },
    { name: 'Carlos Mendes', role: 'Designer', rating: 5, text: 'Os materiais de arte são incríveis. Encontrei tudo que precisava para meu estúdio em um só lugar.', avatar: 'CM' },
    { name: 'Juliana Costa', role: 'Professora', rating: 5, text: 'Comprei agendas para toda a equipe da escola. Todos adoraram! Recomendo demais.', avatar: 'JC' },
  ];

  readonly ratingValues = [5, 5, 5];
}

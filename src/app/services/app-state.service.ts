import { Injectable, signal } from '@angular/core';

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Category {
  icon: string;
  name: string;
  description: string;
  bg: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  rating: number;
  text: string;
  avatar: string;
}

@Injectable({
  providedIn: 'root',
})
export class AppStateService {
  // Signals para controlar o estado da aplicação
  shopeeUrl = signal('https://br.shp.ee/aNBShNb');

  features = signal<Feature[]>([
    {
      icon: 'pi pi-star-fill',
      title: 'Qualidade Premium',
      description: 'Selecionamos os melhores produtos de papelaria para você.',
    },
    {
      icon: 'pi pi-truck',
      title: 'Entrega Rápida',
      description: 'Receba seus pedidos em casa com agilidade e segurança.',
    },
    {
      icon: 'pi pi-palette',
      title: 'Design Exclusivo',
      description: 'Produtos criativos e personalizados para expressar sua personalidade.',
    },
    {
      icon: 'pi pi-heart-fill',
      title: 'Feito com Amor',
      description: 'Cada produto é escolhido com carinho para inspirar o seu dia.',
    },
  ]);

  categories = signal<Category[]>([
    {
      icon: '📓',
      name: 'Cadernos',
      description: 'Cadernos pautados, pontilhados e personalizados',
      bg: '#fde68a',
    },
    {
      icon: '✏️',
      name: 'Canetas & Lápis',
      description: 'Canetas coloridas, marcadores e lápis de qualidade',
      bg: '#bbf7d0',
    },
    {
      icon: '📅',
      name: 'Agendas',
      description: 'Agendas semanais, mensais e bullet journal',
      bg: '#bfdbfe',
    },
    {
      icon: '🎨',
      name: 'Arte & Craft',
      description: 'Materiais para desenho, aquarela e scrapbook',
      bg: '#fecaca',
    },
    {
      icon: '🖇️',
      name: 'Organização',
      description: 'Clips, fichários, pastas e acessórios',
      bg: '#e9d5ff',
    },
    {
      icon: '🎁',
      name: 'Kits Presente',
      description: 'Kits especiais para presentear com estilo',
      bg: '#fed7aa',
    },
  ]);

  galleryItems = signal<GalleryItem[]>([
    {
      src: 'images/agenda_escolar.jpeg',
      alt: 'Agenda Escolar',
      title: 'Agenda Escolar',
      description:
        'Agenda escolar com layout organizado, espaço para anotar tarefas e compromissos diários',
    },
    {
      src: 'images/agendas.jpeg',
      alt: 'Agendas',
      title: 'Agendas',
      description: 'Organize seu tempo com beleza e praticidade',
    },
    {
      src: 'images/caderno_personalizado.jpeg',
      alt: 'Caderno Personalizado',
      title: 'Caderno Personalizado',
      description: 'Cadernos personalizados para acompanhamento e organização',
    },
    {
      src: 'images/caneca_dia_das_maes.png',
      alt: 'Caneca Dia das Mães',
      title: 'Caneca Dia das Mães',
      description: 'Caneca especial para presentear no Dia das Mães',
    },
    {
      src: 'images/caneca_dia_dos_pais.png',
      alt: 'Caneca Dia dos Pais',
      title: 'Caneca Dia dos Pais',
      description: 'Caneca especial para presentear no Dia dos Pais',
    },
    {
      src: 'images/caneca_dia_dos_namorados.png',
      alt: 'Caneca Dia dos Namorados',
      title: 'Caneca Dia dos Namorados',
      description: 'Caneca especial para presentear no Dia dos Namorados',
    },
    {
      src: 'images/kit_dia_das_maes.png',
      alt: 'Kits Presente',
      title: 'Kits Presente',
      description: 'O presente perfeito para surpreender quem você ama',
    },
    {
      src: 'images/caneca_natal.png',
      alt: 'Caneca Natal',
      title: 'Caneca Natal',
      description: 'Caneca especial para presentear no Natal',
    },
    {
      src: 'images/canetas.png',
      alt: 'Canetas & Lápis',
      title: 'Canetas & Lápis',
      description: 'Variedade de cores e tipos para toda criação',
    },
    {
      src: 'images/caneta_natal.png',
      alt: 'Caneta Natal',
      title: 'Caneta Natal',
      description: 'Caneta especial para presentear no Natal',
    },
    {
      src: 'images/chinelo.png',
      alt: 'Chinelo',
      title: 'Chinelo',
      description: 'Chinelos confortáveis e estilosos para o dia a dia',
    },
    {
      src: 'images/kit_chinelo.png',
      alt: 'Chinelos personalizados',
      title: 'Chinelos personalizados',
      description: 'Personalize seus chinelos para um toque único e divertido',
    },
  ]);

  testimonials = signal<Testimonial[]>([
    {
      name: 'Ana Lima',
      role: 'Estudante',
      rating: 5,
      text: 'Amei os cadernos! São lindos, de ótima qualidade e chegaram super rápido. Já virei cliente fiel!',
      avatar: 'AL',
    },
    {
      name: 'Carlos Mendes',
      role: 'Designer',
      rating: 5,
      text: 'Os materiais de arte são incríveis. Encontrei tudo que precisava para meu estúdio em um só lugar.',
      avatar: 'CM',
    },
    {
      name: 'Juliana Costa',
      role: 'Professora',
      rating: 5,
      text: 'Comprei agendas para toda a equipe da escola. Todos adoraram! Recomendo demais.',
      avatar: 'JC',
    },
  ]);
}

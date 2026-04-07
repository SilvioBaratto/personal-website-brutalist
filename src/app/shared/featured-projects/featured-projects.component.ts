import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-featured-projects',
  templateUrl: './featured-projects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturedProjectsComponent {
  projects = [
    {
      title: 'Optimizer',
      description: 'Quantitative portfolio construction platform built on skfolio and scikit-learn. Features 13 optimization models, HMM regime blending, walk-forward cross-validation, and vine copula scenario generation. Angular 21 dashboard with FastAPI backend and PyPI package (portopt). Live at optimizer.silviobaratto.com.',
      tags: ['Angular 21', 'FastAPI', 'skfolio', 'PostgreSQL', 'PyPI', 'Quant Finance', 'Production'],
      link: 'https://optimizer.silviobaratto.com',
      featured: true,
    },
    {
      title: 'Dietologo AI',
      description: 'Production AI-powered diet generator with weekly meal plans (35 meals/week), AI recipe generation, and smart shopping lists. Live at diet.silviobaratto.com with Google authentication and subscription system. Complete full-stack solution with Docker deployment.',
      tags: ['Angular 19', 'FastAPI', 'BAML', 'OpenAI', 'Supabase', 'Docker', 'Production'],
      link: 'https://diet.silviobaratto.com',
      featured: true,
    },
    {
      title: 'ITAL-IA',
      description: 'AI chatbot for Italian regions with scraped knowledge base and real-time SSE streaming. Per-region knowledge, RAG pipeline with Qdrant vector search, and conversational AI powered by GPT-5 Mini. Live at italia.silviobaratto.com.',
      tags: ['NestJS 11', 'Angular 21', 'Supabase', 'Qdrant', 'BAML', 'GPT-5 Mini', 'RAG'],
      link: 'https://italia.silviobaratto.com',
      featured: true,
    },
  ];
}

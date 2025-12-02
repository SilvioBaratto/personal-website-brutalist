import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-featured-projects',
  templateUrl: './featured-projects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturedProjectsComponent {
  projects = [
    {
      title: 'Roldan Hedge Fund',
      description: 'Quantitative portfolio optimization platform combining AI-powered stock analysis (6-factor evaluation) with multi-strategy optimization. Implements Mean-Variance, Black-Litterman with AI views, Risk Parity, HRP, and CVaR optimization. Features macro regime analysis and institutional-grade constraints.',
      tags: ['FastAPI', 'BAML', 'Riskfolio-Lib', 'SQLAlchemy', 'Supabase', 'Quant Finance'],
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
      title: 'Pokemon Text-to-Image Generator',
      description: 'Advanced Conditional VAE generating 64×64 Pokemon images from text using dual conditioning: CLIP ViT-L/14 (768-dim) + categorical attributes (type, color, shape). Features BAML metadata pipeline with OpenAI vision, LPIPS perceptual loss, and 17.8M parameters. Production-ready with FastAPI + Angular frontend.',
      tags: ['PyTorch', 'CLIP', 'BAML', 'OpenAI Vision', 'FastAPI', 'Angular', 'Generative AI'],
      link: 'https://github.com/SilvioBaratto/text_to_pokemon',
      featured: true,
    },
  ];
}

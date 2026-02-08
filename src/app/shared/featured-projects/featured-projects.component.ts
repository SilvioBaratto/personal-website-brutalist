import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-featured-projects',
  templateUrl: './featured-projects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturedProjectsComponent {
  projects = [
    {
      title: 'Dietologo AI',
      description: 'Production AI-powered diet generator with weekly meal plans (35 meals/week), AI recipe generation, and smart shopping lists. Live at diet.silviobaratto.com with Google authentication and subscription system. Complete full-stack solution with Docker deployment.',
      tags: ['Angular 19', 'FastAPI', 'BAML', 'OpenAI', 'Supabase', 'Docker', 'Production'],
      link: 'https://diet.silviobaratto.com',
      featured: true,
    },
    {
      title: 'ClipCraft',
      description: 'AI-powered content generation platform for TikTok scripts, carousel posts, and animated social media content. Full-stack application with modular API and frontend, Docker Compose deployment, and GitHub Actions CI/CD.',
      tags: ['TypeScript', 'Angular', 'Docker', 'AI Content Generation', 'Social Media'],
      link: 'https://github.com/SilvioBaratto/clipcraft',
      featured: true,
    },
    {
      title: 'LocalRAG',
      description: 'Privacy-focused RAG system running entirely locally. Supports PDF, Word, PowerPoint, Excel, Markdown, and HTML files. Features semantic chunking, interactive CLI with model selection, dual modes (direct chat or document-augmented), and streaming pipeline for memory optimization.',
      tags: ['Ollama', 'Qdrant', 'Python', 'RAG', 'Privacy-First', 'Docker'],
      link: 'https://github.com/SilvioBaratto/localrag',
      featured: true,
    },
  ];
}

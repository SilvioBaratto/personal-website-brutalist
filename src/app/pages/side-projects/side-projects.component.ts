import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  highlighted?: boolean;
}

@Component({
  selector: 'app-side-projects',
  template: `
    <app-header />
    <main class="pt-16 sm:pt-20 bg-white min-h-screen">
      <!-- Brutalist grid background - Purple -->
      <div class="fixed inset-0 pointer-events-none opacity-[0.02]" style="background-image: linear-gradient(#9723C9 1px, transparent 1px), linear-gradient(90deg, #9723C9 1px, transparent 1px); background-size: 20px 20px;"></div>

      <!-- Hero Section -->
      <section class="relative py-12 sm:py-16 lg:py-20 border-b-4 border-black">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div class="max-w-4xl">
            <!-- Label - Yellow -->
            <div class="inline-block border-2 border-black bg-[#F4D738] px-3 py-1 mb-6">
              <span class="font-mono text-xs sm:text-sm uppercase tracking-widest font-bold">Portfolio</span>
            </div>

            <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black uppercase tracking-tight mb-6 leading-[0.9]">
              <span class="bg-[#FF6B6B] text-white px-2">Side</span><br class="hidden sm:block" />
              <span class="sm:ml-8 lg:ml-16">Projects</span>
            </h1>

            <p class="font-mono text-base sm:text-lg text-black leading-relaxed max-w-2xl border-l-4 border-[#9723C9] pl-4 text-justify">
              Innovative AI solutions from research to production. Exploring the intersection of machine learning,
              finance, and practical applications.
            </p>
          </div>
        </div>
      </section>

      <!-- Projects Grid Section -->
      <section class="relative py-12 sm:py-16 lg:py-20 border-b-4 border-black">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <!-- Section header - Red accent -->
          <div class="flex items-center gap-4 mb-10 sm:mb-12">
            <div class="w-12 sm:w-16 h-1 bg-[#FF6B6B]"></div>
            <span class="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#FF6B6B] font-bold">{{ projects.length }} Projects</span>
          </div>

          <div class="space-y-6 sm:space-y-8">
            @for (project of projects; track project.title; let i = $index) {
              <article
                class="group border-4 border-black transition-colors duration-150"
                [class.bg-[#F4D738]]="project.highlighted"
                [class.hover:bg-[#9723C9]]="project.highlighted"
                [class.hover:text-white]="project.highlighted"
                [class.hover:bg-black]="!project.highlighted"
                [class.hover:text-white]="!project.highlighted"
              >
                <div class="flex flex-col lg:flex-row">
                  <!-- Project number -->
                  <div
                    class="lg:w-24 xl:w-32 p-4 sm:p-6 border-b-4 lg:border-b-0 lg:border-r-4 flex items-center justify-center lg:justify-start border-black"
                    [class.group-hover:border-white]="project.highlighted"
                    [class.group-hover:border-white]="!project.highlighted"
                  >
                    <span
                      class="font-mono text-4xl sm:text-5xl lg:text-6xl font-black"
                      [class.text-[#9723C9]]="project.highlighted"
                      [class.opacity-60]="project.highlighted"
                      [class.group-hover:text-white]="project.highlighted"
                      [class.group-hover:opacity-100]="project.highlighted"
                      [class.opacity-30]="!project.highlighted"
                      [class.group-hover:opacity-50]="!project.highlighted"
                    >
                      {{ (i + 1).toString().padStart(2, '0') }}
                    </span>
                  </div>

                  <!-- Project content -->
                  <div class="flex-1 p-6 sm:p-8">
                    <!-- Highlighted badge - Red -->
                    @if (project.highlighted) {
                      <div class="inline-block border-2 border-black group-hover:border-white bg-[#FF6B6B] text-white px-2 py-0.5 mb-4">
                        <span class="font-mono text-xs uppercase tracking-widest font-bold">Featured</span>
                      </div>
                    }

                    <!-- Project Title -->
                    <h2
                      class="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight mb-4"
                      [class.group-hover:text-white]="project.highlighted"
                    >
                      {{ project.title }}
                    </h2>

                    <!-- Project Description -->
                    <p
                      class="font-mono text-sm sm:text-base leading-relaxed mb-6 max-w-3xl text-justify"
                      [class.group-hover:text-white]="project.highlighted"
                    >
                      {{ project.description }}
                    </p>

                    <!-- Tags with colors -->
                    <div class="flex flex-wrap gap-2 mb-6">
                      @for (tag of project.tags; track tag; let j = $index) {
                        <span
                          class="font-mono text-xs px-3 py-1 border-2 uppercase tracking-wider font-semibold"
                          [class.border-black]="project.highlighted"
                          [class.group-hover:border-white]="project.highlighted"
                          [class.bg-[#9723C9]]="project.highlighted && j % 3 === 0"
                          [class.text-white]="project.highlighted && j % 3 === 0"
                          [class.bg-[#7FBC8C]]="project.highlighted && j % 3 === 1"
                          [class.bg-white]="project.highlighted && j % 3 === 2"
                          [class.border-current]="!project.highlighted"
                        >
                          {{ tag }}
                        </span>
                      }
                    </div>

                    <!-- View Project Link -->
                    @if (project.link) {
                      <a
                        [href]="project.link"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-wider border-b-2 pb-1 hover:pb-2 transition-all"
                        [class.border-[#9723C9]]="project.highlighted"
                        [class.group-hover:border-white]="project.highlighted"
                        [class.border-current]="!project.highlighted"
                      >
                        <span>View Project</span>
                        <span>&rarr;</span>
                        <span class="sr-only"> (opens in new tab)</span>
                      </a>
                    } @else {
                      <span class="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider opacity-50">
                        <span>[Private]</span>
                      </span>
                    }
                  </div>
                </div>
              </article>
            }
          </div>
        </div>
      </section>

      <!-- CTA Section - Purple background -->
      <section class="relative py-12 sm:py-16 lg:py-20">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div class="border-4 border-black bg-[#9723C9] text-white p-8 sm:p-12 lg:p-16">
            <!-- Top bar decoration - Colored dots -->
            <div class="flex items-center gap-3 mb-8">
              <div class="w-3 h-3 bg-[#FF6B6B]"></div>
              <div class="w-3 h-3 bg-[#F4D738]"></div>
              <div class="w-3 h-3 bg-[#7FBC8C]"></div>
            </div>

            <h2 class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black uppercase tracking-tight mb-6 leading-[1.1]">
              Interested in<br class="hidden sm:block" /> Collaboration?
            </h2>

            <p class="font-mono text-base sm:text-lg text-white/90 mb-8 sm:mb-10 max-w-2xl border-l-4 border-[#F4D738] pl-4 text-justify">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <a
              href="/contact"
              class="group inline-flex items-center gap-3 min-h-12 px-8 py-4 font-bold text-base sm:text-lg uppercase tracking-wider bg-[#F4D738] text-black border-4 border-black hover:bg-black hover:text-[#F4D738] transition-colors duration-150"
            >
              <span>Get In Touch</span>
              <span class="group-hover:translate-x-2 transition-transform">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      <!-- Bottom spacing -->
      <div class="py-8 sm:py-12"></div>
    </main>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HeaderComponent],
})
export class SideProjectsComponent {
  projects: Project[] = [
    {
      title: 'Super Mario Bros RL Agent',
      description: 'Production-ready PPO implementation training AI to play Super Mario Bros. Features custom CNN architecture (4-layer with 512-unit FC), vectorized training with 8 parallel environments, and comprehensive evaluation tools. Achieves 80% success rate with 10M timesteps. Includes Docker support, TensorBoard/W&B integration, and modular codebase.',
      tags: ['PyTorch', 'Stable Baselines3', 'PPO', 'Reinforcement Learning', 'Docker', 'TensorBoard'],
      link: 'https://github.com/SilvioBaratto/mario-rl-ppo',
      highlighted: true,
    },
    {
      title: 'Formula 1 Championship Prediction',
      description: 'ML system forecasting F1 World Championship outcomes using official telemetry data. Combines Bayesian variance decomposition, 10,000+ Monte Carlo simulations, and ensemble ML (Random Forest, Gradient Boosting, SVM). Features 50+ engineered features, track classification, and hybrid predictions with confidence intervals.',
      tags: ['FastAPI', 'Angular 19', 'FastF1 API', 'Bayesian ML', 'Monte Carlo', 'Docker'],
      link: 'https://github.com/SilvioBaratto/formula_1_championship_prediction',
      highlighted: true,
    },
    {
      title: 'Roldan Hedge Fund',
      description: 'Quantitative portfolio optimization platform combining AI-powered stock analysis (6-factor evaluation) with multi-strategy optimization. Implements Mean-Variance, Black-Litterman with AI views, Risk Parity, HRP, and CVaR optimization. Features macro regime analysis and institutional-grade constraints.',
      tags: ['FastAPI', 'BAML', 'Riskfolio-Lib', 'SQLAlchemy', 'Supabase', 'Quant Finance'],
      highlighted: true,
    },
    {
      title: 'Dietologo AI',
      description: 'Production AI-powered diet generator with weekly meal plans (35 meals/week), AI recipe generation, and smart shopping lists. Live at diet.silviobaratto.com with Google authentication and subscription system. Complete full-stack solution with Docker deployment.',
      tags: ['Angular 19', 'FastAPI', 'BAML', 'OpenAI', 'Supabase', 'Docker', 'Production'],
      link: 'https://diet.silviobaratto.com',
      highlighted: true,
    },
    {
      title: 'Pokemon Text-to-Image Generator',
      description: 'Advanced Conditional VAE generating 64×64 Pokemon images from text using dual conditioning: CLIP ViT-L/14 (768-dim) + categorical attributes (type, color, shape). Features BAML metadata pipeline with OpenAI vision, LPIPS perceptual loss, and 17.8M parameters. Production-ready with FastAPI + Angular frontend.',
      tags: ['PyTorch', 'CLIP', 'BAML', 'OpenAI Vision', 'FastAPI', 'Angular', 'Generative AI'],
      link: 'https://github.com/SilvioBaratto/text_to_pokemon',
      highlighted: true,
    },
    {
      title: 'StockPy',
      description: 'Python machine learning library for stock market analysis implementing LSTM, BiLSTM, GRU, BiGRU, MLP, and Bayesian Neural Networks. Includes probabilistic models (NNHMM, DMM) for financial time series with scikit-learn-style interfaces. Built on PyTorch and Pyro with S&P 500 data downloader.',
      tags: ['PyTorch', 'Pyro', 'LSTM', 'Bayesian Networks', 'Time Series', 'Python'],
      link: 'https://github.com/SilvioBaratto/stockpy',
      highlighted: false,
    },
    {
      title: 'Text-to-Image MNIST Generator',
      description: 'Conditional VAE generating handwritten digit images (0-9) from natural language prompts. Uses SentenceTransformer for semantic text encoding (384-dim) with 20-dimensional latent space. Demonstrates text-conditioned generative modeling fundamentals with KL annealing.',
      tags: ['PyTorch', 'VAE', 'SentenceTransformer', 'MNIST', 'Generative AI'],
      link: 'https://github.com/SilvioBaratto/text_to_image_mnist',
      highlighted: false,
    },
    {
      title: 'Markov Chain Text Prediction',
      description: 'Lightweight text prediction system that learns from WhatsApp conversations to suggest words as you type. Pure Python implementation with zero dependencies, achieving ~100k words/second training speed. Features real-time terminal UI and privacy-focused local processing.',
      tags: ['Python', 'NLP', 'Markov Chains', 'Text Prediction', 'WhatsApp'],
      link: 'https://github.com/SilvioBaratto/markov_chain_text_prediction',
      highlighted: false,
    },
  ];

  getTotalTags(): number {
    const uniqueTags = new Set(this.projects.flatMap(p => p.tags));
    return uniqueTags.size;
  }
}

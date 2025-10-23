import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-featured-projects',
  templateUrl: './featured-projects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturedProjectsComponent {
  projects = [
    {
      title: 'StockPy',
      description: 'Python machine learning library for stock market analysis implementing LSTM, BiLSTM, GRU, BiGRU, MLP, and Bayesian Neural Networks. Includes probabilistic models (NNHMM, DMM) for financial time series with scikit-learn-style interfaces. Built on PyTorch and Pyro with S&P 500 data downloader.',
      tags: ['PyTorch', 'Pyro', 'LSTM', 'Bayesian Networks', 'Time Series', 'Python'],
      link: 'https://github.com/SilvioBaratto/stockpy',
      featured: true,
    },
    {
      title: 'Dietologo AI',
      description: 'Diet management application with AI-powered meal suggestions using BAML. Features weekly meal planning with calorie tracking, ingredient/recipe management, and automated grocery list generation. Modern async architecture with Angular 19, FastAPI, and Supabase authentication.',
      tags: ['Angular 19', 'FastAPI', 'BAML', 'Supabase', 'Tailwind CSS', 'Fly.io'],
      featured: true,
    },
    {
      title: 'Roldan Hedge Fund',
      description: 'Quantitative portfolio optimization platform combining AI-powered stock analysis (6-factor evaluation) with multi-strategy optimization. Implements Mean-Variance, Black-Litterman with AI views, Risk Parity, HRP, and CVaR optimization. Features macro regime analysis and institutional-grade constraints.',
      tags: ['FastAPI', 'BAML', 'Riskfolio-Lib', 'SQLAlchemy', 'Supabase', 'Quant Finance'],
      featured: true,
    },
  ];
}

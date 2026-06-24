import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-featured-experience',
  templateUrl: './featured-experience.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturedExperienceComponent {
  companies = [
    { name: 'Fincantieri', role: 'AI Engineer', period: '2026 - Present' },
    { name: 'EY', role: 'Full-Stack AI Developer', period: '2024 - 2026' },
    { name: 'European Central Bank', role: 'LLM Solutions Developer', period: '2024' },
    { name: 'Generali Investments', role: 'Portfolio Optimization Developer', period: '2023 - 2024' },
    { name: 'EssilorLuxottica', role: 'ML Engineer & Project Manager', period: '2021' },
  ];
}

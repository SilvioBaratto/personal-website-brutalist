import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { HeroComponent } from '../../shared/hero/hero.component';
import { FeaturedExperienceComponent } from '../../shared/featured-experience/featured-experience.component';
import { FeaturedProjectsComponent } from '../../shared/featured-projects/featured-projects.component';
import { ChatbotCtaComponent } from '../../shared/chatbot-cta/chatbot-cta.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeroComponent,
    FeaturedExperienceComponent,
    FeaturedProjectsComponent,
    ChatbotCtaComponent,
  ],
})
export class HomeComponent {}

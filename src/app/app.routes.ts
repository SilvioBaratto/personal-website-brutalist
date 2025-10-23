import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'side-projects',
    loadComponent: () =>
      import('./pages/side-projects/side-projects.component').then((m) => m.SideProjectsComponent),
  },
  {
    path: 'chatbot',
    loadComponent: () =>
      import('./pages/chatbot/chatbot.component').then((m) => m.ChatbotComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then((m) => m.ContactComponent),
  },
  {
    path: 'curriculum',
    loadComponent: () =>
      import('./pages/curriculum/curriculum').then((m) => m.Curriculum),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

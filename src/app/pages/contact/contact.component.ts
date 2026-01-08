import { Component, ChangeDetectionStrategy, signal, computed, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-contact',
  template: `
    <app-header />
    <main class="pt-16 sm:pt-20 min-h-screen bg-white">
      <!-- Brutalist grid background - Purple -->
      <div class="fixed inset-0 pointer-events-none opacity-[0.02]" style="background-image: linear-gradient(#6914E4 1px, transparent 1px), linear-gradient(90deg, #6914E4 1px, transparent 1px); background-size: 20px 20px;"></div>

      <!-- Hero Section -->
      <section class="relative py-12 sm:py-16 lg:py-20 border-b-4 border-black">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div class="max-w-4xl">
            <!-- Label - Yellow -->
            <div class="inline-block border-2 border-black bg-[#FFF400] px-3 py-1 mb-6">
              <span class="font-mono text-xs sm:text-sm uppercase tracking-widest font-bold">Contact</span>
            </div>

            <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black uppercase tracking-tight mb-6 leading-[0.9]">
              <span class="bg-[#6914E4] text-white px-2">Let's</span><br class="hidden sm:block" />
              <span class="sm:ml-8 lg:ml-16">Connect</span>
            </h1>

            <p class="font-mono text-base sm:text-lg text-black leading-relaxed max-w-2xl border-l-4 border-[#6914E4] pl-4">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>
        </div>
      </section>

      <!-- Contact Methods Section -->
      <section class="relative py-12 sm:py-16 lg:py-20 border-b-4 border-black">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <!-- Section header - Red accent -->
          <div class="flex items-center gap-4 mb-10 sm:mb-12">
            <div class="w-12 sm:w-16 h-1 bg-[#FF0000]"></div>
            <span class="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#FF0000] font-bold">Get In Touch</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-0 border-4 border-black">
            <!-- Email Card - Featured Yellow -->
            <a
              href="mailto:silvio.baratto22@gmail.com"
              class="group p-6 sm:p-8 border-b-4 sm:border-b-4 sm:border-r-4 border-black bg-[#FFF400] hover:bg-[#6914E4] hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:bg-[#6914E4] focus-visible:text-white"
              aria-label="Send email to silvio.baratto22@gmail.com"
            >
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 sm:w-14 sm:h-14 border-4 border-current flex items-center justify-center flex-shrink-0">
                  <svg
                    class="w-6 h-6 sm:w-7 sm:h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <span class="font-mono text-xs uppercase tracking-widest text-[#6914E4] group-hover:text-white/60 block mb-1 font-bold">[01]</span>
                  <h3 class="text-lg sm:text-xl font-black uppercase tracking-tight mb-2">Email</h3>
                  <p class="font-mono text-sm sm:text-base break-all">silvio.baratto22&#64;gmail.com</p>
                </div>
                <span class="font-mono text-xl sm:text-2xl font-bold group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </a>

            <!-- Location Card - Green hover -->
            <div class="p-6 sm:p-8 border-b-4 border-black group hover:bg-[#00EE00] transition-colors duration-150">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 sm:w-14 sm:h-14 border-4 border-current flex items-center justify-center flex-shrink-0">
                  <svg
                    class="w-6 h-6 sm:w-7 sm:h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div class="flex-1">
                  <span class="font-mono text-xs uppercase tracking-widest text-[#00EE00] group-hover:text-black/60 block mb-1 font-bold">[02]</span>
                  <h3 class="text-lg sm:text-xl font-black uppercase tracking-tight mb-2">Location</h3>
                  <p class="font-mono text-sm sm:text-base">Trieste, Friuli-Venezia Giulia, Italia</p>
                </div>
              </div>
            </div>

            <!-- GitHub Card - Purple hover -->
            <a
              href="https://github.com/SilvioBaratto"
              target="_blank"
              rel="noopener noreferrer"
              class="group p-6 sm:p-8 border-b-4 sm:border-b-0 sm:border-r-4 border-black hover:bg-[#6914E4] hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:bg-[#6914E4] focus-visible:text-white"
              aria-label="Visit GitHub profile"
            >
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 sm:w-14 sm:h-14 border-4 border-current flex items-center justify-center flex-shrink-0">
                  <svg
                    class="w-6 h-6 sm:w-7 sm:h-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path fill-rule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="flex-1">
                  <span class="font-mono text-xs uppercase tracking-widest text-[#6914E4] group-hover:text-white/60 block mb-1 font-bold">[03]</span>
                  <h3 class="text-lg sm:text-xl font-black uppercase tracking-tight mb-2">GitHub</h3>
                  <p class="font-mono text-sm sm:text-base">&#64;SilvioBaratto</p>
                </div>
                <span class="font-mono text-xl sm:text-2xl font-bold group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </a>

            <!-- LinkedIn Card - Red hover -->
            <a
              href="https://www.linkedin.com/in/silvioangelobarattoroldan"
              target="_blank"
              rel="noopener noreferrer"
              class="group p-6 sm:p-8 hover:bg-[#FF0000] hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:bg-[#FF0000] focus-visible:text-white"
              aria-label="Visit LinkedIn profile"
            >
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 sm:w-14 sm:h-14 border-4 border-current flex items-center justify-center flex-shrink-0">
                  <svg
                    class="w-6 h-6 sm:w-7 sm:h-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div class="flex-1">
                  <span class="font-mono text-xs uppercase tracking-widest text-[#FF0000] group-hover:text-white/60 block mb-1 font-bold">[04]</span>
                  <h3 class="text-lg sm:text-xl font-black uppercase tracking-tight mb-2">LinkedIn</h3>
                  <p class="font-mono text-sm sm:text-base">Connect with me</p>
                </div>
                <span class="font-mono text-xl sm:text-2xl font-bold group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <!-- CTA Section - Purple background -->
      <section class="relative py-12 sm:py-16 lg:py-20">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div class="border-4 border-black bg-[#6914E4] text-white p-8 sm:p-12 lg:p-16">
            <!-- Top bar decoration - Colored dots -->
            <div class="flex items-center gap-3 mb-8">
              <div class="w-3 h-3 bg-[#FF0000]"></div>
              <div class="w-3 h-3 bg-[#FFF400]"></div>
              <div class="w-3 h-3 bg-[#00EE00]"></div>
            </div>

            <h2 class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black uppercase tracking-tight mb-6 leading-[1.1]">
              Ready to<br class="hidden sm:block" /> Work Together?
            </h2>

            <p class="font-mono text-base sm:text-lg text-white/90 mb-8 sm:mb-10 max-w-2xl border-l-4 border-[#FFF400] pl-4">
              Drop me an email or connect on LinkedIn. I typically respond within 24 hours.
            </p>

            <a
              href="mailto:silvio.baratto22@gmail.com"
              class="group inline-flex items-center gap-3 min-h-12 px-8 py-4 font-bold text-base sm:text-lg uppercase tracking-wider bg-[#FFF400] text-black border-4 border-black hover:bg-black hover:text-[#FFF400] transition-colors duration-150"
            >
              <span>Send Email</span>
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
  imports: [HeaderComponent, ReactiveFormsModule],
})
export class ContactComponent {
  private fb = inject(FormBuilder);

  formSubmitted = signal(false);
  isSubmitting = signal(false);

  contactForm = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  nameInvalid = computed(() => {
    const control = this.contactForm.get('name');
    return !!(control?.invalid && control?.touched);
  });

  emailInvalid = computed(() => {
    const control = this.contactForm.get('email');
    return !!(control?.invalid && control?.touched);
  });

  subjectInvalid = computed(() => {
    const control = this.contactForm.get('subject');
    return !!(control?.invalid && control?.touched);
  });

  messageInvalid = computed(() => {
    const control = this.contactForm.get('message');
    return !!(control?.invalid && control?.touched);
  });

  onSubmit() {
    if (this.contactForm.invalid) {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
      return;
    }

    this.isSubmitting.set(true);

    // Simulate form submission (in real app, this would be an HTTP request)
    setTimeout(() => {
      console.log('Form submitted:', this.contactForm.value);
      this.isSubmitting.set(false);
      this.formSubmitted.set(true);
      this.contactForm.reset();

      // Hide success message after 5 seconds
      setTimeout(() => {
        this.formSubmitted.set(false);
      }, 5000);
    }, 1500);
  }
}

/* eslint-disable @nx/enforce-module-boundaries */
import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StrapiService } from '@data-access/strapi';
import { toSignal } from '@angular/core/rxjs-interop';
import { environment } from 'apps/immobilien-khatera-gross/src/environments/environment';
import { map } from 'rxjs/operators';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainButtonComponent } from '../../shared/ui/button/main-button.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { contact_data } from './contact.defaults';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

interface FaqElement {
  Frage: string;
  Antwort: string;
  slug: string;
}

@Component({
  selector: 'kg-contact',
  standalone: true,
  imports: [
    CommonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MainButtonComponent,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export default class ContactComponent {
  protected readonly contactForm: FormGroup;

  private readonly breakpointObserver = inject(BreakpointObserver);

  private strapi = inject(StrapiService);
  private readonly faqElements = toSignal(
    this.strapi
      .fetchData<FaqElement>({
        path: 'faqs',
        query: { sortBy: 'createdAt', sortOrder: 'asc' },
        server: environment.backend_server,
      })
      .pipe(map((faqs) => faqs.data))
  );

  protected readonly isLandscape = toSignal(
    this.breakpointObserver
      .observe(['(orientation: landscape)'])
      .pipe(map((result) => result.matches))
  );

  get personalData() {
    return this.contactForm.get('personalData') as FormGroup;
  }

  get contactData() {
    return this.contactForm.get('contactData') as FormGroup;
  }

  protected readonly backArrow = faArrowLeft;

  constructor() {
    this.contactForm = new FormGroup({
      personalData: new FormGroup({
        firstname: new FormControl('', [Validators.required]),
        lastname: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        phone: new FormControl(''),
      }),
      contactData: new FormGroup({
        message: new FormControl('', [Validators.required]),
      }),
    });
  }

  protected readonly contactBlockData = signal(contact_data);

  // protected readonly faqData: Partial<AccordionOptions> = {
  //   firstOpenend: true,
  //   // backgroundColor: 'rgb(255, 255, 255)',
  //   textColor: '#333',
  //   image: 'assets/images/about/faq.jpg',
  // };

  protected readonly title = 'Freqently Asked Questions';
  protected readonly subtitle = 'Das wichtigste auf einen Blick';

  // protected readonly accordionElements: AccordionElement[] = [
  //   {
  //     title: 'Wie lange dauert der Home Staging Prozess?',
  //     body: 'Abhängig von der Größe der Immobilie und dem Umfang der Maßnahmen dauert der Prozess zwischen 1 und 3 Tagen.',
  //   },
  //   {
  //     title: 'Wie viel kostet Home Staging?',
  //     body: 'Die Kosten für Home Staging sind abhängig von der Größe der Immobilie und dem Umfang der Maßnahmen. Wir erstellen Ihnen gerne ein individuelles Angebot.',
  //   },
  //   {
  //     title: 'Wie lange bleibt das Home Staging in der Immobilie?',
  //     body: 'Das Home Staging bleibt in der Immobilie bis zum Verkauf. Die Mietdauer beträgt 3 Monate. Sollte die Immobilie nicht innerhalb dieser Zeit verkauft werden, kann das Home Staging verlängert werden.',
  //   },
  //   {
  //     title: 'Wie viel kostet die Verlängerung des Home Stagings?',
  //     body: 'Die Kosten für die Verlängerung des Home Stagings sind abhängig von der Größe der Immobilie und dem Umfang der Maßnahmen. Wir erstellen Ihnen gerne ein individuelles Angebot.',
  //   },
  //   {
  //     title: 'Wie viel kostet die Einlagerung der Möbel?',
  //     body: 'Die Kosten für die Einlagerung der Möbel sind abhängig von der Größe der Immobilie und dem Umfang der Maßnahmen. Wir erstellen Ihnen gerne ein individuelles Angebot.',
  //   },
  // ];
}

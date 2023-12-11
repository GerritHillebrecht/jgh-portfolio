import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainNabvarComponent } from '../shared/ui/navigation/main-nabvar.component';

@Component({
  selector: 'kg-content-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, MainNabvarComponent],
  templateUrl: './content-layout.component.html',
  styleUrl: './content-layout.component.scss',
})
export default class ContentLayoutComponent {}

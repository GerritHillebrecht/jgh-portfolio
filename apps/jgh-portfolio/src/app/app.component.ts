import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CollapsableListComponent } from '@ui-library/list';

@Component({
  standalone: true,
  imports: [RouterModule, CollapsableListComponent],
  selector: 'jgh-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'jgh-portfolio';
}

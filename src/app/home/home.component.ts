import { Component } from '@angular/core';
import { PageLinksComponent } from '../partials/page-links/page-links.component';

@Component({
  selector: 'app-home',
  imports: [PageLinksComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  homeImage: string = "/images/temperature.jpg";
}

import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-ecommerce';

  constructor(private meta: Meta) {
    this.meta.addTags([
      { name: 'description', content: 'Angular eCommerce Application' },
      { name: 'keywords', content: 'Angular, eCommerce, SSR, SEO, NgRx' },
    ]);
  }
}

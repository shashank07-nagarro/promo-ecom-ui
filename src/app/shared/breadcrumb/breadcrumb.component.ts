import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { UtilityService } from '../../services/utility.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
})
export class BreadcrumbComponent {
  crumbs$: Observable<{ label: string; url: string[] }[]>;
  constructor(private route: ActivatedRoute, private util: UtilityService) {
    this.crumbs$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const crumbArr = [
          {
            label: 'Home',
            url: ['/'],
          },
        ];
        let subcat = params.get('sub-category');
        if (subcat) {
          crumbArr.push({
            label: this.util.toTitleCase(subcat.replaceAll('-', ' ')),
            url: ['/', subcat],
          });
        }
        let title = params.get('title');
        if (title && subcat) {
          crumbArr.push({
            label: this.util.toTitleCase(title.replaceAll('-', ' ')),
            url: ['/', subcat, 'brand', title],
          });
        }
        return of(crumbArr);
      })
    );
  }
}

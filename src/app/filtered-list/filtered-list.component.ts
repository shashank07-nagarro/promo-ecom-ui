import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-filtered-list',
  templateUrl: './filtered-list.component.html',
  styleUrl: './filtered-list.component.scss',
})
export class FilteredListComponent {
  filterData$: Observable<Object>;
  constructor(private route: ActivatedRoute, private util: UtilityService) {
    this.filterData$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const filterData = {
          'sub-category': params.get('sub-category'),
          category: params.get('category'),
          gender: params.get('gender'),
        };
        return of(filterData);
      })
    );
  }
}

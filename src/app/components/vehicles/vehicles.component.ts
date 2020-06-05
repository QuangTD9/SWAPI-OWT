import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { VehiclesService } from 'src/app/common/services/vehicles.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil, switchMap, debounceTime } from 'rxjs/operators';
import { NgModel, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit, OnDestroy {
  @ViewChild('filterName') filterName: NgModel;

  results: [];
  totalPage;
  currPage = 1;
  next: string;
  previous: string;
  formSearch: FormGroup;

  private onDestroy$: Subject<boolean> = new Subject<boolean>();
  private customerLookup$: Subject<void> = new Subject();

  constructor(
    private fb: FormBuilder,
    private verhicleService: VehiclesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formSearch = this.fb.group({
      name: ''
    });

    this.formSearch.valueChanges.subscribe(() => {
      this.currPage = 1;
      this.customerLookup$.next();
    });

    this.customerLookup$
      .pipe(
        debounceTime(500),
        switchMap(() => {
          const searchParams = this.formSearch.value;
          return this.verhicleService.getVehicles(this.currPage, searchParams.name);
        }),
        takeUntil(this.onDestroy$)
      )
      .subscribe(results => {
        this.results = results['results'];
        this.next = results['next'];
        this.previous = results['previous'];
        this.totalPage = this.convArr(Math.ceil(results['count'] / 10));
      });

    this.customerLookup$.next();
  }

  onChangePage(page) {
    this.currPage = page;
    this.customerLookup$.next();
  }

  onPrevious() {
    this.currPage--;
    this.customerLookup$.next();
  }

  onNext() {
    this.currPage++;
    this.customerLookup$.next();
  }

  onNavigateDetail(url) {
    let sliceStr = url.slice(0, url.lastIndexOf("/"));
    let id = sliceStr.slice(sliceStr.lastIndexOf("/") + 1, sliceStr.length);

    this.router.navigate(['vehicle/' + id]);
  }

  convArr(n: number): any[] {
    return Array(n);
  }

  trackByFn(index, item) {
    return index;
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
}

import { Injectable, OnDestroy } from '@angular/core';
import { Resolve, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { VehiclesService } from 'src/app/common/services/vehicles.service';
import { Observable, Subject, } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class VehicleResolver implements Resolve<any>, OnDestroy {
    private onDestroy$: Subject<boolean> = new Subject<boolean>();

    constructor(private verhicleService: VehiclesService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return new Promise((resolve, reject) => {
            this.verhicleService.getVehicle(route.params['id'])
                .pipe(takeUntil(this.onDestroy$))
                .subscribe(data => {
                    resolve(data);
                });
        });
    }

    ngOnDestroy(): void {
        this.onDestroy$.next(true);
        this.onDestroy$.complete();
    }
}

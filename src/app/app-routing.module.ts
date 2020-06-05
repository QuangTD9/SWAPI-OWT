import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleResolver } from './components/vehicle-detail/vehicles-detail.resolver';
import { VehiclesDetailComponent } from './components/vehicle-detail/vehicles-detail.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';


const routes: Routes = [
    { path: '', component: VehiclesComponent },
    { path: 'vehicle/:id', component: VehiclesDetailComponent, resolve: { data: VehicleResolver } },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

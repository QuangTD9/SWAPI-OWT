import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicle } from '../model/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  protected readonly BASE_URL: string = 'https://swapi.dev/api/vehicles/';
  constructor(private httpClient: HttpClient) { }

  getVehicles(page, name): Observable<Vehicle[]> {
    return this.httpClient.get<Vehicle[]>(this.BASE_URL + '?page=' + page + '&search=' + name);
  }

  getVehicle(id: string): Observable<Vehicle> {
    return this.httpClient.get<Vehicle>(this.BASE_URL + id);
  }
}

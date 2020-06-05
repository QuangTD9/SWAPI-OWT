import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VehicleItem } from 'src/app/common/model/vehicle-item';

@Component({
  selector: 'app-vehicles-detail',
  templateUrl: './vehicles-detail.component.html',
  styleUrls: ['./vehicles-detail.component.css']
})
export class VehiclesDetailComponent implements OnInit {
  vehicle: VehicleItem;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.vehicle = data.data;
    });
  }

  onBack() {
    this.router.navigate(['/']);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/_models/car';
import { CarsService } from 'src/app/_services/cars.service';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent implements OnInit {
  @Input() carIndv!: Car;

  constructor() { }

  ngOnInit(): void {

  }

  


}

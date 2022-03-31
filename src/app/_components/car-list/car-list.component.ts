import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/_models/car';
import { CarsService } from 'src/app/_services/cars.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  carsLocal!: Car[];
  
  constructor(private carsService: CarsService) { 
    
  }

  ngOnInit(): void {
    this.getCars();
  }

  getCars(){
    this.carsService.getCars().subscribe(response => {
      this.carsLocal = response;
    });
  }
}

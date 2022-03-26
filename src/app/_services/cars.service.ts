import { Injectable } from '@angular/core';
import { Car } from 'src/app/_models/car';
import { CARS } from 'src/app/_data/CARS';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  cars: Car[] = CARS;
  
  constructor() { }

  getCars(){
    return CARS;
  }
}

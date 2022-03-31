import { Injectable } from '@angular/core';
import { Car } from 'src/app/_models/car';
import { CARS } from 'src/app/_data/CARS';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  
  
  constructor() { }

  getCars(){
    return of(CARS);
  }
}

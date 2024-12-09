import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstServiceService {
  time: string ='My Fisrt Service';
  constructor() { }
}

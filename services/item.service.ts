import { Injectable } from '@angular/core';
import { Item } from '../models/item';



@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items:Item[]= [
    {

    id: 0,
    title: 'memoria',
    price: 8000,
    quantity: 4,
    completed: false
  },
  {
    id: 1,
    title: 'unidadpc',
    price: 10000,
    quantity: 8,
    completed: false
  },
  {
    id: 2,
    title: 'mouse',
    price: 5000,
    quantity: 5,
    completed: false
  },
];

  constructor() { }

  getItems(){
    
  return this.items;
  }

  addItem(item:Item){
    this.items.unshift(item)
  }
}

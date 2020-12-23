import { Injectable } from '@angular/core';
import { Bien } from './Bien';

@Injectable({
  providedIn: 'root'
})
export class BienService {

  constructor() { }

  private biens: Bien[] = [
    {id: 1, title: "title 1", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio nihil volupt", image: 'https://source.unsplash.com/1600x900?home', price: 10000, sale: true, createAt: new Date(2014,21,12),category: "category", },
    {id: 2, title: "titre 2", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio nihil volupt", image: 'https://source.unsplash.com/1600x900?car', price: 3000, sale: false,createAt: new Date(2007,4,12) ,category: "category",},
    {id: 3, title: "titre 3", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio nihil volupt", image: 'https://source.unsplash.com/1600x900?house', price: 3000, sale: false,createAt: new Date(1999,4,12) ,category: "category",},
    {id: 4, title: "titre 4", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio nihil volupt", image: 'https://source.unsplash.com/1600x900?bus', price: 3000, sale: false,createAt: new Date(1999,4,12) ,category: "category",},
    {id: 5, title: "titre 5", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio nihil volupt", image: 'https://source.unsplash.com/1600x900?metro', price: 10000, sale: false,createAt: new Date(1999,4,12) ,category: "category",},
    {id: 6, title: "titre 6", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio nihil volupt", image: 'https://source.unsplash.com/1600x900?phone', price: 10000, sale: true,createAt: new Date(1999,4,12) ,category: "category",},
  ];

  getAllBiens(): Bien[]{
    return this.biens;
  }

  getBienById(id:number):Bien{
    const bien = this.biens.find( (b: Bien) => {
      return b.id === id
    });
    return bien;
  }

  addBien(bien: Bien){
    this.biens.push(bien);
  }

  //spread Operator ES6 (A rechercher)
  updateBien(bienUpdate){
    var bienAmodifier = this.biens.find((b: Bien)=>{
      return b.id === bienUpdate.id
    });
    if (bienAmodifier) {
      bienAmodifier = {...bienUpdate}
    }
  }

  getLastId(): number{
    return this.biens[this.biens.length - 1] ? this.biens[this.biens.length - 1].id : 0;
  }


}

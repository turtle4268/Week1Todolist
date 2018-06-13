import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// import { HttpClient, HttpHeaders } from '@angular/common/http';

import { list } from './list';
import { LISTS } from './lists';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  
  lists=LISTS;

  constructor() { }

  getList() {
    return this.lists
  }
  addList(list:list){
    this.lists.push(list);
    console.log("sa");    
  }
  deletList(dlist:list){
    this.lists=this.lists.filter(list=>{
      return list.title!==dlist.title
    });
    console.log(this.lists);
  }
  
  allList(){
    return this.lists;
  }
  undone(){
    return this.lists.filter(list=>!list.completed);
  }
  done(){
    return this.lists.filter(list=>list.completed);   
  }
}

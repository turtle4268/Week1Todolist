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

  isedit:boolean=false;
  
  constructor() { }

  getList() {
    return this.lists
  }
  addList(list:list){
    this.lists.push(list);
    console.log("sa");    
  }
  saveList(list:list){

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

  openedit(){
    this.isedit=true;
    return this.isedit;
  }
  closeedit(){
    this.isedit=false;
    return this.isedit;    
  }
  
}

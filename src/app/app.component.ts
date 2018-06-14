import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ListService } from './list.service';
import { list } from './list';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  result:list[];

  constructor( private listService: ListService) { }

  ngOnInit() {
   
    this.getlists();
  }
  getlists():void{
    this.result=this.listService.getList();
  }

  allList(){
    this.result=this.listService.allList();
  }
  undone(){
    this.result=this.listService.undone();    
  }
  done(){
    this.result=this.listService.done();    
  }
  openedit(){
    this.listService.openedit();
  }
  isedit(){
    return this.listService.isedit;
  }
}

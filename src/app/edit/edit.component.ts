import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ListService } from '../list.service';
import { list } from '../list';
import * as moment from 'moment';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})


export class EditComponent implements OnInit {

  todoForm: FormGroup;

  toolbuttonstate={
    all:true,
    undo:false,
    done:false
  };
  viewlist='';
  orig;
  result:list[];

  constructor(private fb:FormBuilder, private listService: ListService) { }

  ngOnInit() {
    this.todoForm=this.fb.group({
      title:[''],
      date:[''],
      comment:['']
    });
    this.getlists();
  }
  getlists():void{
    this.orig=this.listService.getList();
    this.result=this.orig;
    // console.log('get');
  }

  onSubmit({value}):void{
    if(value.title!==''){
      value.date=moment(value.date).format('YYYY-MM-DD');
      this.listService.addList(value);
    }
    // this.listService.addList(value);
    // this.test.push(value);
    this.todoForm.setValue({
      title:'',
      date:'',
      comment:''
    });
  }
  cancel(){
    this.todoForm.setValue({
      title:'',
      date:'',
      comment:''
    });
  }
  allList(){
    this.result=this.orig;
  }
  undone(){
    this.result=this.orig.filter(list=>!list.completed);
  }
  done(){
    this.result=this.orig.filter(list=>list.completed);   
  }
  delet(list){
    this.listService.deletList(list);
    this.getlists();
  }
  check(list:list){
    list.completed=!list.completed;
    // console.log(list.completed);
  }
}

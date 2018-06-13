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

  isfavo=false;

  constructor(private fb:FormBuilder, private listService: ListService) { }

  ngOnInit() {
    this.todoForm=this.fb.group({
      title:[''],
      date:[''],
      comment:[''],
      completed:[''],
      favorite:['']
    });
  }

  favobutton(){
    this.isfavo=!this.isfavo;
  }

  onSubmit({value}):void{
    if(value.title!==''){
      if(value.date){
        value.date=moment(value.date).format('YYYY-MM-DD');
      }
      value.favorite=this.isfavo;
      this.listService.addList(value);
      console.log(value);
    }
    this.todoForm.setValue({
      title:'',
      date:'',
      comment:'',
      completed:false,
      favorite:false
    });
    this.isfavo=false;
  }
  cancel(){
    this.todoForm.setValue({
      title:'',
      date:'',
      comment:'',
      completed:false,
      favorite:false
    });
    this.isfavo=false;
  }
 
}

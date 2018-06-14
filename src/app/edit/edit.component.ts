import { Component, OnInit, Input } from '@angular/core';
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

  @Input () slist:list;

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
    if(this.slist){
      this.todoForm.setValue({
        title:this.slist.title,
        date:moment(this.slist.date).format('YYYY-MM-DD'),
        comment:this.slist.comment,
        completed:this.slist.completed,
        favorite:this.slist.favorite
      });
      this.isfavo=this.slist.favorite;
      console.log(this.slist);
    }
  }

  favobutton(){
    this.isfavo=!this.isfavo;
    if(this.slist) this.slist.favorite=this.isfavo;
  }

  onSubmit({value}):void{
    if(value.title!==''){
      if(value.date){
        value.date=moment(value.date).format('YYYY-MM-DD');
      }
      value.favorite=this.isfavo;
      if(this.slist){
        
      }else{
        this.listService.addList(value);
      }
      console.log(value);
    }
    // this.todoForm.setValue({
    //   title:'',
    //   date:'',
    //   comment:'',
    //   completed:false,
    //   favorite:false
    // });
    // this.isfavo=false;
    this.closeedit();
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
    this.closeedit();
  }

  closeedit(){
    if(this.slist) {
      this.slist.isedit=false;
    }else{
      this.listService.closeedit();
    }
  }
 
}

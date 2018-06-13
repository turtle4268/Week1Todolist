import { Component, OnInit, Input } from '@angular/core';
import { ListService } from '../list.service';
import { list } from '../list';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input () result:list[];

  constructor(private listService:ListService) { }

  ngOnInit() {
  }

  delet(dlist){
    this.listService.deletList(dlist);
    this.result=this.result.filter(list=>list.title!==dlist.title);
  }
  check(list:list){
    list.completed=!list.completed;
    console.log(list.completed);
  }
}

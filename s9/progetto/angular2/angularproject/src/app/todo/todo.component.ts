import { partitionArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',//nome componente da richiamare nell HTML dell'appcomponent
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TODOComponent implements OnInit {

task: Task[] =[]



  constructor() { }

  ngOnInit(): void {





  }

gettask(){
  let data:any=this.task
  const para = document.createElement("p");
  para.innerText = data;
  document.body.appendChild(para);








}










}



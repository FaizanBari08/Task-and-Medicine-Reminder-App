import { Component, OnInit } from '@angular/core';
import {HomeService} from '../home/home.service';
import icons from 'glyphicons'

@Component({
  selector: 'app-task-reminder',
  templateUrl: './task-reminder.component.html',
  styleUrls: ['./task-reminder.component.css']
})
export class TaskReminderComponent implements OnInit {

  public personDetail: any;
  public todos=[];
  title = 'Task Reminder';

  constructor( public homeSer: HomeService) {
    console.log('Logged to Task Reminder Component')
    this.personDetail = {
      name: 'Adam',
      age: 58,
      bloodgroup: 'A+',
      gender: 'male'
    }
  }

  ngOnInit() {
    this.todos = this.homeSer.getTodoList();
  }

addTodo(newTodoLabel1){
  if(newTodoLabel1){
  var newTodo={
    label:newTodoLabel1,
    status:false
  };
  this.todos.push(newTodo);
  this.homeSer.setTodoList(this.todos);
}else{
  console.log('Please add task')
}
}

deleteTodo(todo){
  this.todos=this.todos.filter(t=>t.label !==todo.label); 
  this.homeSer.setTodoList(this.todos);
}

doneTodo(todo){
  this.todos.forEach(item => {
    if(item.label === todo.label){
      item.status = !item.status;
    }
  });
  this.homeSer.setTodoList(this.todos);
}

}

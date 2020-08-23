import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-med-reminder',
  templateUrl: './med-reminder.component.html',
  styleUrls: ['./med-reminder.component.css']
})
export class MedReminderComponent implements OnInit {

  public personDetail: any;
  public todos=[];
  title = 'Medicine Reminder';
  public matDatepicker;
  public picker;

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
    this.todos = this.homeSer.getMedRemList();
  }

addMedTodo(newTodoLabel1){
  console.log('picker', this.picker, this.matDatepicker)
  if(newTodoLabel1){
  var newTodo={
    label:newTodoLabel1
  };
  this.todos.push(newTodo);
  this.homeSer.setTodoList(this.todos);
}else{
  console.log('Please add task')
}
}

deleteReminder(todo){
  this.todos=this.todos.filter(t=>t.label !==todo.label); 
  this.homeSer.setTodoList(this.todos);
}

}

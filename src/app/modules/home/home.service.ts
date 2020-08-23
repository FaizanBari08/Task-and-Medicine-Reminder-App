import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  public todoList: any = [];
  public medRemList: any = [];

  constructor() {
    let defaultTask = {
      label: 'Take Medicine',
      status: true
    }
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    

    let defaultReminder = {
      label: 'Med 1',
      date: today
    }

    this.todoList.push(defaultTask);
    this.medRemList.push(defaultReminder);
  }

  setTodoList(_todoList) {
    this.todoList = _todoList;
  }

  getTodoList() {
    return this.todoList;
  }

  setMedRemList(_medRemList) {
    this.medRemList = _medRemList;
  }

  getMedRemList() {
    return this.medRemList;
  }
}
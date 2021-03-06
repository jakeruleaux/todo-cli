import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Homework!';
  currentFocus: 'angular homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  tasks: Task[] = [
    new Task('Finish weekend homework', 3),
    new Task('Begin brainstorming possible JavaScript group projects', 2),
    new Task('Add README file to last few Angular repos on GitHub', 2)
  ];

   selectedTask = null;

  priorityColor(currentTask){
    if (currentTask.priority === 3){
      return "bg-danger";
    } else if (currentTask.priority === 2) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }

  editTask(clickedTask) {
    this.selectedTask = clickedTask;
  }

  finishedEditing() {
   this.selectedTask = null;
 }


  isDone(clickedTask: Task) {
    if(clickedTask.done === true) {
      alert('This task is done!');
    } else {
      alert('This task is not done. Better get to work!');
    }
  }
}

export class Task {
  public done: boolean = false;
  constructor(public description: string, public priority: number) { }
}

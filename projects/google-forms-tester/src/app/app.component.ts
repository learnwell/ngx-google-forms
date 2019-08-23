import { Component } from '@angular/core';
import { Poll } from 'checkbox-mcq/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'google-forms-tester';
  questions: Poll[] = [
    {
      content: 'what is the right answer?',
      options: [
        {content: 'a', correct: false},
        {content: 'b', correct: true},
        {content: 'c', correct: false}
      ]
    },
    {
      content: 'what is the right answer?',
      options: [
        {content: 'a', correct: false},
        {content: 'b', correct: true},
        {content: 'c', correct: false}
      ]
    }
  ];
}

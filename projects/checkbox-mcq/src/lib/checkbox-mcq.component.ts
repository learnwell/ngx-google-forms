import { Component, OnInit, Input } from '@angular/core';

/**
 * Poll and Option are being used as interface names
 * instead of Question and Answer because
 * a question does not house an answer inside it
 * but a poll can house an option inside of it.
 * 
 * This technicality of what the words mean in the english language
 * has led to the naming choices you see here.
 */
export interface Poll { // synonymous to a question
  content: string;
  options: Array<Option>;
}

export interface Option { //synonymous to an answer
  content: string;
  correct: boolean;
}

@Component({
  selector: 'ngx-google-forms-checkbox-mcq',
  templateUrl: './checkbox-mcq.component.html',
  styleUrls: ['./checkbox-mcq.component.css']
})
export class CheckboxMcqComponent implements OnInit {

  @Input()
  poll: Poll;

  constructor() { }

  ngOnInit() {
  }

}

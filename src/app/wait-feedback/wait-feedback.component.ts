import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'wait-feedback',
  standalone: true,
  imports: [ MatChipsModule ],
  templateUrl: './wait-feedback.component.html',
  styleUrl: './wait-feedback.component.css'
})
export class WaitFeedbackComponent {

}

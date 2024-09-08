import { Component, Input } from '@angular/core';

@Component({
  selector: 'error-message',
  standalone: true,
  imports: [],
  templateUrl: './error-message.component.html',
  styleUrl: './error-message.component.css'
})
export class ErrorMessageComponent {

  @Input('errorMessage')
  errorMessage!: string;

}

import { Component, Input } from '@angular/core';
import { ThemeSelectionService } from '../theme-selection.service';

@Component({
  selector: 'message-bubble',
  standalone: true,
  imports: [],
  templateUrl: './message-bubble.component.html',
  styleUrl: './message-bubble.component.css'
})
export class MessageBubbleComponent {

  @Input('user-message')
  public userMessage!: boolean;

  @Input('message')
  public message!: string;

  constructor(public themeSelectionService: ThemeSelectionService) {
    
  }
}

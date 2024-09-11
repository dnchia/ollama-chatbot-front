import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MessageBubbleComponent } from "../message-bubble/message-bubble.component";
import { WaitFeedbackComponent } from "../wait-feedback/wait-feedback.component";

@Component({
  selector: 'response-box',
  standalone: true,
  imports: [CommonModule, MessageBubbleComponent, WaitFeedbackComponent],
  templateUrl: './response-box.component.html',
  styleUrl: './response-box.component.css'
})
export class ResponseBoxComponent {
  @Input('messages')
  messages!: Message[];

  @Input('waiting')
  waiting!: boolean;
}

export interface Message {
  content: string;
  userMessage: boolean;
}
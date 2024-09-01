import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MessageBubbleComponent } from "../message-bubble/message-bubble.component";

@Component({
  selector: 'response-box',
  standalone: true,
  imports: [CommonModule, MessageBubbleComponent],
  templateUrl: './response-box.component.html',
  styleUrl: './response-box.component.css'
})
export class ResponseBoxComponent {
  @Input('messages')
  messages!: Message[];

  ngOnInit() {
    console.log(this.messages);
  }

  ngOnChanges() {
    console.log(this.messages);
  }
}

export interface Message {
  content: string;
  userMessage: boolean;
}
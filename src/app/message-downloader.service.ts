import { Injectable } from '@angular/core';
import { Message } from './response-box/response-box.component';
import jspdf from 'jspdf';

@Injectable({
  providedIn: 'root'
})
export class MessageDownloaderService {

  private static LINE_MAX_SIZE_IN_CHARACTERS = 110;

  constructor() { }

  public generatePdfFromMessages(messages: Message[]) {
    let pdf = new jspdf('l', 'cm', 'a4');
    let y = 1;
    
    for (let i = 0; i < messages.length; i = i + 1) {
      this.setTextColorAccordingIsUserMessageOrNot(messages[i].userMessage, pdf);

      if (messages[i].content.length > 20) {
        const splittedMessage: string[] = this.splitMessage(messages[i].content, MessageDownloaderService.LINE_MAX_SIZE_IN_CHARACTERS);

        for (let j = 0; j < splittedMessage.length; j = j + 1) {
          pdf.text(splittedMessage[j], 1, y);
          y = this.increaseY(y, pdf);
        }
      }
      else {
        pdf.text(messages[i].content, 1, y);
        y = this.increaseY(y, pdf);
      }

      y = this.increaseY(y, pdf);
    }
    
    pdf.save(this.generatePDFName());
  }

  private setTextColorAccordingIsUserMessageOrNot(isUserMessage: boolean, pdf: jspdf): void {
    if (isUserMessage) {
      pdf.setTextColor(0, 50, 110); // dark blue
    }
    else {
      pdf.setTextColor(255, 20, 0); // dark red
    }
  }

  private increaseY(y: number, pdf: jspdf): number {
    if (y > 19) {
      pdf.addPage();
      return 1;
    }

    return y += 1;
  }

  private splitMessage(message: string, maxSize: number): string[] {
    const result: string[] = [];
    let index = 0;
    const messageSize = message.length != null ? message.length : 0;

    while (messageSize > index) {
      const messagePart = message.substring(index, index + maxSize);
      result.push(messagePart);
      index += maxSize;
    }

    return result;
  }

  private generatePDFName(): string {
    const actualDate = new Date();
    return `${actualDate.getFullYear()}${actualDate.getMonth()}${actualDate.getDate()}${actualDate.getHours()}${actualDate.getMinutes()}${actualDate.getSeconds()}_conversation.pdf`;
  }
}

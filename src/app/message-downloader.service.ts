import { Injectable } from '@angular/core';
import { Message } from './response-box/response-box.component';
import jspdf from 'jspdf';

@Injectable({
  providedIn: 'root'
})
export class MessageDownloaderService {

  constructor() { }

  public generatePdfFromMessages(messages: Message[]) {
    let pdf = new jspdf('l', 'cm', 'a4');
    let y = 1;

    for (let i = 0; i < messages.length; i = i + 1) {
      pdf.splitTextToSize(messages[i].content, 270, {y: y});
      y += 1;
    }
    
    pdf.save(this.generatePDFName());
  }

  private generatePDFName(): string {
    const actualDate = new Date();
    return `${actualDate.getFullYear()}${actualDate.getMonth()}${actualDate.getDate()}${actualDate.getHours()}${actualDate.getMinutes()}${actualDate.getSeconds()}_conversation.pdf`;
  }
}

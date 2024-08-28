import { Component, Injectable, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ResponseBoxComponent } from './response-box/response-box.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    FormsModule, 
    ResponseBoxComponent, 
    MatButtonModule, 
    MatInputModule, 
    MatFormFieldModule, 
    CommonModule, 
    MatIconModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
@Injectable({
  providedIn:  'root'
  })
export class AppComponent {
  title = 'ollama-interface';

  prompt: string = '';
  lastPrompt: string = '';

  darkTheme = false;

  sentAnyMessage = false;

  @ViewChild(ResponseBoxComponent, { static: false })
  private responseBoxComponent: ResponseBoxComponent | undefined;

  public emitPrompt(): void {
    if (this.responseBoxComponent != null) {
      this.sentAnyMessage = true;
      this.responseBoxComponent.askQuestion(this.prompt);
      this.lastPrompt = this.prompt;
      this.prompt = '';
    }
  }
}

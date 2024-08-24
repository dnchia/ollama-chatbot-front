import { Component, Injectable, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ResponseBoxComponent } from './response-box/response-box.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ResponseBoxComponent],
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

  @ViewChild(ResponseBoxComponent, { static: false })
  private responseBoxComponent: ResponseBoxComponent | undefined;

  public emitPrompt(): void {
    if (this.responseBoxComponent != null) {
      this.responseBoxComponent.askQuestion(this.prompt);
      this.lastPrompt = this.prompt;
      this.prompt = '';
    }
  }
}

import { Component, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ResponseBoxComponent } from './response-box/response-box.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Message } from '../app/response-box/response-box.component';
import { ErrorMessageComponent } from "./error-message/error-message.component";

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
    MatIconModule,
    HttpClientModule,
    ErrorMessageComponent
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
  responseString = '';
  loading = false;
  error = false;

  errorDetail = '';

  messages: Message[] = [{ userMessage: false, content: 'Soy Ollama, un asistente virtual, responderé a tus preguntas por chat'}];

  isLoaded = false;

  messageAudio: any;

  constructor(private http: HttpClient) {
    this.http = http;

    const audio = new Audio();
    audio.src = "../assets/whatsapp.mp3";
    audio.load();
    this.messageAudio = audio;
  }

  ngOnInit() {
    this.isLoaded = true;
    window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });

  }

  public emitPrompt(): void {
    if (this.prompt != null && this.prompt.length > 0) {
      this.sentAnyMessage = true;
      this.messageAudio.play();
      this.askQuestion(this.prompt);
      this.messages = [...this.messages, { userMessage: true, content: this.prompt}];
  
      this.lastPrompt = this.prompt;
      this.prompt = '';
      window.scrollTo(0, document.body.scrollHeight);
    }
  }

  public askQuestion(promptText: string) {
    this.error = false;
    this.errorDetail = '';
    this.loading = true;
    const requestObject: Observable<OllamaResponse> = this.http.get<OllamaResponse>('http://192.168.1.41:8000/test', { params: {prompt: "'" + promptText + "'"}});

    requestObject.subscribe((response: OllamaResponse) => {
      this.responseString = response.response;
      this.loading = false;
      this.messages = [...this.messages, { userMessage: false, content: this.responseString}];
      window.scrollTo(0, document.body.scrollHeight);
    }, 
    (err: any) => {
      this.loading = false;
      this.error = true;
      this.errorDetail = err.message;
    });
  }
}

interface OllamaResponse {
  response: string;
}
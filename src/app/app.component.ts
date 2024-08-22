import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
@Injectable({
  providedIn:  'root'
  })
export class AppComponent {
  title = 'ollama-interface';

  prompt = '';
  responseString = '';
  loading = false;

  constructor(private http: HttpClient) {
    this.http = http;
  }

  askQuestion() {
    this.loading = true;
    this.http.get<OllamaResponse>('http://192.168.1.41:8000/test', { params: {prompt: "'" + this.prompt + "'"}})
    .subscribe((response: any) => {
      this.responseString = response.response;
      this.loading = false;
    });
  }
}

interface OllamaResponse {
  response: string;
}

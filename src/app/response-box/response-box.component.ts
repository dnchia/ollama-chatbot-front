import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'response-box',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './response-box.component.html',
  styleUrl: './response-box.component.css'
})
export class ResponseBoxComponent {

  responseString = '';
  loading = false;
  error = false;

  errorDetail = '';

  constructor(private http: HttpClient) {
    this.http = http;
  }

  public askQuestion(promptText: string) {
    this.error = false;
    this.errorDetail = '';
    this.loading = true;
    const requestObject: Observable<OllamaResponse> = this.http.get<OllamaResponse>('http://192.168.1.41:8000/test', { params: {prompt: "'" + promptText + "'"}});

    requestObject.subscribe((response: OllamaResponse) => {
      this.responseString = response.response;
      this.loading = false;
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

import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-bloc-list',
  templateUrl: './bloc-list.component.html',
  styleUrls: ['./bloc-list.component.css']
})
export class BlocListComponent {
  token: string = '';
  responseData: any;
  isLoading = false;
  error: any;
   isSuccessActive = false;
  isErrorActive = false;

  toggleSection(section: 'success' | 'error') {
    if (section === 'success') {
      this.isSuccessActive = !this.isSuccessActive;
    } else if (section === 'error') {
      this.isErrorActive = !this.isErrorActive;
    }
  }
highlightJson(json: any): SafeHtml {
  if (typeof json === 'string') {
    try {
      json = JSON.parse(json);
    } catch (e) {
      return this.sanitizer.bypassSecurityTrustHtml(json);
    }
  }

  const jsonString = JSON.stringify(json, null, 2);
  const html = jsonString
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/("(.*?)")(\s*:\s*)/g, `<span style="color: rgb(57, 173, 181); font-weight: bold;">$1</span>$3`) // keys
    .replace(/: "(.*?)"/g, `: <span style="color: rgb(59, 168, 95);">"$1"</span>`) // strings
    .replace(/: (\d+)/g, `: <span style="color: rgb(245, 135, 31);">$1</span>`)  // numbers
    .replace(/: (true|false)/g, `: <span style="color: darkblue;">$1</span>`) // booleans
    .replace(/: null/g, `: <span style="color: #808080;">null</span>`); // nulls

  return this.sanitizer.bypassSecurityTrustHtml(html);
}
copied = false;

copyJson() {
  navigator.clipboard.writeText(this.responseExample).then(() => {
    this.copied = true;

    setTimeout(() => {
      this.copied = false;
    }, 1500); // Reset back after 1.5 sec
  });
}
  responseExample: string = `{
  "id": 1,
  "nomBloc": "string",
  "capaciteBloc": 30,
  "chambres": [
    { "numero": 101, "capacite": 3 },
    { "numero": 102, "capacite": 2 }
  ]
}`;
errorExample:string = `{
  "error_code": "Error code",
  "message": "Human-readable error message."
}`
constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  tryIt() {
    this.isLoading = true;
    this.responseData = null;
    this.error = null;

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });

    this.http.get(`${environment.apiUrl}/bloc/all`, { headers })
.subscribe({
      next: (data) => {
        this.responseData = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = err;
        this.isLoading = false;
      }
    });
  }
}

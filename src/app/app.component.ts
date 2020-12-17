import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'base64-app';
  inputBase64 = '';
  outputText = '';
  rows = 10;
  seasons: string[] = ['.bin', '.pdf', '.png', '.jpg'];
  formato = "";

  convertirToBase64(): void {
    this.outputText = '';
    this.outputText = btoa(this.inputBase64)
  }

  convertirToText(): void {
    this.outputText = '';
    this.outputText = atob(this.inputBase64)
  }

  clear(): void {
    this.outputText = '';
    this.inputBase64 = '';
    this.rows = 10;
  }



  descargarFile(): void {
    // The Base64 string of a simple PDF file
      var b64 = this.inputBase64;
      var d = new Date();

      var link = document.createElement('a');
      link.innerHTML = 'Download PDF file';

      if (this.formato === "") {
       this.formato = ".bin";
      }

      link.download = 'file_'+d.getTime()+this.formato;
      link.href = 'data:application/octet-stream;base64,' + b64;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  }
}



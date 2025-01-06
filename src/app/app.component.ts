import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'John Doe - Resume';
  pdfSrc = "a.pdf";
  currentPage: number = 1;
  totalPages: number = 0;
  
  // PDF viewer options
  pdfOptions = {
    renderText: true,
    originalSize: false,
    showAll: false,  // Disable showing all pages
  };

  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
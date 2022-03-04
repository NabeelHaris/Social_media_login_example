import { Component, ElementRef, ViewChild } from '@angular/core';
import {jsPDF} from 'jspdf';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'practice';

  // @ViewChild('content', {static: false}) content: ElementRef;

  // downloadPDF(){
    
  // }

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { Router } from '@angular/router';
@Component({
  selector: 'app-js-template',
  templateUrl: './js-template.component.html',
  styleUrls: ['./js-template.component.scss'],
})
export class JsTemplateComponent implements OnInit {
  title = 'practice';
  socialUser!: SocialUser;
  isLoggedin?: boolean;
 
  constructor(private router: Router, private socialAuthService: SocialAuthService) {}

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {
      console.log("user:", user);
      this.socialUser = user;
      this.isLoggedin = user != null;
      console.log(this.socialUser);
    });
 
  }

  downloadPDF() {
    // window.print();
    const data:any = document.getElementById('pdfTable');
    const windowPrt :any = window.open();
    windowPrt?.document.write(data.innerHTML);
    windowPrt.print();
    // windowPrt?.focus();
    // windowPrt?.print();
    // windowPrt?.close();

    // html2canvas(data).then((canvas) => {
    //   var imgWidth = 300;
    //   var pageHeight = 295;
    //   var imgHeight = (canvas.height * imgWidth) / canvas.width;
    //   var heightLeft = imgHeight;

    //   const contentDataURL = canvas.toDataURL('image/png');
    //   let pdf = new jsPDF('l', 'mm', 'a4'); // A4 size page of PDF
    //   pdf.setFont('normal')
    //   var position = 0;
    //   pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
    //   pdf.save('MYPdf.pdf'); // Generated PDF
    //   pdf.output();
    // })
  }
  signout(){
    this.socialAuthService.signOut().then((res) => {
      console.log("signout-res:", res);
      
      this.router.navigate(["/login"]);
    })
  }
}

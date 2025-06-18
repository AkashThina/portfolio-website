import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';

import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
 constructor(private router: Router) {}

projects() {
  const link = document.createElement('a');
  link.href = 'akash resume.pdf';     // relative to dist folder after build
  link.download = 'AkashThina Resume.pdf';
  link.click();


  // this.router.navigate(['/projects']);
}
}

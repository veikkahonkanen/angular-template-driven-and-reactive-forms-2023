import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, NgForm } from "@angular/forms";
import { User } from "./user";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'skills';
  user: User = {};

  constructor() {
    this.user = new User();
  }

  onSubmit(userDetails: User /*NgForm*/) {
    // console.log("Form submitted! ", userDetails.value.fName);
    // console.log(`First name: ${userDetails.controls["fName"].value} Last name: ${userDetails.controls["lName"].value}`);
    console.log(userDetails);
  }
}

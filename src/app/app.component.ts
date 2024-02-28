import { Component, ViewChild } from '@angular/core';
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
  @ViewChild("userDetails") userDetails!: NgForm;
  title = 'skills';
  user: User = {};
  departments: string[] = [ "sales", "accounting", "customerSupport", "contentCreation" ];
  prizes: string[] = [ "cash", "voucher", "lunch" ];
  selectedPrize: string = "";

  constructor() {
    this.user = new User();
    this.selectedPrize = this.prizes[0];
  }

  onSubmit(/* userDetails: User NgForm*/) {
    // console.log("Form submitted! ", userDetails.value.fName);
    // console.log(`First name: ${userDetails.controls["fName"].value} Last name: ${userDetails.controls["lName"].value}`);
    // console.log(userDetails);
    console.log(this.userDetails.value);
  }

  suggestEmail(event: any) {
    this.userDetails.form.patchValue({
      email: `${this.user.firstName}.${this.user.lastName}@skillsoft.com` 
    })
  }
}

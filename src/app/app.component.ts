import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userDetails = this.fb.group({
    fullName: this.fb.group({
      firstName: [ "", Validators.required ],
      lastName: [ "", Validators.required ],
    }),
    email: [ "", Validators.required, this.restrictEmail ],
    department: [ "", Validators.required ]
  });

  constructor(private fb: FormBuilder) { }

  restrictEmail(control: AbstractControl): Promise<any> | Observable<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "axle@skillsoft.com") {
          resolve({ restrictEmail: false });
        } else {
          null;
        }
      }, 1500);
    });
  }

  onSubmit(userDetails: FormGroup) {
    console.log(this.userDetails.value);
  }

}

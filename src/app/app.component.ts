import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from "@angular/forms";
// import { User } from "./user";
import { CommonModule } from '@angular/common';

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
export class AppComponent implements OnInit {
  userDetails!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userDetails = new FormGroup({
      fgFullName: new FormGroup({
        firstName: new FormControl(null, [ Validators.required, Validators.minLength(2), this.alphaCheck ]),
        lastName: new FormControl(null, [ Validators.required, Validators.minLength(2), this.alphaCheck ]),
      }),
      email: new FormControl(null, Validators.minLength(2)),
      department: new FormControl(),
      prizes: new FormArray([
        new FormControl(null),
        new FormControl(null),
        new FormControl(null),
      ])
    });
  }

  onSubmit() {
    console.log(this.userDetails);
  }

  alphaCheck(control: AbstractControl): { [ key: string ]: boolean } | null {
    const regExp: RegExp = /^[A-Za-z]+$/;
    const cValue = control.value;
    if (!regExp.test(cValue)) {
      return { alphaCheck: true };
    }
    return null;
  }

  get firstName() {
    return this.userDetails?.get("fgFullName")?.get("firstName")!;
  }

  get lastName() {
    return this.userDetails?.get("fgFullName")?.get("lastName")!;
  }

  get email() {
    return this.userDetails.get("email")!;
  }

  get department() {
    return this.userDetails.get("department")!;
  }

  get allPrizes() {
    return this.userDetails.get("prizes")! as FormArray;
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './fecha.component.html',
  styleUrls: ['./fecha.component.css']
})
export class DatePickerComponent {
  dateForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.dateForm = this.fb.group({
      checkIn: ['', Validators.required],
      checkOut: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.dateForm.valid) {
      const { checkIn, checkOut } = this.dateForm.value;
      // Aquí puedes manejar la lógica de selección de fechas
      console.log('Check-In:', checkIn);
      console.log('Check-Out:', checkOut);
    }
  }
}
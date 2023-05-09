import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html'
})
export class TestFormComponent {
  nameForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required])
  })

  submitForm() {
    if (this.nameForm.valid) {
      var strFirstName = this.nameForm.controls.firstName.value;
      var strLastName = this.nameForm.controls.lastName.value;

      alert("Données sauvegardées! Merci " + strFirstName + " " + strLastName);
    }
  }
}

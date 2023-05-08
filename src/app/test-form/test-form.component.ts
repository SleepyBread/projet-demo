import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html'
})
export class TestFormComponent {
  nameForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  })

  submitForm() {
    if (this.nameForm.valid) {
      var strFirstName = this.nameForm.controls.firstName.value;
      var strLastName = this.nameForm.controls.lastName.value;

      alert("Données sauvegardées! Merci " + strFirstName + " " + strLastName);
    }
  }
}

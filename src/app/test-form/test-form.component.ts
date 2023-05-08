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
      alert("Données sauvegardées!");
    }
  }
}

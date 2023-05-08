import { Component } from '@angular/core';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html'
})
export class TestFormComponent {
  submitForm(): void {
    console.log("Form submitted");
  }
}

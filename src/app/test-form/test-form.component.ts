import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html'
})
export class TestFormComponent {
  @ViewChild('lastName') lastName!: ElementRef<HTMLInputElement>;
  @ViewChild('firstName') firstName!: ElementRef<HTMLInputElement>;

  submitForm(): void {
    let strName = this.firstName.nativeElement.value + ' ' + this.lastName.nativeElement.value;

    console.log(strName);
  }
}

import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { TestFormComponent } from './test-form.component';

describe('TestFormComponent', () => {
  let component: TestFormComponent;
  let fixture: ComponentFixture<TestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestFormComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when submit button is pressed', () => {
    it('should submit form when fields are filled', fakeAsync(() => {
      component.nameForm.setValue({
        firstName: 'firstName',
        lastName: 'lastName'
      })

      spyOn(window, 'alert');

      let button = fixture.debugElement.nativeElement.querySelector('#submitButton');
      button.click();
      tick();

      expect(window.alert).toHaveBeenCalled();
    }));

    it('should not submit form when a field is empty', fakeAsync(() => {
      component.nameForm.setValue({
        firstName: 'firstName',
        lastName: ''
      })

      spyOn(window, 'alert');

      let button = fixture.debugElement.nativeElement.querySelector('#submitButton');
      button.click();
      tick();

      expect(window.alert).not.toHaveBeenCalled();
    }));
  });
});

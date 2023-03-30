import { Component } from '@angular/core';
import { FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {


  // submit() {

  //   // Fetch all the forms we want to apply custom Bootstrap validation styles to
  //   const forms = document.querySelectorAll('.needs-validation')

  //   // Loop over them and prevent submission
  //   Array.from(forms).forEach(form => {
  //     form.addEventListener('submit', event => {
  //       if (!form.checkValidity()) {
  //         event.preventDefault()
  //         event.stopPropagation()
  //       }

  //       form.classList.add('was-validated')
  //     }, false)
  //   })
  // }
  validationForm: FormGroup;

  constructor() {
    this.validationForm = new FormGroup({
      firstName: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
      lastName: new FormControl(null, { validators: Validators.required, updateOn: 'submit' }),
    });
  }

  get firstName(): AbstractControl {
    return this.validationForm.get('firstName')!;
  }

  get lastName(): AbstractControl {
    return this.validationForm.get('lastName')!;
  }

  onSubmit(): void {
    this.validationForm.markAllAsTouched();
  }
}

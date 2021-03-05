import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  form : FormGroup;
  constructor(private fb: FormBuilder, private service: CountryService) { }

  ngOnInit(): void {

  this.form = this.fb.group({
    name: 'Kazakhstan',
    shortName: ''
  });

  setTimeout(() => this.form.patchValue({shortName: 'KZ'}), 3000)
}
 onSubmit() {
   console.log(this.form)
   console.log(this.form.value)
   console.log(this.form.status )

   this.service.create(this.form.value).subscribe((result) => {
     console.log(result)
   })
 }

}

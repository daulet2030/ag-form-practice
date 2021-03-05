import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private service: CountryService,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      id: '',
      name: '',
      shortName: '',
    });

    const id = this.activedRoute.snapshot.params.id;
    if (id) {
      this.service.get(id).subscribe((result) => this.form.patchValue(result));
    }
  }
  onSubmit() {
    console.log(this.form);
    console.log(this.form.value);
    console.log(this.form.status);

    if (this.form.value.id) {
      this.service.edit(this.form.value).subscribe((result) => {
        console.log(result);
      });
    } else {
      this.service.create(this.form.value).subscribe((result) => {
        console.log(result);
      });
    }
  }
}

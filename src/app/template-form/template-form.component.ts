import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  country : any = {};
  constructor() { }

  ngOnInit(): void {
    this.country = { name: "Kazakhstan", shortName: "KZ" }
  }

  onSubmit(form: FormGroup) {
      console.log(form)
      console.log(form.value)
      console.log(form.status)
      // http
  }
}

import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  list: any[];

  constructor(private service: CountryService) {}

  ngOnInit(): void {
    this.service.getList().subscribe((result) => this.list = result);
  }

  onEdit(id) {
      console.log(id)
  }
}

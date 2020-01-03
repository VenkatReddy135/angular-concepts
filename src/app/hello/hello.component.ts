import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  constructor(private es:EmployeeService) { }
  public employees=[];
  ngOnInit() {
    this.employees=this.es.venkat();
  }

}

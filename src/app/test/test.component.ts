import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import {EmployeeService} from '../employee.service'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input('parentData') public name; 
  @Output() public Event=new EventEmitter();
  public employees=[];
  public employees1;
  public errormsg;

  constructor(private es:EmployeeService) { }

  ngOnInit() {
this.employees=this.es.venkat();
 return this.es.venkat1().subscribe((data)=>this.employees1=data,
 
 error=>this.errormsg=error)
    
  }

  on(){
   this.Event.emit("child venkat")
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { TestComponent } from './test/test.component'
import { EmployeeService } from './employee.service';
import { HelloComponent } from './hello/hello.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    

  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'avengers';
  displayName;
  public name="venkat";
  public message2;
  num1="success"
  haserror="true";
  defend="true";
  obj={venkat:this.haserror,success:this.defend};
  hasend="blue";
 haserror1=true;
 message;
 value={color:"blue",fontStyle:"italic"}
 tring;
 temp;
 ravi="";
 color="xyz";
 colors=["red","blue","yellow","white"]
 employees=[{id:1, name:"ravit",location:"hyderabad"},{id:2, name:"tejj",location:"mumbai"}]

 hello(){
   console.log("venkat")
   this.message="welcome venkat";
  
 }
 add(x){
   console.log(x);
  this.tring=x.type

 }
 log(y){
  console.log(y);
 }
 see(){
   this.displayName=true;
 

}
hide(){
  this.displayName=false;
}
toggle(){
  this.displayName=!this.displayName;
}
sub(){
  
}
}

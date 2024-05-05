import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true // Add this line to mark the component as standalone
})
export class AppComponent {
  title = 'Registration Form';

  displayname='';
  displayaddress='';
  displaycontact='';
  displayemail='';

  getValue(name:string, address:string, contact:string, email:string ){
    this.displayname =name;
    this.displayaddress=address;
    this.displaycontact=contact;
    this.displayemail=email;
  }
}
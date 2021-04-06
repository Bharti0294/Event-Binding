import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EventBinding';

  months = ["January", "Feburary", "March", "April",
  "May", "June", "July", "August", "September",
  "October", "November", "December"];
isavailable = true;
myClickFunction(event: any) {
alert("Button is clicked");
console.log(event);
}
changemonths(event: any) {
console.log("Changed month from the Dropdown");
console.log(event);
}
}



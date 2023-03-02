import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navabar',
  templateUrl: './navabar.component.html',
  styleUrls: ['./navabar.component.css']
})
export class NavabarComponent {
constructor(private router : Router){
}
navigate(){
  this.router.navigateByUrl('contacts')
}
}

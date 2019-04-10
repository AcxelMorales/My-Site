import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oculto: boolean = true;

  mostrar(): void {
    this.oculto = false;
  }

  ocultar(): void {
    this.oculto = true;
  }

}
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',  // Selector del componente
  standalone: true,  // Si es un componente independiente
  imports: [],  // Si el componente no importa otros módulos
  templateUrl: './footer.component.html',  // Ruta del archivo HTML
  styleUrls: ['./footer.component.css']  // Corrección: styleUrls en plural
})
export class FooterComponent {
  // Lógica del componente (si es necesaria)
}

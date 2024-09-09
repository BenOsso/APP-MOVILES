import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  nombre: string | null = '';
  apellido: string | null = '';

  constructor(private router: Router) {}

  ngOnInit() {
    // Recuperar el estado pasado desde la navegación
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      const state = navigation.extras.state as { nombre: string; apellido: string };
      this.nombre = state.nombre || 'Invitado';
      this.apellido = state.apellido || '';
    } else {
      this.nombre = 'Invitado';
      this.apellido = '';
    }
  }
}

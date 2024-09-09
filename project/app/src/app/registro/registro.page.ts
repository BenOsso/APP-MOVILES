import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  // Inicializa las variables como cadenas vacías
  email: string = '';
  password: string = '';

  constructor(private navCtrl: NavController) {}

  register() {
    // Verifica si las variables tienen valor antes de procesar
    if (this.email && this.password) {
      console.log('Email:', this.email);
      console.log('Password:', this.password);
      this.navCtrl.navigateRoot('/login');
    } else {
      console.error('Email or password is missing');
    }
  }
}

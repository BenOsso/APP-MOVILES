import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  correo: string = "";
  clave: string = "";
  nombre: string = "";
  apellido: string = "";
  fechaNacimiento: Date | null = null;

  user1: string = "josue@duoc.cl";
  clave1: string = "12345";

  constructor(
    private toastController: ToastController, 
    private router: Router
  ) {}

  clearInputs() {
    this.nombre = "";
    this.apellido = "";
    this.fechaNacimiento = null;
  }

  PasarDatos() {
    if (this.correo === this.user1 && this.clave === this.clave1) {
      let navigationExtras = {
        state: {
          nombre: this.nombre,
          apellido: this.apellido
        }
      };
      this.router.navigate(['/inicio'], navigationExtras);
    } else {
      this.presentToast("Usuario y/o contraseña incorrecta");
    }
  }

  async presentToast(msj: string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 1500,
      position: 'bottom',
    });

    await toast.present();
  }
}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent {

  constructor(private http: HttpClient) {}

  partidaForm = new FormGroup({
    name: new FormControl('', Validators.required),
    code: new FormControl('', Validators.required),
    rol: new FormControl('', Validators.required)
  });

  generarCodigo() {
    const codigo = Math.floor(Math.random() * 16777215).toString(16);
    const codeControl = this.partidaForm.get('code');
    if (codeControl) {
      codeControl.setValue(codigo);
    }
  }

  crearPartida(game: any) {
    // Hacer una solicitud POST a la API para crear la
    this.http.post('http://localhost:3000/games', game).subscribe({
      next: (response) => {
        // console.log('Partida creada:', response);
        Swal.fire({
          title: 'Nueva partida creada',
          icon: 'success',
          showConfirmButton: true,
          timer: 2500
        });
        this.partidaForm.reset();
      },
      error: (error) => {
        console.error('Error al crear la partida:', error);
      }
    });
  }

}

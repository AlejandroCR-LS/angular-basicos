import { Component } from '@angular/core';
import { HeroeComponent } from '../Heroe/heroe.component';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {

    heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Capitan America' ];
    heroeBorrado: string = '';

    borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
    }
}


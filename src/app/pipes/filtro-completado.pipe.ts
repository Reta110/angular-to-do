import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filtroCompletado',
  pure: false
})
export class FiltroCompletadoPipe implements PipeTransform {

  transform(listas: Lista[], completada: boolean = true): Lista[] {

  	//Esta es la otra forma de hacerlo si la funcion tiene mas de una linea
  	// listas.filter( lista => {
  	// 	return lista.terminada === completada;
  	// });

    return listas.filter( lista => lista.terminada === completada );

  }

}

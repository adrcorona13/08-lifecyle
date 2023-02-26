import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-muestra-nombre',
  templateUrl: './muestra-nombre.component.html'
})
export class MuestraNombreComponent implements OnChanges {
  @Input() nombre: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(changes);
    
  }
}

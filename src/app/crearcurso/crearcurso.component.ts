import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Cursos } from '../cursos';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crearcurso',
  templateUrl: './crearcurso.component.html',
  styleUrls: ['./crearcurso.component.scss']
})
export class CrearcursoComponent implements OnInit {

  mis_notas = [
    {id:1, titulo: 'Física', promedio: '6.7' },
    {id:2, titulo: 'Matemáticas', promedio: '5.0' },
    {id:3, titulo: 'Programación', promedio: '3.0' },
    {id:4, titulo: 'Ingeniería Web', promedio: '6.9' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  crearNota(){
    
  }
}

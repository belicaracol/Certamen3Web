import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  mis_notas = [
    {id:1, titulo:'Fisica', n1:5.2, p1: 0.20, n2: 6.1, p2:0.25, n3: 7.0, p3:0.25, n4: 5.2, p4:0.10, n5: 5.2, p5:0.20, 
    },
    {id:2, titulo:'Matematicas', n1:4.2, p1: 0.20, n2: 5.1, p2:0.25, n3: 7.0, p3:0.25, n4: 5.2, p4:0.10, n5: 5.2, p5:0.20, 
    },
    {id:3, titulo:'Programacion', n1:3.2, p1: 0.20, n2: 2.1, p2:0.25, n3: 2.0, p3:0.25, n4: 3.2, p4:0.10, n5: 1.2, p5:0.20, 
    },
    {id:4, titulo:'Ingenieria Web', n1:6.2, p1: 0.20, n2: 6.1, p2:0.25, n3: 7.0, p3:0.25, n4: 5.2, p4:0.10, n5: 5.2, p5:0.20, 
    }
    ];
    nota = {id:NaN, titulo:'', n1:NaN, p1:NaN, n2:NaN, p2:NaN, n3:NaN, p3:NaN, n4:NaN, p4:NaN, n5:NaN, p5:NaN}
    show_form = false;
    editable = false;
    agregarNota(){
      this.editable = false;
      this.show_form = true;
      this.nota = {id:NaN, titulo:'', n1:NaN, p1:NaN, n2:NaN, p2:NaN, n3:NaN, p3:NaN, n4:NaN, p4:NaN, n5:NaN, p5:NaN}
    }
    cancelNota(nota:any){
      this.nota = {id:NaN, titulo:'', n1:NaN, p1:NaN, n2:NaN, p2:NaN, n3:NaN, p3:NaN, n4:NaN, p4:NaN, n5:NaN, p5:NaN}
      this.show_form = false;
    }
    crearNota(){
      if(this.editable){
        var me = this;
        this.mis_notas.forEach(function(el, i){
            if(el.id === me.nota.id){
              me.mis_notas[i] = me.nota;
            }
        });
        me.show_form = false;
        me.nota = {id:NaN, titulo:'', n1:NaN, p1:NaN, n2:NaN, p2:NaN, n3:NaN, p3:NaN, n4:NaN, p4:NaN, n5:NaN, p5:NaN}
      }else{
      this.nota.id = this.mis_notas.length+1;
      this.mis_notas.push(this.nota);
      this.show_form = false;
      this.nota = {id:NaN, titulo:'', n1:NaN, p1:NaN, n2:NaN, p2:NaN, n3:NaN, p3:NaN, n4:NaN, p4:NaN, n5:NaN, p5:NaN}
      }
    }
    verNota(nota:any){
      this.editable = true;
      this.nota=nota;
      this.show_form = true;
      var id,titulo,n1,p1,n2,p2,n3,p3,n4,p4,n5,p5:any;
      id=this.nota.id;
      titulo=this.nota.titulo;
      n1=this.nota.n1;
      p1=this.nota.p1;
      n2=this.nota.n2;
      p2=this.nota.p2;
      n3=this.nota.n3;
      p3=this.nota.p3;
      n4=this.nota.n4;
      p4=this.nota.p4;
      n5=this.nota.n5;
      p5=this.nota.p5;
      var nota2:any;
      nota2={id,titulo,n1,p1,n2,p2,n3,p3,n4,p4,n5,p5};
      console.log(nota2);
    }

  constructor() { }

  ngOnInit(): void {
  }

  calcPromedio(n1:number,p1:number,n2:number,p2:number,n3:number,p3:number,n4:number,p4:number,n5:number,p5:number){
      var promedio=(n1*p1)+(n2*p2)+(n3*p3)+(n4*p4)+(n5*p5);
      return promedio;
  }
}

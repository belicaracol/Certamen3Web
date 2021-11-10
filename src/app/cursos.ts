export interface Cursos {
    id:number;
    titulo:string;
    n1:number;
    p1:number;
    n2:number;
    p2:number;
    n3:number;
    p3:number;
    n4:number;
    p4:number;
    n5:number;
    p5:number;
    promedio:number;
}

export let NotasParciales:Array<Cursos>=[
    {
        id:1, 
        titulo:"Fisica",
        n1: 5.2,
        p1:0.20,
        n2: 6.1,
        p2:0.25,        
        n3: 7.0,
        p3:0.25,        
        n4: 5.2,
        p4:0.10,        
        n5: 5.2,
        p5:0.20,
        promedio: 6.9,       
    },
    {
        id:2, 
        titulo:"Matematicas",
        n1: 5.2,
        p1:0.20,
        n2: 6.1,
        p2:0.25,        
        n3: 7.0,
        p3:0.25,        
        n4: 5.2,
        p4:0.10,        
        n5: 5.2,
        p5:0.20,
        promedio: 6.9, 
    },
    {
        id:3, 
        titulo:"Programacion",
        n1: 5.2,
        p1:0.20,
        n2: 6.1,
        p2:0.25,        
        n3: 7.0,
        p3:0.25,        
        n4: 5.2,
        p4:0.10,        
        n5: 5.2,
        p5:0.20,
        promedio: 6.9, 
    },
    {
        id:4, 
        titulo:"Ingenieria Web",
        n1: 5.2,
        p1:0.20,
        n2: 6.1,
        p2:0.25,        
        n3: 7.0,
        p3:0.25,        
        n4: 5.2,
        p4:0.10,        
        n5: 5.2,
        p5:0.20,
        promedio: 6.9, 
    },
]
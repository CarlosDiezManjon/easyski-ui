import { Profesor } from './profesor.model';
export class Clase {
    constructor(
        public idClase: BigInteger = null,
        public profesor: Profesor = new Profesor(),
        public fhInicio: Date = null,
        public fhFin: Date = null,
        public cliente: string = "",
        public numAlumnos: number = null
    ) { }

}
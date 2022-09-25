import { Dificultad } from "./dificultad";
import { Estado } from "./estado";
import { Trabajador } from "./trabajador";
import { Urgencia } from "./urgencia";

export class Ticket {
  id_ticket? : number;
	trabajador? :  Trabajador;
	estado? :Estado;
  urgencia? :Urgencia;
	dificultad? :Dificultad;
	titulo? : string;
	descripcion? : string;
	equipo? : string;
	estrellas? :number;
	opinion? : string;
}

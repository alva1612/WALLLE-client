export interface Estado {

    id_estado: number;
    descripcion:string;

}
export interface Dificultad {

    id_dificultad: number;
    descripcion:string;

}
export interface Ticket {
  id_ticket?: number;
  idTicket?: number;
	trabajador? :  Trabajador;
    usuario? :  Trabajador;
	estado? :Estado;
    urgencia? :Urgencia;
	dificultad? :Dificultad;
	titulo? : string;
	descripcion? : string;
	equipo? : string;
	estrellas? :number;
	opinion? : string;
    fechaCreacion? : string;
	correo_cliente? : string;
	fecha_creacion? : string;
}
export interface Trabajador {

    id_trabajador: number;
    id_rol?:string;
    documento?:string;
    nombres?:string;
    apellidos?:string;
    correo?:string;
    descripcion?:string;
    usuario?:string;
    password?:string;


}

export interface Trabajador2 {

    id_trabajador?: number;
    rol? :Rol
    documento?:string;
    nombres?:string;
    apellidos?:string;
    correo?:string;
    descripcion?:string;
    usuario?:string;
  


}

export interface Urgencia {

    id_urgencia: number;
    descripcion:string;
}

export interface Rol {

    id_rol: number;
    descripcion:string;
}

export interface Feedback {
  id_ticket: number,
  estrellas: number,
  opinion: string
}

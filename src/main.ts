type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Paciente {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Paciente[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 180,
    especialidad: "Pediatra",
    edad: 11,
  },
];

//APARTADO 1 ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Queremos extraer la lista de paciente que están asignados a la especialidad de Pediatría
const pacientesDePediatria = (pacientes: Paciente[]) => {
  const pacientesAsignados = pacientes.filter(
    (p) => p.especialidad === "Pediatra"
  );
  const nombrePacientes = pacientesAsignados.map((pa) => pa.nombre);

  return nombrePacientes;
};

console.log(pacientesDePediatria(pacientes));

//Queremos extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.
const menoresDeDiezAñosParaPediatria = (pacientes: Paciente[]) => {
  const pacientesAsignados = pacientes.filter(
    (p) => p.especialidad === "Pediatra" && p.edad < 10
  );

  const nombre = pacientesAsignados.map((n) => n.nombre);

  return nombre;
};

//APARTADO 2 ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

console.log(menoresDeDiezAñosParaPediatria(pacientes));

//Queremos activar el protocolo de urgencia si cualquier de los pacientes tiene un ritmo cardíaco superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados.
const activarProtocoloUrgencia = (pacientes: Paciente[]) => {
  const constantesDePacientes = pacientes.find(
    (p) => p.frecuenciaCardiaca > 100 && p.temperatura > 39
  );

  if (constantesDePacientes) {
    console.log("🚨🚨🚨 ACTIVAMOS EL PROTOCOLO DE URGENCIA!!!! 🚨🚨🚨");
  }
};

//SE HA MODIFICADO LA FRECUENTACIA CARDÍACA DEL ULTIMO PACIENTE PARA QUE CUMPLIERA AL MENOS 1 LA CONDICIÓN Y SALTE LA FUNCIÓN.
activarProtocoloUrgencia(pacientes);

//APARTADO 3 ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//El pediatra no puede atender hoy a los pacientes, queremos reasignar los pacientes asignados a la especialidad de pediatría a la de medico de familia.
const reasignarPacientesPediatria = (pacientes: Paciente[]) => {
  pacientes.map((p) => (p.especialidad = "Medico de familia"));
};

reasignarPacientesPediatria(pacientes);

//Comprobamos que ya no hay ningun paciente asignado a Pediatría:
console.log(`Pacientes de Pediatría: ${pacientesDePediatria(pacientes)}`);

//APARTADO 4 ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Queremos saber si podemos mandar al Pediatra a casa (si no tiene pacientes asignados), comprobar si en la lista hay algún paciente asignado a pediatría
const HayPacientesDePediatria = (pacientes: Paciente[]): boolean => {
  let hayPacientes = false;

  if (pacientes.every((p) => p.especialidad === "Pediatra")) {
    hayPacientes = true;
  }

  return hayPacientes;
};

console.log(
  `¿¿Hay pacientes para Pediatría?? ${HayPacientesDePediatria(pacientes)}`
);

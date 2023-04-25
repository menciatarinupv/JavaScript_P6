var unaPersona ={
    dni : "03154110K",
    nombre : "Mencia",
    apellidos : "Tarín García",
    edad : 19,
    telefono : ["654321432", "654654654"]
}
var textoMencia = JSON.stringify(unaPersona)
//console.log(unaPersona)
//console.log(unaPersona.apellidos)
var mencia = JSON.parse(textoMencia)
//console.log(mencia)


//----------------------------------------------------------------------
//----------------------------------------------------------------------
var horario = {
  lunes : {
    0815: "Telemática",
    0915:"Cine",
    1100:"Castellano",
    1230: "Masas"
   },
  martes : {
    1030: "Telemática",
    1130:"Redes",
    1230:"Castellano" 
  },
  miercoles :{
    0800:"Inglés",
    1030:"Programación",
    1200:"Comunicación"
    },
  jueves : {
    0800:"Cine",
    1015:"Masas",
    1230:"Teatro",
    1500:"Redes"
    },
  viernes : {
    0930:"Comunicación",
    1100:"Telemática" 
  }
}

function buscarAsignatura(asignatura) {
  let resultado = '';
  for (let dia in horario) {
    for (let hora in horario[dia]) {
      if (horario[dia][hora] === asignatura) {
        resultado += `${dia} a las ${hora}, `;
      }
    }
  }
  if (resultado !== '') {
    resultado = `La asignatura "${asignatura}" se encuentra los días ${resultado.slice(0, -2)}`;
  } else {
    resultado = `La asignatura "${asignatura}" no se encuentra en el horario.`;
  }
  return resultado;
}
console.log(buscarAsignatura("Telemática"))
console.log(buscarAsignatura("Arquitectura"))



  


var codeLoca = [
    {codigo:"1",localidad:"USAQUEN"},
    {codigo:"2",localidad:"CHAPINERO"},
    {codigo:"3",localidad:"SANTA FE"},
    {codigo:"4",localidad:"SAN CRISTOBAL"},
    {codigo:"5",localidad:"USME"},
    {codigo:"6",localidad:"TUNJUELITO"},
    {codigo:"7",localidad:"BOSA"},
    {codigo:"8",localidad:"KENNEDY"},
    {codigo:"9",localidad:"FONTIBON"},
    {codigo:"10",localidad:"ENGATIVA"},
    {codigo:"11",localidad:"SUBA"},
    {codigo:"12",localidad:"BARRIOS UNIDOS"},
    {codigo:"13",localidad:"TEUSAQUILLO"},
    {codigo:"14",localidad:"LOS MARTIRES"},
    {codigo:"15",localidad:"ANTONIO NARIÑO"},
    {codigo:"16",localidad:"PUENTE ARANDA"},
    {codigo:"17",localidad:"LA CANDELARIA"},
    {codigo:"18",localidad:"RAFAEL URIBE URIBE"},
    {codigo:"19",localidad:"CIUDAD BOLIVAR"},
    {codigo:"20",localidad:"SUMAPAZ"},
]

//Calcular edad
document.addEventListener('selectionchange', e => {

    var fecha = new Date(document.getElementById("fechaNacimiento").value)
    var fechaHoy = new Date()

    //var nacimiento=new Date(fecha)


    if (fechaHoy.getDate() >= fecha.getDate() + 1 && fechaHoy.getMonth() + 1 >= fecha.getMonth() + 1) {
        document.getElementById("edad").value = fechaHoy.getFullYear() - fecha.getFullYear()

    }
    else {
        document.getElementById("edad").value = (fechaHoy.getFullYear() - fecha.getFullYear()) - 1
    }

})

//Códigos localidades
document.addEventListener('keyup', e => {

    var codigoIngresado;

    codigoIngresado = document.getElementById("codigo").value;

    for (var i = 0; i < codeLoca.length; i++) {
        if (codigoIngresado.toUpperCase() == codeLoca[i].codigo) {
            document.getElementById("localidad").value = codeLoca[i].localidad
        }
    }

})

document.addEventListener('keyup', e => {

    var nombreIngresado;

    nombreIngresado = document.getElementById("localidad").value;

    for (var i = 0; i < codeLoca.length; i++) {
        if (nombreIngresado.toUpperCase() == codeLoca[i].localidad) {
            document.getElementById("codigo").value = codeLoca[i].codigo
        }
    }

})

//bases de datos

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, addDoc, collection, getDocs, updateDoc, doc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyAAM9wEDvpMSXZN5qhrFP_jcuSeInfvYjc",
    authDomain: "historiaclinica-9aeb5.firebaseapp.com",
    projectId: "historiaclinica-9aeb5",
    storageBucket: "historiaclinica-9aeb5.appspot.com",
    messagingSenderId: "529483926572",
    appId: "1:529483926572:web:52b3a116e1ae8a3453d589",
    measurementId: "G-ETXFHVREVE"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;

        send.addEventListener('click', (e) => {
            //Datos personales
            var fecha = document.getElementById("fecha").value
            var tipoIdentificacion = document.getElementById("identificacion").value
            var numeroIdentificacion = document.getElementById("numero").value
            var apellidos = document.getElementById("apellidos").value
            var nombres = document.getElementById("nombres").value
            var genero = document.getElementById("genero").value
            var fechaNacimiento = document.getElementById("fechaNacimiento").value
            var edad = document.getElementById("edad").value
            var procedencia = document.getElementById("procedencia").value
            var ocupacion = document.getElementById("ocupacion").value
            var direccionResidencia = document.getElementById("direccionResidencia").value
            var barrio = document.getElementById("barrio").value
            var telefono = document.getElementById("telefono").value
            var localidad = document.getElementById("localidad").value
            var codigo = document.getElementById("codigo").value
            var procedencia2 = document.getElementById("procedencia2").value
            var acompañante = document.getElementById("acompañante").value
            var parentesco2 = document.getElementById("parentesco2").value
            var telefono2 = document.getElementById("telefono2").value
            var fechaUltimoControl = document.getElementById("fechaUltimoControl").value
            var eps = document.getElementById("eps").value
            var tipoAfiliacion = document.getElementById("tipoAfiliacion").value

            //Anamnesis
            var motivoConsulta = document.getElementById("motivoConsulta").value

            //Lentes en uso
            var material = document.getElementById("material").value
            var tipoLente = document.getElementById("tipoLente").value
            var lejanaEsferaOD = document.getElementById("lejanaEsferaOD").value
            var lejanaCilindroOD = document.getElementById("lejanaCilindroOD").value
            var lejanaEjeOD = document.getElementById("lejanaEjeOD").value
            var lejanaAVOD = document.getElementById("lejanaAVOD").value
            var proximaEsferaOD = document.getElementById("proximaEsferaOD").value
            var proximaCilindroOD = document.getElementById("proximaCilindroOD").value
            var proximaEjeOD = document.getElementById("proximaEjeOD").value
            var proximaAVOD = document.getElementById("proximaAVOD").value
            var filtro = document.getElementById("filtro").value
            var lejanaEsferaOI = document.getElementById("lejanaEsferaOI").value
            var lejanaCilindroOI = document.getElementById("lejanaCilindroOI").value
            var lejanaEjeOI = document.getElementById("lejanaEjeOI").value
            var lejanaAVOI = document.getElementById("lejanaAVOI").value
            var proximaEsferaOI = document.getElementById("proximaEsferaOI").value
            var proximaCilindroOI = document.getElementById("proximaCilindroOI").value
            var proximaEjeOI = document.getElementById("proximaEjeOI").value
            var proximaAVOI = document.getElementById("proximaAVOI").value
            var dosPares = document.getElementById("dosPares").value

            //Queratometría
            var queratometriaOD = document.getElementById("queratometriaOD").value
            var queratometriaOI = document.getElementById("queratometriaOI").value

            //Tipo de caso
            var tipoCaso = document.getElementById("tipoCaso").value

            //Topografía
            var topografiaOD = document.getElementById("topografiaOD").value
            var topografiaOI = document.getElementById("topografiaOI").value

            //Biomicroscopia
            var descripcionBiomicroscopiaOD = document.getElementById("descripcionBiomicroscopiaOD").value
            var descripcionBiomicroscopiaOI = document.getElementById("descripcionBiomicroscopiaOI").value

            //Observaciones
            var observaciones = document.getElementById("observaciones").value

            //Lentes de prueba
            var curvaBaseOD = document.getElementById("curvaBaseOD").value
            var poderOD = document.getElementById("poderOD").value
            var diametroOD = document.getElementById("diametroOD").value
            var diseñoCAOD = document.getElementById("diseñoCAOD").value
            var diseñoCPOD =document.getElementById("diseñoCPOD").value
            var materialOD = document.getElementById("materialOD").value
            var curvaBaseOI = document.getElementById("curvaBaseOI").value
            var poderOI = document.getElementById("poderOI").value
            var diametroOI = document.getElementById("diametroOI").value
            var diseñoCAOI = document.getElementById("diseñoCAOI").value
            var diseñoCPOI =document.getElementById("diseñoCPOI").value
            var materialOI = document.getElementById("materialOI").value
            
            //Sobre-refracción
            var refraccionOD = document.getElementById("refraccionOD").value
            var refraccionAVOD = document.getElementById("refraccionAVOD").value
            var refraccionOI = document.getElementById("refraccionOI").value
            var refraccionAVOI = document.getElementById("refraccionAVOI").value

            //Sobre_subjetivo
            var subjetivoOD = document.getElementById("subjetivoOD").value
            var subjetivoAVOD = document.getElementById("subjetivoAVOD").value
            var subjetivoOI = document.getElementById("subjetivoOI").value
            var subjetivoAVOI = document.getElementById("subjetivoAVOI").value

            //Fluorograma
            var observacionesFluorograma = document.getElementById("observacionesFluorograma").value

            //Lente solicitar
            var curvaBaseOD2 = document.getElementById("curvaBaseOD2").value
            var poderOD2 = document.getElementById("poderOD2").value
            var diametroOD2 = document.getElementById("diametroOD2").value
            var diseñoCAOD2 = document.getElementById("diseñoCAOD2").value
            var diseñoCPOD2 =document.getElementById("diseñoCPOD2").value
            var materialOD2 = document.getElementById("materialOD2").value
            var curvaBaseOI2 = document.getElementById("curvaBaseOI2").value
            var poderOI2 = document.getElementById("poderOI2").value
            var diametroOI2 = document.getElementById("diametroOI2").value
            var diseñoCAOI2 = document.getElementById("diseñoCAOI2").value
            var diseñoCPOI2 =document.getElementById("diseñoCPOI2").value
            var materialOI2 = document.getElementById("materialOI2").value
            var horarioUso = document.getElementById("horarioUso").value
            var liquidosRecomendados = document.getElementById("liquidosRecomendados").value
            var observacionesAdicionales = document.getElementById("observacionesAdicionales").value
            var conducta = document.getElementById("conducta").value

            //Control
            var controlDB = document.getElementById("controlDB").value
            var horaSalida = document.getElementById("horaSalida").value
            var estudiante = document.getElementById("estudiante").value
            var profesor = document.getElementById("profesor").value
            var noFactura = document.getElementById("noFactura").value
            var valorFactura = document.getElementById("valorFactura").value


            if (numeroIdentificacion.length != 0 && fecha.length != 0) {

                //Objeto datos personales
                var datosPersonales = {
                    Fecha: fecha,
                    Tipo_Identificacion: tipoIdentificacion,
                    Numero_Identificacion: numeroIdentificacion,
                    Apellidos: apellidos,
                    Nombres: nombres,
                    Genero: genero,
                    Fecha_Nacimiento: fechaNacimiento,
                    Edad: edad,
                    Procedencia: procedencia,
                    Ocupacion: ocupacion,
                    DireccionResidencia: direccionResidencia,
                    Barrio: barrio,
                    Telefono: telefono,
                    Localidad: localidad,
                    Codigo: codigo,
                    Zona: procedencia2,
                    Acompañante: acompañante,
                    Parentesco_Acompañante: parentesco2,
                    Telefono_Acompañante: telefono2,
                    Fecha_Ultimo_Control: fechaUltimoControl,
                    EPS: eps,
                    Tipo_afiliacion: tipoAfiliacion
                }

                //Objeto anamnesis
                var datosAnamnesis = {
                    Motivo_Consulta: motivoConsulta,
                }

                //Objeto lentes en uso
                var datosLentesUso = {
                    Material: material,
                    Tipo_Lente: tipoLente,
                    Lejana_Esfera_OD: lejanaEsferaOD,
                    Lejana_Cilindro_OD: lejanaCilindroOD,
                    Lejana_Eje_OD: lejanaEjeOD,
                    Lejana_AV_OD: lejanaAVOD,
                    Proxima_Esfera_OD: proximaEsferaOD,
                    Proxima_Cilindro_OD: proximaCilindroOD,
                    Proxima_Eje_OD: proximaEjeOD,
                    Proxima_AV_OD: proximaAVOD,
                    Filtro: filtro,
                    Lejana_Esfera_OI: lejanaEsferaOI,
                    Lejana_Cilindro_OI: lejanaCilindroOI,
                    Lejana_Eje_OI: lejanaEjeOI,
                    Lejana_AV_OI: lejanaAVOI,
                    Proxima_Esfera_OI: proximaEsferaOI,
                    Proxima_Cilindro_OI: proximaCilindroOI,
                    Proxima_Eje_OI: proximaEjeOI,
                    Proxima_AV_OI: proximaAVOI,
                    Dos_Pares: dosPares
                }

                //Objeto queratometria
                var datosQueratometria = {
                    Queratometria_OD: queratometriaOD,
                    Queratometria_OI: queratometriaOI,
                }

                //Objeto tipo de caso
                var datosTipoCaso = {
                    Tipo_Caso: tipoCaso
                }

                //Objeto topografía
                var datosTopografia = {
                    Topografia_OD: topografiaOD,
                    Topografia_OI: topografiaOI
                }

                //Objeto biomicroscopia
                var datosBiomicroscopia = {
                    Descripcion_Biomicroscopia_OD: descripcionBiomicroscopiaOD,
                    Descripcion_Biomicroscopia_OI: descripcionBiomicroscopiaOI
                }

                //Objeto observaciones
                var datosObservaciones = {
                    Observaciones: observaciones
                }

                //Objeto lentes prueba
                var datosLentesPrueba = {
                    Curva_Base_OD: curvaBaseOD,
                    Poder_OD: poderOD,
                    Diametro_OD: diametroOD,
                    Diseño_CA_OD: diseñoCAOD,
                    Diseño_CP_OD: diseñoCPOD,
                    Material_OD: materialOD,
                    Curva_Base_OI: curvaBaseOI,
                    Poder_OI: poderOI,
                    Diametro_OI: diametroOI,
                    Diseño_CA_OI: diseñoCAOI,
                    Diseño_CP_OI: diseñoCPOI,
                    Material_OI: materialOI,
                    
                }

                //Objeto sobre-refraccion
                var datosSobreRefraccion = {
                    Refraccion_OD: refraccionOD,
                    Refraccion_AV_OD: refraccionAVOD,
                    Refraccion_OI: refraccionOI,
                    Refraccion_AV_OI: refraccionAVOI
                }

                //Objeto sobre-subjetivo
                var datosSobreSubjetivo = {
                    Subjetivo_OD: subjetivoOD,
                    Subjetivo_AV_OD: subjetivoAVOD,
                    Subjetivo_OI: subjetivoOI,
                    Subjetivo_AV_OI: subjetivoAVOI
                }

                //Objeto fluorograma
                var datosFluorograma = {
                    Observaciones_Fluorograma: observacionesFluorograma
                }

                //Objeto pedir
                var datosLenteFinal = {
                    Curva_Base_OD: curvaBaseOD2,
                    Poder_OD: poderOD2,
                    Diametro_OD: diametroOD2,
                    Diseño_CA_OD: diseñoCAOD2,
                    Diseño_CP_OD: diseñoCPOD2,
                    Material_OD: materialOD2,
                    Curva_Base_OI: curvaBaseOI2,
                    Poder_OI: poderOI2,
                    Diametro_OI: diametroOI2,
                    Diseño_CA_OI: diseñoCAOI2,
                    Diseño_CP_OI: diseñoCPOI2,
                    Material_OI: materialOI2,
                    Horario_Uso: horarioUso,
                    Liquidos_Recomendados: liquidosRecomendados,
                    Observaciones_Adicionales: observacionesAdicionales,
                    Conducta: conducta
                }


                //Objeto Control
                var datosControl = {
                    Control: controlDB,
                    Hora_Salida: horaSalida,
                    Estudiante: estudiante,
                    Profesor: profesor,
                    No_Factura: noFactura,
                    Valor_Factura: valorFactura
                }

                addDoc(collection(db, "Clinic_History_Lentes", "Data", "Data_Lentes"), {
                    DatosPersonales: datosPersonales,
                    DatosAnamnesis: datosAnamnesis,
                    DatosLentesUso: datosLentesUso,
                    DatosQueratometria: datosQueratometria,
                    DatosTipoCaso: datosTipoCaso,
                    DatosTopografia: datosTopografia,
                    DatosBiomicroscopia: datosBiomicroscopia,
                    DatosObservaciones: datosObservaciones,
                    DatosLentesPrueba: datosLentesPrueba,
                    DatosSobreRefraccion: datosSobreRefraccion,
                    DatosSobreSubjetivo: datosSobreSubjetivo,
                    DatosFluorograma: datosFluorograma,
                    DatosLenteFinal: datosLenteFinal,
                    DatosControl: datosControl,
                    Usuario: user.uid
                }).then(() => {
                    Swal.fire({
                        title: "Felicidades",
                        text: "Los datos ya fueron guardados",
                        icon: "success",
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                        allowEnterKey: false,
                        stopKeydownPropagation: false
                    }).then((result) => {
                        if (result.isConfirmed) {
                            getDocs(collection(db, "Users", "User_id", "Private_Data")).
                                then((querySnapshot) => {
                                    querySnapshot.forEach((doc) => {
                                        if (doc.data().Id == uid) {
                                            if (doc.data().Rol == "Administrador") {
                                                location.href = "/views/home/homeAdmin.html"
                                            }
                                            else if (doc.data().Rol == "Estudiante") {
                                                location.href = "/views/home/homeStudent.html"
                                            }
                                            else if (doc.data().Rol == "Profesor") {
                                                location.href = "/views/home/homeTeacher.html"
                                            }
                                        }

                                    })
                                })
                        }
                    });
                })
            }
            else {
                Swal.fire({
                    title: "ERROR",
                    text: "Debes llenar todos los datos personales",
                    icon: "error"
                });

            }

        })

        exit.addEventListener('click', (e) => {
            e.preventDefault()
            getDocs(collection(db, "Users", "User_id", "Private_Data")).
                then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        if (doc.data().Id == uid) {
                            if (doc.data().Rol == "Administrador") {
                                location.href = "/views/home/homeAdmin.html"
                            }
                            else if (doc.data().Rol == "Estudiante") {
                                location.href = "/views/home/homeStudent.html"
                            }
                            else if (doc.data().Rol == "Profesor") {
                                location.href = "/views/home/homeTeacher.html"
                            }
                        }

                    })
                })
        })

        document.getElementById("numero").addEventListener('keydown', (event) => {
            var band = false
            if (event.key == "Enter") {
                // Hacer algo, tal vez deshacer
                getDocs(collection(db, "Clinic_History_Refraccion", "Data", "Data_Refraccion")).
                    then((querySnapshot) => {
                        querySnapshot.forEach((doc) => {
                            if (document.getElementById("numero").value == doc.data().DatosPersonales.Numero_Identificacion) {
                                band = true
                                document.getElementById("identificacion").value = doc.data().DatosPersonales.Tipo_Identificacion
                                document.getElementById("edad").value = doc.data().DatosPersonales.Edad
                                document.getElementById("apellidos").value = doc.data().DatosPersonales.Apellidos
                                document.getElementById("nombres").value = doc.data().DatosPersonales.Nombres
                                document.getElementById("genero").value = doc.data().DatosPersonales.Genero
                                document.getElementById("fechaNacimiento").value = doc.data().DatosPersonales.Fecha_Nacimiento
                                document.getElementById("procedencia").value = doc.data().DatosPersonales.Procedencia
                                document.getElementById("ocupacion").value = doc.data().DatosPersonales.Ocupacion
                                document.getElementById("direccionResidencia").value = doc.data().DatosPersonales.DireccionResidencia
                                document.getElementById("barrio").value = doc.data().DatosPersonales.Barrio
                                document.getElementById("telefono").value = doc.data().DatosPersonales.Telefono
                                document.getElementById("localidad").value = doc.data().DatosPersonales.Localidad
                                document.getElementById("codigo").value = doc.data().DatosPersonales.Codigo
                                document.getElementById("procedencia2").value = doc.data().DatosPersonales.Zona
                                document.getElementById("acompañante").value = doc.data().DatosPersonales.Acompañante
                                document.getElementById("parentesco2").value = doc.data().DatosPersonales.Parentesco_Acompañante
                                document.getElementById("telefono2").value = doc.data().DatosPersonales.Telefono_Acompañante
                                document.getElementById("fechaUltimoControl").value = doc.data().DatosPersonales.Fecha
                                document.getElementById("eps").value = doc.data().DatosPersonales.Eps
                                document.getElementById("tipoAfiliacion").value = doc.data().DatosPersonales.Tipo_Afiliacion
                            }
                        })
                    }).then(() => {
                        if (band == false) {
                            Swal.fire({
                                title: "ERROR",
                                text: "No se encontró ningún paciente con ese número de identificación",
                                icon: "error"
                            });
                        }
                    })
            }
        })

        getDocs(collection(db, "Users", "User_id", "Private_Data")).
            then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    if (doc.data().Rol == "Profesor") {
                        var teachers = document.getElementById("profesor")
                        var option = document.createElement('option')

                        teachers.appendChild(option)

                        option.value = doc.data().Nombre
                        option.textContent = doc.data().Nombre
                    }
                })
            })

    }
    else {
        Swal.fire({
            title: 'No hay usuarios logueados',
            icon: 'error',
            confirmButtonColor: '#d33',
            confirmButtonText: 'Ok',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            stopKeydownPropagation: false
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "/index.html";
            }
        });
    }
});

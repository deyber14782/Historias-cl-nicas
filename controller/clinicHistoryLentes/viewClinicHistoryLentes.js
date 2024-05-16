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

        Swal.fire({
            title: "Digita el número de documento del paciente",
            input: "number",
            inputPlaceholder: "Número de documento",
            confirmButtonText: 'OK',
            showCancelButton: true,
            cancelButtonText: 'Volver al menú',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            stopKeydownPropagation: false,
        }).then((result) => {
            if (result.isDismissed) {
                const uid = user.uid
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
            else if (result.isConfirmed && result.value.length != 0) {

                var band = false
                var fechas = []
                var documento
                getDocs(collection(db, "Clinic_History_Lentes", "Data", "Data_Lentes")).
                    then((querySnapshot) => {
                        querySnapshot.forEach((doc) => {
                            if (result.value == doc.data().DatosPersonales.Numero_Identificacion) {
                                band = true

                                fechas.push(doc.data().DatosPersonales.Fecha)
                                documento = doc.data().DatosPersonales.Numero_Identificacion
                            }
                        })
                    }).then(() => {
                        if (band == false) {
                            Swal.fire({
                                title: 'No se encontró ningún paciente',
                                icon: 'error',
                                confirmButtonColor: '#d33',
                                confirmButtonText: 'Ok',
                                allowOutsideClick: false,
                                allowEscapeKey: false,
                                allowEnterKey: false,
                                stopKeydownPropagation: false
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    window.location.href = "/views/clinicHistoryLentes/viewClinicHistoryLentes.html";
                                }
                            });
                        }
                    }).then(() => {
                        if (band == true) {
                            Swal.fire({
                                title: "Selecciona la historia clínica que deseas ver",
                                input: "select",
                                inputOptions: fechas,
                                inputPlaceholder: "Selecciona la historia clínica",
                                confirmButtonText: 'OK',
                                showCancelButton: true,
                                cancelButtonText: 'Volver al menú',
                                allowOutsideClick: false,
                                allowEscapeKey: false,
                                allowEnterKey: false,
                                stopKeydownPropagation: false,
                            }).then((result) => {
                                if (result.isDismissed) {
                                    const uid = user.uid
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
                                else if (result.isConfirmed && result.value.length != 0) {
                                    getDocs(collection(db, "Clinic_History_Lentes", "Data", "Data_Lentes")).
                                        then((querySnapshot) => {
                                            querySnapshot.forEach((doc) => {
                                                if (documento == doc.data().DatosPersonales.Numero_Identificacion && Swal.getInput("select").options[Swal.getInput("select").selectedIndex].text == doc.data().DatosPersonales.Fecha) {

                                                    //Datos personales
                                                    document.getElementById("fecha").value = doc.data().DatosPersonales.Fecha
                                                    document.getElementById("identificacion").value = doc.data().DatosPersonales.Tipo_Identificacion
                                                    document.getElementById("numero").value = doc.data().DatosPersonales.Numero_Identificacion
                                                    document.getElementById("apellidos").value = doc.data().DatosPersonales.Apellidos
                                                    document.getElementById("nombres").value = doc.data().DatosPersonales.Nombres
                                                    document.getElementById("genero").value = doc.data().DatosPersonales.Genero
                                                    document.getElementById("fechaNacimiento").value = doc.data().DatosPersonales.Fecha_Nacimiento
                                                    document.getElementById("edad").value = doc.data().DatosPersonales.Edad
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
                                                    document.getElementById("fechaUltimoControl").value = doc.data().DatosPersonales.Fecha_Ultimo_Control
                                                    document.getElementById("eps").value = doc.data().DatosPersonales.EPS
                                                    document.getElementById("tipoAfiliacion").value = doc.data().DatosPersonales.Tipo_afiliacion

                                                    //Anamnesis
                                                    document.getElementById("motivoConsulta").value = doc.data().DatosAnamnesis.Motivo_Consulta

                                                    //Lentes en uso
                                                    document.getElementById("material").value = doc.data().DatosLentesUso.Material
                                                    document.getElementById("tipoLente").value = doc.data().DatosLentesUso.Tipo_Lente
                                                    document.getElementById("lejanaEsferaOD").value = doc.data().DatosLentesUso.Lejana_Esfera_OD
                                                    document.getElementById("lejanaCilindroOD").value = doc.data().DatosLentesUso.Lejana_Cilindro_OD
                                                    document.getElementById("lejanaEjeOD").value = doc.data().DatosLentesUso.Lejana_Eje_OD
                                                    document.getElementById("lejanaAVOD").value = doc.data().DatosLentesUso.Lejana_AV_OD
                                                    document.getElementById("proximaEsferaOD").value = doc.data().DatosLentesUso.Proxima_Esfera_OD
                                                    document.getElementById("proximaCilindroOD").value = doc.data().DatosLentesUso.Proxima_Cilindro_OD
                                                    document.getElementById("proximaEjeOD").value = doc.data().DatosLentesUso.Proxima_Eje_OD
                                                    document.getElementById("proximaAVOD").value = doc.data().DatosLentesUso.Proxima_AV_OD
                                                    document.getElementById("filtro").value = doc.data().DatosLentesUso.Filtro
                                                    document.getElementById("lejanaEsferaOI").value = doc.data().DatosLentesUso.Lejana_Esfera_OI
                                                    document.getElementById("lejanaCilindroOI").value = doc.data().DatosLentesUso.Lejana_Cilindro_OI
                                                    document.getElementById("lejanaEjeOI").value = doc.data().DatosLentesUso.Lejana_Eje_OI
                                                    document.getElementById("lejanaAVOI").value = doc.data().DatosLentesUso.Lejana_AV_OI
                                                    document.getElementById("proximaEsferaOI").value = doc.data().DatosLentesUso.Proxima_Esfera_OI
                                                    document.getElementById("proximaCilindroOI").value = doc.data().DatosLentesUso.Proxima_Cilindro_OI
                                                    document.getElementById("proximaEjeOI").value = doc.data().DatosLentesUso.Proxima_Eje_OI
                                                    document.getElementById("proximaAVOI").value = doc.data().DatosLentesUso.Proxima_AV_OI
                                                    document.getElementById("dosPares").value = doc.data().DatosLentesUso.Dos_Pares

                                                    //Queratometría
                                                    document.getElementById("queratometriaOD").value = doc.data().DatosQueratometria.Queratometria_OD
                                                    document.getElementById("queratometriaOI").value = doc.data().DatosQueratometria.Queratometria_OI

                                                    //Tipos de caso
                                                    document.getElementById("tipoCaso").value = doc.data().DatosTipoCaso.Tipo_Caso

                                                    //Topografía
                                                    document.getElementById("topografiaOD").value = doc.data().DatosTopografia.Topografia_OD
                                                    document.getElementById("topografiaOI").value = doc.data().DatosTopografia.Topografia_OI

                                                    //Biomicroscopia
                                                    document.getElementById("descripcionBiomicroscopiaOD").value = doc.data().DatosBiomicroscopia.Descripcion_Biomicroscopia_OD
                                                    document.getElementById("descripcionBiomicroscopiaOI").value = doc.data().DatosBiomicroscopia.Descripcion_Biomicroscopia_OI

                                                    //Observaciones
                                                    document.getElementById("observaciones").value = doc.data().DatosObservaciones.Observaciones

                                                    //Lentes de prueba
                                                    document.getElementById("curvaBaseOD").value = doc.data().DatosLentesPrueba.Curva_Base_OD
                                                    document.getElementById("poderOD").value = doc.data().DatosLentesPrueba.Poder_OD
                                                    document.getElementById("diametroOD").value = doc.data().DatosLentesPrueba.Diametro_OD
                                                    document.getElementById("diametroOD").value = doc.data().DatosLentesPrueba.Diametro_OD
                                                    document.getElementById("diseñoCAOD").value = doc.data().DatosLentesPrueba.Diseño_CA_OD
                                                    document.getElementById("diseñoCPOD").value = doc.data().DatosLentesPrueba.Diseño_CP_OD
                                                    document.getElementById("materialOD").value = doc.data().DatosLentesPrueba.Material_OD
                                                    document.getElementById("diseñoCAOI").value = doc.data().DatosLentesPrueba.Diseño_CA_OI
                                                    document.getElementById("diseñoCPOI").value = doc.data().DatosLentesPrueba.Diseño_CP_OI
                                                    document.getElementById("curvaBaseOI").value = doc.data().DatosLentesPrueba.Curva_Base_OI
                                                    document.getElementById("poderOI").value = doc.data().DatosLentesPrueba.Poder_OI
                                                    document.getElementById("diametroOI").value = doc.data().DatosLentesPrueba.Diametro_OI
                                                    document.getElementById("materialOI").value = doc.data().DatosLentesPrueba.Material_OI

                                                    //Sobre-refracción
                                                    document.getElementById("refraccionOD").value = doc.data().DatosSobreRefraccion.Refraccion_OD
                                                    document.getElementById("refraccionAVOD").value = doc.data().DatosSobreRefraccion.Refraccion_AV_OD
                                                    document.getElementById("refraccionOI").value = doc.data().DatosSobreRefraccion.Refraccion_OI
                                                    document.getElementById("refraccionAVOI").value = doc.data().DatosSobreRefraccion.Refraccion_AV_OI

                                                    //Sobre_subjetivo
                                                    document.getElementById("subjetivoOD").value = doc.data().DatosSobreSubjetivo.Subjetivo_OD
                                                    document.getElementById("subjetivoAVOD").value = doc.data().DatosSobreSubjetivo.Subjetivo_AV_OD
                                                    document.getElementById("subjetivoOI").value = doc.data().DatosSobreSubjetivo.Subjetivo_OI
                                                    document.getElementById("subjetivoAVOI").value = doc.data().DatosSobreSubjetivo.Subjetivo_AV_OI

                                                    //Fluorograma
                                                    document.getElementById("observacionesFluorograma").value = doc.data().DatosFluorograma.Observaciones_Fluorograma

                                                    //Lente a solicitar
                                                    document.getElementById("curvaBaseOD2").value = doc.data().DatosLenteFinal.Curva_Base_OD
                                                    document.getElementById("poderOD2").value = doc.data().DatosLenteFinal.Poder_OD
                                                    document.getElementById("diametroOD2").value = doc.data().DatosLenteFinal.Diametro_OD
                                                    document.getElementById("diseñoCAOD2").value = doc.data().DatosLenteFinal.Diseño_CA_OD
                                                    document.getElementById("diseñoCPOD2").value = doc.data().DatosLenteFinal.Diseño_CP_OD
                                                    document.getElementById("materialOD2").value = doc.data().DatosLenteFinal.Material_OD
                                                    document.getElementById("curvaBaseOI2").value = doc.data().DatosLenteFinal.Curva_Base_OI
                                                    document.getElementById("poderOI2").value = doc.data().DatosLenteFinal.Poder_OI
                                                    document.getElementById("diametroOI2").value = doc.data().DatosLenteFinal.Diametro_OI
                                                    document.getElementById("diseñoCAOI2").value = doc.data().DatosLenteFinal.Diseño_CA_OI
                                                    document.getElementById("diseñoCPOI2").value = doc.data().DatosLenteFinal.Diseño_CP_OI
                                                    document.getElementById("materialOI2").value = doc.data().DatosLenteFinal.Material_OI
                                                    document.getElementById("horarioUso").value = doc.data().DatosLenteFinal.Horario_Uso
                                                    document.getElementById("liquidosRecomendados").value = doc.data().DatosLenteFinal.Liquidos_Recomendados
                                                    document.getElementById("observacionesAdicionales").value = doc.data().DatosLenteFinal.Observaciones_Adicionales
                                                    document.getElementById("conducta").value = doc.data().DatosLenteFinal.Conducta


                                                    //Control
                                                    document.getElementById("controlDB").value = doc.data().DatosControl.Control
                                                    document.getElementById("horaSalida").value = doc.data().DatosControl.Hora_Salida
                                                    document.getElementById("estudiante").value = doc.data().DatosControl.Estudiante
                                                    document.getElementById("profesor").value = doc.data().DatosControl.Profesor
                                                    document.getElementById("noFactura").value = doc.data().DatosControl.No_Factura
                                                    document.getElementById("valorFactura").value = doc.data().DatosControl.Valor_Factura
                                                }
                                            })
                                        })
                                }
                                else {
                                    Swal.fire({
                                        title: 'Debes seleccionar una historia clínica',
                                        icon: 'error',
                                        confirmButtonColor: '#d33',
                                        confirmButtonText: 'Ok',
                                        allowOutsideClick: false,
                                        allowEscapeKey: false,
                                        allowEnterKey: false,
                                        stopKeydownPropagation: false
                                    }).then((result) => {
                                        if (result.isConfirmed) {
                                            window.location.href = "/views/clinicHistoryLentes/viewClinicHistoryLentes.html";
                                        }
                                    });
                                }
                            })
                        }
                    })
            }
            else {
                Swal.fire({
                    title: 'Debes digitar un número de documento',
                    icon: 'error',
                    confirmButtonColor: '#d33',
                    confirmButtonText: 'Ok',
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    allowEnterKey: false,
                    stopKeydownPropagation: false
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = "/views/clinicHistoryLentes/viewClinicHistoryLentes.html";
                    }
                });
            }
        });

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

        send.addEventListener('click', (e) => {
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
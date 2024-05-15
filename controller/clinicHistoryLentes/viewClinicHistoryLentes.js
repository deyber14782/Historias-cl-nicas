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
                                                    document.getElementById("antiguedadMolestia").value = doc.data().DatosAnamnesis.Antiguedad_Molestia
                                                    document.getElementById("antecedentesPersonales").value = doc.data().DatosAnamnesis.Antecedentes_Personales
                                                    document.getElementById("antecedentesFamiliares").value = doc.data().DatosAnamnesis.Antecedentes_Familiares

                                                    //Lensometría
                                                    document.getElementById("esferaOD").value = doc.data().DatosLensometria.Esfera_OD
                                                    document.getElementById("cilindroOD").value = doc.data().DatosLensometria.Cilindro_OD
                                                    document.getElementById("ejeOD").value = doc.data().DatosLensometria.Eje_OD
                                                    document.getElementById("adicionOD").value = doc.data().DatosLensometria.Adicion_OD
                                                    document.getElementById("avvlOD").value = doc.data().DatosLensometria.AV_VL_OD
                                                    document.getElementById("avvpOD").value = doc.data().DatosLensometria.AV_VP_OD
                                                    document.getElementById("esferaOI").value = doc.data().DatosLensometria.Esfera_OI
                                                    document.getElementById("cilindroOI").value = doc.data().DatosLensometria.Cilindro_OI
                                                    document.getElementById("ejeOI").value = doc.data().DatosLensometria.Eje_OI
                                                    document.getElementById("adicionOI").value = doc.data().DatosLensometria.Adicion_OI
                                                    document.getElementById("avvlOI").value = doc.data().DatosLensometria.AV_VL_OI
                                                    document.getElementById("avvpOI").value = doc.data().DatosLensometria.AV_VP_OI
                                                    document.getElementById("tipoLente").value = doc.data().DatosLensometria.Tipo_Lente
                                                    document.getElementById("filtro").value = doc.data().DatosLensometria.Filtro
                                                    document.getElementById("tiempoUso").value = doc.data().DatosLensometria.Tiempo_Uso

                                                    //Agudeza visual
                                                    document.getElementById("optotipoUtilizado").value = doc.data().DatosAgudezaVisual.Optotipo_Utilizado
                                                    document.getElementById("lejosSCOD").value = doc.data().DatosAgudezaVisual.Lejos_SC_OD
                                                    document.getElementById("phSCOD").value = doc.data().DatosAgudezaVisual.Ph_SC_OD
                                                    document.getElementById("aoSCODOI").value = doc.data().DatosAgudezaVisual.AO_SC_OD_OI
                                                    document.getElementById("cercaSCOD").value = doc.data().DatosAgudezaVisual.Cerca_SC_OD
                                                    document.getElementById("aoSCODOI2").value = doc.data().DatosAgudezaVisual.AO_SC_OD_OI_2
                                                    document.getElementById("lejosSCOI").value = doc.data().DatosAgudezaVisual.Lejos_SC_OI
                                                    document.getElementById("phSCOI").value = doc.data().DatosAgudezaVisual.Ph_SC_OI
                                                    document.getElementById("cercaSCOI").value = doc.data().DatosAgudezaVisual.Cerca_SC_OI

                                                    //Queratometría
                                                    document.getElementById("queratometriaOD").value = doc.data().DatosQueratometria.Queratometria_OD
                                                    document.getElementById("queratometriaMirasOD").value = doc.data().DatosQueratometria.Queratometria_Miras_OD
                                                    document.getElementById("queratometriaOI").value = doc.data().DatosQueratometria.Queratometria_OI
                                                    document.getElementById("queratometriaMirasOI").value = doc.data().DatosQueratometria.Queratometria_Miras_OI

                                                    //Retinoscopia
                                                    document.getElementById("retinoscopiaEstaticaOD").value = doc.data().DatosRetinoscopia.Retinoscopia_Estatica_OD
                                                    document.getElementById("retinoscopiaEstaticaODAV").value = doc.data().DatosRetinoscopia.Retinoscopia_Estatica_OD_AV
                                                    document.getElementById("retinoscopiaEstaticaOI").value = doc.data().DatosRetinoscopia.Retinoscopia_Estatica_OI
                                                    document.getElementById("retinoscopiaEstaticaOIAV").value = doc.data().DatosRetinoscopia.Retinoscopia_Estatica_OI_AV
                                                    document.getElementById("observacionesRetinoscopia").value = doc.data().DatosRetinoscopia.Observaciones_Retinoscopia

                                                    //Examen subjetivo
                                                    document.getElementById("examenSubjetivoOD").value = doc.data().DatosExamenSubjetivo.Examen_Subjetivo_OD
                                                    document.getElementById("examenSubjetivoAVOD").value = doc.data().DatosExamenSubjetivo.Examen_Subjetivo_AV_OD
                                                    document.getElementById("examenSubjetivoAVODEstenopeico").value = doc.data().DatosExamenSubjetivo.Examen_Subjetivo_AV_OD_Estenopeico
                                                    document.getElementById("examenSubjetivoOI").value = doc.data().DatosExamenSubjetivo.Examen_Subjetivo_OI
                                                    document.getElementById("examenSubjetivoAVOI").value = doc.data().DatosExamenSubjetivo.Examen_Subjetivo_AV_OI
                                                    document.getElementById("examenSubjetivoAVOIEstenopeico").value = doc.data().DatosExamenSubjetivo.Examen_Subjetivo_AV_OI_Estenopeico

                                                    //Afinación
                                                    document.getElementById("afinacionOD").value = doc.data().DatosAfinacion.afinacionOD
                                                    document.getElementById("afinacionAVOD").value = doc.data().DatosAfinacion.afinacionAVOD
                                                    document.getElementById("afinacionOI").value = doc.data().DatosAfinacion.afinacionOI
                                                    document.getElementById("afinacionAVOI").value = doc.data().DatosAfinacion.afinacionAVOI
                                                    document.getElementById("adicion").value = doc.data().DatosAfinacion.adicion
                                                    document.getElementById("avOD").value = doc.data().DatosAfinacion.avOD
                                                    document.getElementById("avOI").value = doc.data().DatosAfinacion.avOI
                                                    document.getElementById("avAO").value = doc.data().DatosAfinacion.avAO

                                                    //Examen externo
                                                    document.getElementById("examenExternoOD").value = doc.data().DatosExamenExterno.Examen_Externo_OD
                                                    document.getElementById("examenExternoOI").value = doc.data().DatosExamenExterno.Examen_Externo_OI

                                                    //Biomicroscopia
                                                    document.getElementById("descripcionBiomicroscopiaOD").value = doc.data().DatosBiomicroscopia.Descripcion_Biomicroscopia_OD
                                                    document.getElementById("descripcionBiomicroscopiaOI").value = doc.data().DatosBiomicroscopia.Descripcion_Biomicroscopia_OI

                                                    //Lentes de prueba
                                                    document.getElementById("curvaBaseOD").value = doc.data().DatosLentesPrueba.Curva_Base_OD
                                                    document.getElementById("poderOD").value = doc.data().DatosLentesPrueba.Poder_OD
                                                    document.getElementById("diametroOD").value = doc.data().DatosLentesPrueba.Diametro_OD
                                                    document.getElementById("diseñoOD").value = doc.data().DatosLentesPrueba.Diseño_OD
                                                    document.getElementById("materialOD").value = doc.data().DatosLentesPrueba.Material_OD
                                                    document.getElementById("zoOD").value = doc.data().DatosLentesPrueba.ZO_OD
                                                    document.getElementById("curvaBaseOI").value = doc.data().DatosLentesPrueba.Curva_Base_OI
                                                    document.getElementById("poderOI").value = doc.data().DatosLentesPrueba.Poder_OI
                                                    document.getElementById("diametroOI").value = doc.data().DatosLentesPrueba.Diametro_OI
                                                    document.getElementById("diseñoOI").value = doc.data().DatosLentesPrueba.Diseño_OI
                                                    document.getElementById("materialOI").value = doc.data().DatosLentesPrueba.Material_OI
                                                    document.getElementById("zoOI").value = doc.data().DatosLentesPrueba.ZO_OI

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

                                                    //Lente final
                                                    document.getElementById("curvaBaseOD2").value = doc.data().DatosLenteFinal.Curva_Base_OD
                                                    document.getElementById("poderOD2").value = doc.data().DatosLenteFinal.Poder_OD
                                                    document.getElementById("diametroOD2").value = doc.data().DatosLenteFinal.Diametro_OD
                                                    document.getElementById("diseñoOD2").value = doc.data().DatosLenteFinal.Diseño_OD
                                                    document.getElementById("materialOD2").value = doc.data().DatosLenteFinal.Material_OD
                                                    document.getElementById("zoOD2").value = doc.data().DatosLenteFinal.ZO_OD
                                                    document.getElementById("curvaBaseOI2").value = doc.data().DatosLenteFinal.Curva_Base_OI
                                                    document.getElementById("poderOI2").value = doc.data().DatosLenteFinal.Poder_OI
                                                    document.getElementById("diametroOI2").value = doc.data().DatosLenteFinal.Diametro_OI
                                                    document.getElementById("diseñoOI2").value = doc.data().DatosLenteFinal.Diseño_OI
                                                    document.getElementById("materialOI2").value = doc.data().DatosLenteFinal.Material_OI
                                                    document.getElementById("zoOI2").value = doc.data().DatosLenteFinal.ZO_OI

                                                    //Diagnostico
                                                    document.getElementById("c1").value = doc.data().DatosDiagnostico.Codigo_Diagnostico_Principal
                                                    document.getElementById("c_1").value = doc.data().DatosDiagnostico.Diagnostico_Principal
                                                    document.getElementById("c2").value = doc.data().DatosDiagnostico.Codigo_Diagnostico_R1
                                                    document.getElementById("c_2").value = doc.data().DatosDiagnostico.Diagnostico_R1
                                                    document.getElementById("c3").value = doc.data().DatosDiagnostico.Codigo_Diagnostico_R2
                                                    document.getElementById("c_3").value = doc.data().DatosDiagnostico.Diagnostico_R2
                                                    document.getElementById("digitarCodigo1").value = doc.data().DatosDiagnostico.Codigo_Digitado1
                                                    document.getElementById("digitarCodigo2").value = doc.data().DatosDiagnostico.Codigo_Digitado2
                                                    document.getElementById("digitarCodigo3").value = doc.data().DatosDiagnostico.Codigo_Digitado3

                                                    //Origen de la enfermedad
                                                    document.getElementById("pacienteSano").value = doc.data().DatosOrigenEnfermedad.Paciente_Sano
                                                    document.getElementById("enfermedadGeneralComun").value = doc.data().DatosOrigenEnfermedad.Enfermedad_General_Comun
                                                    document.getElementById("enfermedadProfesionalOcupacional").value = doc.data().DatosOrigenEnfermedad.Enfermedad_Profesional_Ocupacional
                                                    document.getElementById("accidenteTrabajo").value = doc.data().DatosOrigenEnfermedad.Accidente_Trabajo
                                                    document.getElementById("accidenteTrabajoFueraTrabajo").value = doc.data().DatosOrigenEnfermedad.Accidente_Trabajo_Fuera_Trabajo

                                                    //Plan de tratamiento
                                                    document.getElementById("planTratamientoDB").value = doc.data().DatosPlanTratamiento.Plan_Tratamiento

                                                    //Remisiones
                                                    document.getElementById("remisionesDB").value = doc.data().DatosRemisiones.Remisiones

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
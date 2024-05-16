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
                getDocs(collection(db, "Clinic_History_Ortoptica", "Data", "Data_Ortoptica")).
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
                                    window.location.href = "/views/clinicHistoryOrtoptica/viewClinicHistoryOrtoptica.html";
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
                                    getDocs(collection(db, "Clinic_History_Ortoptica", "Data", "Data_Ortoptica")).
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
                                                    document.getElementById("antecedentesAnamnesis").value = doc.data().DatosAnamnesis.Antecedentes_Anamnesis

                                                    //Signos y síntomas
                                                    document.getElementById("cefalea").value = doc.data().DatosSignosSintomas.Cefalea
                                                    document.getElementById("astenopiaVL").value = doc.data().DatosSignosSintomas.Astenopia_VL
                                                    document.getElementById("problemasConcentracion").value = doc.data().DatosSignosSintomas.Problemas_Concentracion
                                                    document.getElementById("cabeceo").value = doc.data().DatosSignosSintomas.Cabeceo
                                                    document.getElementById("comprensionLectura").value = doc.data().DatosSignosSintomas.Comprension_Lectura
                                                    document.getElementById("cierreOjo").value = doc.data().DatosSignosSintomas.Cierre_Ojo
                                                    document.getElementById("posicionCompensatoriaCabeza").value = doc.data().DatosSignosSintomas.Posicion_Compensatoria_Cabeza

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
                                                    document.getElementById("testUtilizado").value = doc.data().DatosAgudezaVisual.Test_Utilizado
                                                    document.getElementById("lejosSCOD").value = doc.data().DatosAgudezaVisual.Lejos_SC_OD
                                                    document.getElementById("phSCOD").value = doc.data().DatosAgudezaVisual.Ph_SC_OD
                                                    document.getElementById("aoSCODOI").value = doc.data().DatosAgudezaVisual.AO_SC_OD_OI
                                                    document.getElementById("cercaSCOD").value = doc.data().DatosAgudezaVisual.Cerca_SC_OD
                                                    document.getElementById("aoSCODOI2").value = doc.data().DatosAgudezaVisual.AO_SC_OD_OI_2
                                                    document.getElementById("lejosSCOI").value = doc.data().DatosAgudezaVisual.Lejos_SC_OI
                                                    document.getElementById("phSCOI").value = doc.data().DatosAgudezaVisual.Ph_SC_OI
                                                    document.getElementById("cercaSCOI").value = doc.data().DatosAgudezaVisual.Cerca_SC_OI


                                                    //Motilidad ocular
                                                    document.getElementById("hirchberg").value = doc.data().DatosMotilidadOcular.Hirchberg
                                                    document.getElementById("kappaOD").value = doc.data().DatosMotilidadOcular.Kappa_OD
                                                    document.getElementById("kappaOI").value = doc.data().DatosMotilidadOcular.Kappa_OI
                                                    document.getElementById("duccionesOD").value = doc.data().DatosMotilidadOcular.DuccionesOD
                                                    document.getElementById("duccionesOI").value = doc.data().DatosMotilidadOcular.DuccionesOI
                                                    document.getElementById("versiones").value = doc.data().DatosMotilidadOcular.Versiones

                                                    //Alineamineto Ocular
                                                    document.getElementById("coverTest").value = doc.data().DatosAlineamientoOcular.Cover_Test
                                                    document.getElementById("krimsky").value = doc.data().DatosAlineamientoOcular.Krimsky
                                                    document.getElementById("white").value = doc.data().DatosAlineamientoOcular.White
                                                    document.getElementById("seisSC").value = doc.data().DatosAlineamientoOcular.Seis_SC
                                                    document.getElementById("seisCC").value = doc.data().DatosAlineamientoOcular.Seis_CC
                                                    document.getElementById("seisADD").value = doc.data().DatosAlineamientoOcular.Seis_ADD
                                                    document.getElementById("cuarentaSC").value = doc.data().DatosAlineamientoOcular.Cuarenta_SC
                                                    document.getElementById("cuarentaCC").value = doc.data().DatosAlineamientoOcular.Cuarenta_CC
                                                    document.getElementById("cuarentaADD").value = doc.data().DatosAlineamientoOcular.Cuarenta_ADD

                                                    //Cuadro de medidas
                                                    document.getElementById("vl1").value = doc.data().DatosCuadroMedidas.VL_1
                                                    document.getElementById("vl2").value = doc.data().DatosCuadroMedidas.VL_2
                                                    document.getElementById("vl3").value = doc.data().DatosCuadroMedidas.VL_3
                                                    document.getElementById("vl4").value = doc.data().DatosCuadroMedidas.VL_4
                                                    document.getElementById("vl5").value = doc.data().DatosCuadroMedidas.VL_5
                                                    document.getElementById("vl6").value = doc.data().DatosCuadroMedidas.VL_6
                                                    document.getElementById("vl7").value = doc.data().DatosCuadroMedidas.VL_7
                                                    document.getElementById("vl8").value = doc.data().DatosCuadroMedidas.VL_8
                                                    document.getElementById("vl9").value = doc.data().DatosCuadroMedidas.VL_9
                                                    document.getElementById("vp1").value = doc.data().DatosCuadroMedidas.VP_1
                                                    document.getElementById("vp2").value = doc.data().DatosCuadroMedidas.VP_2
                                                    document.getElementById("vp3").value = doc.data().DatosCuadroMedidas.VP_3
                                                    document.getElementById("vp4").value = doc.data().DatosCuadroMedidas.VP_4
                                                    document.getElementById("vp5").value = doc.data().DatosCuadroMedidas.VP_5
                                                    document.getElementById("vp6").value = doc.data().DatosCuadroMedidas.VP_6
                                                    document.getElementById("vp7").value = doc.data().DatosCuadroMedidas.VP_7
                                                    document.getElementById("vp8").value = doc.data().DatosCuadroMedidas.VP_8
                                                    document.getElementById("vp9").value = doc.data().DatosCuadroMedidas.VP_9

                                                    //Valoración acomodativa

                                                    document.getElementById("acaCalculado").value = doc.data().DatosAcomodativa.Aca_Calculado
                                                    document.getElementById("gradiente").value = doc.data().DatosAcomodativa.Gradiente
                                                    document.getElementById("amplitudOD").value = doc.data().DatosAcomodativa.Amplitud_OD
                                                    document.getElementById("flexibilidadCpmOD").value = doc.data().DatosAcomodativa.Flexibilidad_Cpm_OD
                                                    document.getElementById("flexibilidadMasOD").value = doc.data().DatosAcomodativa.Flexibilidad_Mas_OD
                                                    document.getElementById("flexibilidadMenosOD").value = doc.data().DatosAcomodativa.Flexibilidad_Menos_OD
                                                    document.getElementById("aca").value = doc.data().DatosAcomodativa.Aca
                                                    document.getElementById("amplitudOI").value = doc.data().DatosAcomodativa.Amplitud_OI
                                                    document.getElementById("flexibilidadCpmOI").value = doc.data().DatosAcomodativa.Flexibilidad_Cpm_OI
                                                    document.getElementById("flexibilidadMasOI").value = doc.data().DatosAcomodativa.Flexibilidad_Mas_OI
                                                    document.getElementById("flexibilidadMenosOI").value = doc.data().DatosAcomodativa.Flexibilidad_Menos_OI
                                                    document.getElementById("amplitudAcomodacion").value = doc.data().DatosAcomodativa.Amplitud_Acomodacion
                                                    document.getElementById("facilidadAcomodativa").value = doc.data().DatosAcomodativa.Facilidad_Acomodativa
                                                    document.getElementById("acomodativaMas").value = doc.data().DatosAcomodativa.Acomodativa_Mas
                                                    document.getElementById("acomodativaMenos").value = doc.data().DatosAcomodativa.Acomodativa_Menos
                                                    document.getElementById("arn").value = doc.data().DatosAcomodativa.Arn
                                                    document.getElementById("arp").value = doc.data().DatosAcomodativa.Arp
                                                    document.getElementById("retinoscopiaOD").value = doc.data().DatosAcomodativa.Retinoscopia_OD
                                                    document.getElementById("retinoscopiaOI").value = doc.data().DatosAcomodativa.Retinoscopia_OI

                                                    //Valoraión vergencial
                                                    document.getElementById("ppcor1").value = doc.data().DatosValoracionGeneral.Ppcor_1
                                                    document.getElementById("ppcor2").value = doc.data().DatosValoracionGeneral.Ppcor_2
                                                    document.getElementById("luzFiltro1").value = doc.data().DatosValoracionGeneral.Luz_Filtro_1
                                                    document.getElementById("luzFiltro2").value = doc.data().DatosValoracionGeneral.Luz_Filtro_2
                                                    document.getElementById("suaves").value = doc.data().DatosValoracionGeneral.Suaves
                                                    document.getElementById("pasos").value = doc.data().DatosValoracionGeneral.Pasos
                                                    document.getElementById("rfnVl").value = doc.data().DatosValoracionGeneral.Rfn_Vl
                                                    document.getElementById("rfpVl").value = doc.data().DatosValoracionGeneral.Rfp_Vl
                                                    document.getElementById("rfnVp").value = doc.data().DatosValoracionGeneral.Rfn_Vp
                                                    document.getElementById("rfpVp").value = doc.data().DatosValoracionGeneral.Rfp_Vp
                                                    document.getElementById("facilidadVergencia").value = doc.data().DatosValoracionGeneral.Facilidad_Vergencia
                                                    document.getElementById("vergenciaCpm").value = doc.data().DatosValoracionGeneral.Vergencia_Cpm
                                                    document.getElementById("prismaBe").value = doc.data().DatosValoracionGeneral.Prisma_Be
                                                    document.getElementById("bi").value = doc.data().DatosValoracionGeneral.Bi

                                                    //Valoración sensorial
                                                    document.getElementById("worthVL").value = doc.data().DatosValoracionSensorial.Worth_VL
                                                    document.getElementById("worthVP").value = doc.data().DatosValoracionSensorial.Worth_VP
                                                    document.getElementById("bagolinni").value = doc.data().DatosValoracionSensorial.Bagolinni
                                                    document.getElementById("csaa").value = doc.data().DatosValoracionSensorial.Csaa
                                                    document.getElementById("csai").value = doc.data().DatosValoracionSensorial.Csai
                                                    document.getElementById("estereopsis").value = doc.data().DatosValoracionSensorial.Estereopsis
                                                    document.getElementById("test").value = doc.data().DatosValoracionSensorial.Test
                                                    document.getElementById("visionColorOD").value = doc.data().DatosValoracionSensorial.Vision_Color_OD
                                                    document.getElementById("visionColorOI").value = doc.data().DatosValoracionSensorial.Vision_Color_OI
                                                    document.getElementById("fijacionOD").value = doc.data().DatosValoracionSensorial.Fijacion_OD
                                                    document.getElementById("fijacionOI").value = doc.data().DatosValoracionSensorial.Fijacion_OI

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
                                                    document.getElementById("numerosSesiones").value = doc.data().DatosOrigenEnfermedad.Numeros_Sesiones
                                                    document.getElementById("numeroSesionesMonocular").value = doc.data().DatosOrigenEnfermedad.Numero_Sesiones_Monocular
                                                    document.getElementById("numeroSesionesBiocular").value = doc.data().DatosOrigenEnfermedad.Numero_Sesiones_Biocular
                                                    document.getElementById("numeroSesionesBinocular").value = doc.data().DatosOrigenEnfermedad.Numero_Sesiones_Binocular

                                                    //Plan de tratamiento
                                                    document.getElementById("planTratamientoDB").value = doc.data().DatosPlanTratamiento.Plan_Tratamiento

                                                    //Remisiones
                                                    document.getElementById("remisionesDB").value = doc.data().DatosRemisiones.Remisiones

                                                    //Control
                                                    document.getElementById("controlDB").value = doc.data().DatosControl.Control
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
                                            window.location.href = "/views/clinicHistoryOrtoptica/viewClinicHistoryOrtoptica.html";
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
                        window.location.href = "/views/clinicHistoryOrtoptica/viewClinicHistoryOrtoptica.html";
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
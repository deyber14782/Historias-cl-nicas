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
                                                    document.getElementById("antiguedadMolestia").value = doc.data().DatosAnamnesis.Antiguedad_Molestia
                                                    document.getElementById("antecedentesPersonales").value = doc.data().DatosAnamnesis.Antecedentes_Personales
                                                    document.getElementById("antecedentesFamiliares").value = doc.data().DatosAnamnesis.Antecedentes_Familiares

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
                                                    document.getElementById("retinoscopiaEsferaOD").value = doc.data().DatosRetinoscopia.Retinoscopia_Esfera_OD
                                                    document.getElementById("retinoscopiaCilindroOD").value = doc.data().DatosRetinoscopia.Retinoscopia_Cilindro_OD
                                                    document.getElementById("retinoscopiaEjeOD").value = doc.data().DatosRetinoscopia.Retinoscopia_Eje_OD
                                                    document.getElementById("retinoscopiaAdicionOD").value = doc.data().DatosRetinoscopia.Retinoscopia_Adicion_OD
                                                    document.getElementById("retinoscopiaEsferaOI").value = doc.data().DatosRetinoscopia.Retinoscopia_Esfera_OI
                                                    document.getElementById("retinoscopiaCilindroOI").value = doc.data().DatosRetinoscopia.Retinoscopia_Cilindro_OI
                                                    document.getElementById("retinoscopiaEjeOI").value = doc.data().DatosRetinoscopia.Retinoscopia_Eje_OI
                                                    document.getElementById("retinoscopiaAdicionOI").value = doc.data().DatosRetinoscopia.Retinoscopia_Adicion_OI
                                                    document.getElementById("observacionesRetinoscopia").value = doc.data().DatosRetinoscopia.Observaciones_Retinoscopia

                                                    //Examen subjetivo
                                                    document.getElementById("examenEsferaOD").value = doc.data().DatosExamenSubjetivo.Examen_Esfera_OD
                                                    document.getElementById("examenCilindroOD").value = doc.data().DatosExamenSubjetivo.Examen_Cilindro_OD
                                                    document.getElementById("examenEjeOD").value = doc.data().DatosExamenSubjetivo.Examen_Eje_OD
                                                    document.getElementById("examenAdicionOD").value = doc.data().DatosExamenSubjetivo.Examen_Adicion_OD
                                                    document.getElementById("examenEsferaOI").value = doc.data().DatosExamenSubjetivo.Examen_Esfera_OI
                                                    document.getElementById("examenCilindroOI").value = doc.data().DatosExamenSubjetivo.Examen_Cilindro_OI
                                                    document.getElementById("examenEjeOI").value = doc.data().DatosExamenSubjetivo.Examen_Eje_OI
                                                    document.getElementById("examenAdicionOI").value = doc.data().DatosExamenSubjetivo.Examen_Adicion_OI

                                                    //Afinación
                                                    document.getElementById("afinacionEsferaOD").value = doc.data().DatosAfinacion.Afinacion_Esfera_OD
                                                    document.getElementById("afinacionCilindroOD").value = doc.data().DatosAfinacion.Afinacion_Cilindro_OD
                                                    document.getElementById("afinacionEjeOD").value = doc.data().DatosAfinacion.Afinacion_Eje_OD
                                                    document.getElementById("afinacionAdicionOD").value = doc.data().DatosAfinacion.Afinacion_Adicion_OD
                                                    document.getElementById("afinacionEsferaOI").value = doc.data().DatosAfinacion.Afinacion_Esfera_OI
                                                    document.getElementById("afinacionCilindroOI").value = doc.data().DatosAfinacion.Afinacion_Cilindro_OI
                                                    document.getElementById("afinacionEjeOI").value = doc.data().DatosAfinacion.Afinacion_Eje_OI
                                                    document.getElementById("afinacionAdicionOI").value = doc.data().DatosAfinacion.Afinacion_Adicion_OI
                                                    document.getElementById("adicion").value = doc.data().DatosAfinacion.adicion
                                                    document.getElementById("avOD").value = doc.data().DatosAfinacion.avOD
                                                    document.getElementById("avOI").value = doc.data().DatosAfinacion.avOI
                                                    document.getElementById("avAO").value = doc.data().DatosAfinacion.avAO

                                                    //DNP
                                                    document.getElementById("dnpOD").value = doc.data().DatosDNP.DNP_OD
                                                    document.getElementById("dnpOI").value = doc.data().DatosDNP.DNP_OI

                                                    //Examen externo
                                                    document.getElementById("examenExternoOD").value = doc.data().DatosExamenExterno.Examen_Externo_OD
                                                    document.getElementById("examenExternoOI").value = doc.data().DatosExamenExterno.Examen_Externo_OI

                                                    //Fijación
                                                    document.getElementById("fijacionOD").value = doc.data().DatosFijacion.Fijacion_OD
                                                    document.getElementById("fijacionOI").value = doc.data().DatosFijacion.Fijacion_OI

                                                    //Estereopsis
                                                    document.getElementById("estereopsisInput1").value = doc.data().DatosEstereopsis.Test_Estereopsis_Input_1
                                                    document.getElementById("estereopsisInput2").value = doc.data().DatosEstereopsis.Test_Estereopsis_Input_2

                                                    //Motilidad ocular
                                                    document.getElementById("hirchberg").value = doc.data().DatosMotilidadOcular.Hirchberg
                                                    document.getElementById("kappaOD").value = doc.data().DatosMotilidadOcular.Kappa_OD
                                                    document.getElementById("kappaOI").value = doc.data().DatosMotilidadOcular.Kappa_OI
                                                    document.getElementById("duccionesOD").value = doc.data().DatosMotilidadOcular.DuccionesOD
                                                    document.getElementById("duccionesOI").value = doc.data().DatosMotilidadOcular.DuccionesOI
                                                    document.getElementById("versiones").value = doc.data().DatosMotilidadOcular.Versiones

                                                    //Medida de la desviación habitual
                                                    document.getElementById("tipoDeTestCoverTestVL6m").value = doc.data().DatosMedidaDesviacionHabitual.Tipo_De_Test_Cover_Test_VL_6m
                                                    document.getElementById("vpHabitual").value = doc.data().DatosMedidaDesviacionHabitual.Vp_Habitual
                                                    document.getElementById("desviacionCM").value = doc.data().DatosMedidaDesviacionHabitual.Desviacion_Cm
                                                    document.getElementById("ppcObjetoReal").value = doc.data().DatosMedidaDesviacionHabitual.PPC_Objeto_Real
                                                    document.getElementById("luz").value = doc.data().DatosMedidaDesviacionHabitual.Luz
                                                    document.getElementById("luzFiltroRojo").value = doc.data().DatosMedidaDesviacionHabitual.Luz_Filtro_Rojo

                                                    //Prima cover test
                                                    document.getElementById("sc6m").value = doc.data().DatosPrimaCoverTest.sc6m
                                                    document.getElementById("cc6m").value = doc.data().DatosPrimaCoverTest.cc6m
                                                    document.getElementById("sc33cm").value = doc.data().DatosPrimaCoverTest.sc33cm
                                                    document.getElementById("cc33cm").value = doc.data().DatosPrimaCoverTest.cc33cm
                                                    document.getElementById("sc20cm").value = doc.data().DatosPrimaCoverTest.sc20cm
                                                    document.getElementById("cc20cm").value = doc.data().DatosPrimaCoverTest.cc20cm

                                                    //Vergencias fusiónales
                                                    document.getElementById("rfnVL").value = doc.data().DatosVergenciasFusionales.RFN_VL
                                                    document.getElementById("rfpVL").value = doc.data().DatosVergenciasFusionales.RFP_VL
                                                    document.getElementById("rfnVP").value = doc.data().DatosVergenciasFusionales.RFN_VP
                                                    document.getElementById("rfpVP").value = doc.data().DatosVergenciasFusionales.RFP_VP

                                                    //Examen de la acomodación
                                                    document.getElementById("flexibilidadACCOD").value = doc.data().DatosExamenAcomodacion.Flexibilidad_ACC_OD
                                                    document.getElementById("aaOD").value = doc.data().DatosExamenAcomodacion.AA_OD
                                                    document.getElementById("aCAODOI").value = doc.data().DatosExamenAcomodacion.A_CA_OD_OI
                                                    document.getElementById("flexibilidadACCOI").value = doc.data().DatosExamenAcomodacion.Flexibilidad_ACC_OI
                                                    document.getElementById("aaOI").value = doc.data().DatosExamenAcomodacion.AA_OI

                                                    //Prescripción óptica
                                                    document.getElementById("esferaOD2").value = doc.data().DatosPrescripcionOptica.Esfera_OD
                                                    document.getElementById("cilindroOD2").value = doc.data().DatosPrescripcionOptica.Cilindro_OD
                                                    document.getElementById("ejeOD2").value = doc.data().DatosPrescripcionOptica.Eje_OD
                                                    document.getElementById("addOD2").value = doc.data().DatosPrescripcionOptica.Add_OD
                                                    document.getElementById("esferaOI2").value = doc.data().DatosPrescripcionOptica.Esfera_OI
                                                    document.getElementById("cilindroOI2").value = doc.data().DatosPrescripcionOptica.Cilindro_OI
                                                    document.getElementById("ejeOI2").value = doc.data().DatosPrescripcionOptica.Eje_OI
                                                    document.getElementById("addOI2").value = doc.data().DatosPrescripcionOptica.Add_OI
                                                    document.getElementById("tipoLente2").value = doc.data().DatosPrescripcionOptica.Tipo_Lente
                                                    document.getElementById("filtro2").value = doc.data().DatosPrescripcionOptica.Filtro
                                                    document.getElementById("material2").value = doc.data().DatosPrescripcionOptica.Material
                                                    document.getElementById("uso2").value = doc.data().DatosPrescripcionOptica.Uso

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
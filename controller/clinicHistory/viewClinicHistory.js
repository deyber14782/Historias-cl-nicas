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
                getDocs(collection(db, "Clinic_History_Refraccion", "Data", "Data_Refraccion")).
                    then((querySnapshot) => {
                        querySnapshot.forEach((doc) => {
                            if (result.value == doc.data().DatosPersonales.Numero_Identificacion) {
                                band = true
                                //Datos personales
                                document.getElementById("fecha").value = doc.data().DatosPersonales.Fecha
                                document.getElementById("no_h_c").value = doc.data().DatosPersonales.No_H_C
                                document.getElementById("horaEntrada").value = doc.data().DatosPersonales.Hora_Entrada
                                document.getElementById("identificacion").value = doc.data().DatosPersonales.Tipo_Identificacion
                                document.getElementById("numero").value = doc.data().DatosPersonales.Numero_Identificacion
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
                                document.getElementById("remitidoPor").value = doc.data().DatosPersonales.Remitido_Por
                                document.getElementById("tipoVinculacion").value = doc.data().DatosPersonales.Tipo_Vinculacion
                                document.getElementById("responsable").value = doc.data().DatosPersonales.Responsable
                                document.getElementById("parentesco").value = doc.data().DatosPersonales.Parentesco_Responsable
                                document.getElementById("celular").value = doc.data().DatosPersonales.Celular_Responsable
                                document.getElementById("acompañante").value = doc.data().DatosPersonales.Acompañante
                                document.getElementById("parentesco2").value = doc.data().DatosPersonales.Parentesco_Acompañante
                                document.getElementById("direccionResidencia").value = doc.data().DatosPersonales.DireccionResidencia_Acompañante
                                document.getElementById("barrio2").value = doc.data().DatosPersonales.Barrio_Acompañante
                                document.getElementById("telefono2").value = doc.data().DatosPersonales.Telefono_Acompañante
                                document.getElementById("eps").value = doc.data().DatosPersonales.Eps
                                document.getElementById("tipoAfiliacion").value = doc.data().DatosPersonales.Tipo_Afiliacion

                                //Anamnesis
                                document.getElementById("motivoConsulta").value = doc.data().DatosAnamnesis.Motivo_Consulta
                                document.getElementById("anamnesisDB").value = doc.data().DatosAnamnesis.Anamnesis
                                document.getElementById("antecedentesPersonalesSistemicos").value = doc.data().DatosAnamnesis.Antecedentes_Personales_Sistemicos
                                document.getElementById("antecedentesPersonalesOculares").value = doc.data().DatosAnamnesis.Antecedentes_Personales_Oculares
                                document.getElementById("antecedentesFamiliares").value = doc.data().DatosAnamnesis.Antecedentes_Familiares

                                //Lensometría
                                document.getElementById("tipoLente").value = doc.data().DatosLensometria.Tipo_Lente
                                document.getElementById("visionLejanaEsferaOD").value = doc.data().DatosLensometria.Vision_Lejana_Esfera_OD
                                document.getElementById("visionLejanaCilindroOD").value = doc.data().DatosLensometria.Vision_Lejana_Cilindro_OD
                                document.getElementById("visionLejanaEjeOD").value = doc.data().DatosLensometria.Vision_Lejana_Eje_OD
                                document.getElementById("visionProximaEsferaOD").value = doc.data().DatosLensometria.Vision_Proxima_Esfera_OD
                                document.getElementById("visionProximaCilindroOD").value = doc.data().DatosLensometria.Vision_Proxima_Cilindro_OD
                                document.getElementById("visionProximaEjeOD").value = doc.data().DatosLensometria.Vision_Proxima_Eje_OD
                                document.getElementById("filtro").value = doc.data().DatosLensometria.Filtro
                                document.getElementById("visionLejanaEsferaOI").value = doc.data().DatosLensometria.Vision_Lejana_Esfera_OI
                                document.getElementById("visionLejanaCilindroOI").value = doc.data().DatosLensometria.Vision_Lejana_Cilindro_OI
                                document.getElementById("visionLejanaEjeOI").value = doc.data().DatosLensometria.Vision_Lejana_Eje_OI
                                document.getElementById("visionProximaEsferaOI").value = doc.data().DatosLensometria.Vision_Proxima_Esfera_OI
                                document.getElementById("visionProximaCilindroOI").value = doc.data().DatosLensometria.Vision_Proxima_Cilindro_OI
                                document.getElementById("visionProximaEjeOI").value = doc.data().DatosLensometria.Vision_Proxima_Eje_OI
                                document.getElementById("dosPares").value = doc.data().DatosLensometria.Dos_Pares
                                document.getElementById("visionLejanaEsferaADD").value = doc.data().DatosLensometria.Vision_Lejana_Esfera_ADD
                                document.getElementById("visionLejanaCilindroADD").value = doc.data().DatosLensometria.Vision_Lejana_Cilindro_ADD
                                document.getElementById("visionLejanaEjeADD").value = doc.data().DatosLensometria.Vision_Lejana_Eje_ADD
                                document.getElementById("visionProximaEsferaADD").value = doc.data().DatosLensometria.Vision_Proxima_Esfera_ADD
                                document.getElementById("visionProximaCilindroADD").value = doc.data().DatosLensometria.Vision_Proxima_Cilindro_ADD
                                document.getElementById("visionProximaEjeADD").value = doc.data().DatosLensometria.Vision_Proxima_Eje_ADD
                                document.getElementById("observaciones").value = doc.data().DatosLensometria.Observaciones

                                //Agudeza visual
                                document.getElementById("cartillaUtilizada").value = doc.data().DatosAgudezaVisual.Cartilla_utilizada
                                document.getElementById("distancia").value = doc.data().DatosAgudezaVisual.Distancia
                                document.getElementById("visionLejanaSinCorreccionOD").value = doc.data().DatosAgudezaVisual.Vision_Lejana_Sin_Correcion_OD
                                document.getElementById("visionLejanaConCorreccionOD").value = doc.data().DatosAgudezaVisual.Vision_Lejana_Con_Correcion_OD
                                document.getElementById("visionEstenopeicoSinCorreccionOD").value = doc.data().DatosAgudezaVisual.Vision_Estenopeico_Sin_Correcion_OD
                                document.getElementById("visionEstenopeicoConCorreccionOD").value = doc.data().DatosAgudezaVisual.Vision_Estenopeico_Con_Correcion_OD
                                document.getElementById("visionCercanaSinCorreccionOD").value = doc.data().DatosAgudezaVisual.Vision_Cercana_Sin_Correcion_OD
                                document.getElementById("visionCercanaConCorreccionOD").value = doc.data().DatosAgudezaVisual.Vision_Cercana_Con_Correcion_OD
                                document.getElementById("visionLejanaSinCorreccionOI").value = doc.data().DatosAgudezaVisual.Vision_Lejana_Sin_Correcion_OI
                                document.getElementById("visionLejanaConCorreccionOI").value = doc.data().DatosAgudezaVisual.Vision_Lejana_Con_Correcion_OI
                                document.getElementById("visionEstenopeicoSinCorreccionOI").value = doc.data().DatosAgudezaVisual.Vision_Estenopeico_Sin_Correcion_OI
                                document.getElementById("visionEstenopeicoConCorreccionOI").value = doc.data().DatosAgudezaVisual.Vision_Estenopeico_Con_Correcion_OI
                                document.getElementById("visionCercanaSinCorreccionOI").value = doc.data().DatosAgudezaVisual.Vision_Cercana_Sin_Correcion_OI
                                document.getElementById("visionCercanaConCorreccionOI").value = doc.data().DatosAgudezaVisual.Vision_Cercana_Con_Correcion_OI
                                document.getElementById("visionLejanaSinCorreccionAO").value = doc.data().DatosAgudezaVisual.Vision_Lejana_Sin_Correcion_AO
                                document.getElementById("visionLejanaConCorreccionAO").value = doc.data().DatosAgudezaVisual.Vision_Lejana_Con_Correcion_AO
                                document.getElementById("visionEstenopeicoSinCorreccionAO").value = doc.data().DatosAgudezaVisual.Vision_Estenopeico_Sin_Correcion_AO
                                document.getElementById("visionEstenopeicoConCorreccionAO").value = doc.data().DatosAgudezaVisual.Vision_Estenopeico_Con_Correcion_AO
                                document.getElementById("visionCercanaSinCorreccionAO").value = doc.data().DatosAgudezaVisual.Vision_Cercana_Sin_Correcion_AO
                                document.getElementById("visionCercanaConCorreccionAO").value = doc.data().DatosAgudezaVisual.Vision_Cercana_Con_Correcion_AO
                                document.getElementById("distanciaPupilar").value = doc.data().DatosAgudezaVisual.Distancia_Pupilar
                                document.getElementById("distanciaNPDerecha").value = doc.data().DatosAgudezaVisual.Distancia_NP_Derecha
                                document.getElementById("distanciaNPIzquierda").value = doc.data().DatosAgudezaVisual.Distancia_NP_Izquierda
                                document.getElementById("ojoDominante").value = doc.data().DatosAgudezaVisual.Ojo_Dominante

                                //Examen externo
                                document.getElementById("examenExternoOD").value = doc.data().DatosExamenExterno.Examen_Externo_OD
                                document.getElementById("examenExternoOI").value = doc.data().DatosExamenExterno.Examen_Externo_OI

                                //Biomicroscopia
                                document.getElementById("descripcionBiomicroscopiaOD").value = doc.data().DatosBiomicroscopia.Descripcion_Biomicroscopia_OD
                                document.getElementById("descripcionBiomicroscopiaOI").value = doc.data().DatosBiomicroscopia.Descripcion_Biomicroscopia_OI

                                //Motilidad ocular
                                document.getElementById("hirchberg").value = doc.data().DatosMotilidadOcular.Hirchberg
                                document.getElementById("kappaOD").value = doc.data().DatosMotilidadOcular.Kappa_OD
                                document.getElementById("kappaOI").value = doc.data().DatosMotilidadOcular.Kappa_OI
                                document.getElementById("duccionesOD").value = doc.data().DatosMotilidadOcular.DuccionesOD
                                document.getElementById("duccionesOI").value = doc.data().DatosMotilidadOcular.DuccionesOI
                                document.getElementById("versiones").value = doc.data().DatosMotilidadOcular.Versiones
                                document.getElementById("ppcObjetoReal").value = doc.data().DatosMotilidadOcular.PPC_Objeto_Real
                                document.getElementById("luz").value = doc.data().DatosMotilidadOcular.Luz
                                document.getElementById("luzFiltroRojo").value = doc.data().DatosMotilidadOcular.Luz_Filtro_Rojo

                                //Reflejos pupilares
                                document.getElementById("reflejosPupilaresDB").value = doc.data().Datos_Reflejos_Pupilares.Reflejos_Pupilares

                                //Medida de la desviación habitual
                                document.getElementById("tipoDeTestCoverTestVL6m").value = doc.data().DatosMedidaDesviacionHabitual.Tipo_De_Test_Cover_Test_VL_6m
                                document.getElementById("vpHabitual").value = doc.data().DatosMedidaDesviacionHabitual.Vp_Habitual
                                document.getElementById("desviacionCM").value = doc.data().DatosMedidaDesviacionHabitual.Desviacion_Cm

                                //Oftalmoscopia
                                document.getElementById("directa").value = doc.data().DatosOftalmoscopia.Directa
                                document.getElementById("indirectaTecnica").value = doc.data().DatosOftalmoscopia.Indirecta_Tecnica
                                document.getElementById("relAV").value = doc.data().DatosOftalmoscopia.Rel_AV
                                document.getElementById("excDisco").value = doc.data().DatosOftalmoscopia.Exc_Disco
                                document.getElementById("macula").value = doc.data().DatosOftalmoscopia.Macula
                                document.getElementById("fijacion").value = doc.data().DatosOftalmoscopia.Fijacion
                                document.getElementById("relAV2").value = doc.data().DatosOftalmoscopia.Rel_AV2
                                document.getElementById("excDisco2").value = doc.data().DatosOftalmoscopia.Exc_Disco2
                                document.getElementById("macula2").value = doc.data().DatosOftalmoscopia.Macula2
                                document.getElementById("fijacion2").value = doc.data().DatosOftalmoscopia.Fijacion2

                                //Queratometría
                                document.getElementById("queratometriaOD").value = doc.data().DatosQueratometria.Queratometria_OD
                                document.getElementById("queratometriaAstigmatismoCornealOD").value = doc.data().DatosQueratometria.Queratometria_Astigmatismo_Corneal_OD
                                document.getElementById("queratometriaMirasOD").value = doc.data().DatosQueratometria.Queratometria_Miras_OD
                                document.getElementById("queratometriaOI").value = doc.data().DatosQueratometria.Queratometria_OI
                                document.getElementById("queratometriaAstigmatismoCornealOI").value = doc.data().DatosQueratometria.Queratometria_Astigmatismo_Corneal_OI
                                document.getElementById("queratometriaMirasOI").value = doc.data().DatosQueratometria.Queratometria_Miras_OI

                                //Retinoscopia estática
                                document.getElementById("estaticaEsferaOD").value = doc.data().DatosRetinoscopiaEstatica.Estatica_Esfera_OD
                                document.getElementById("estaticaCilindroOD").value = doc.data().DatosRetinoscopiaEstatica.Estatica_Cilindro_OD
                                document.getElementById("estaticaEjeOD").value = doc.data().DatosRetinoscopiaEstatica.Estatica_Eje_OD
                                document.getElementById("estaticaAdicionOD").value = doc.data().DatosRetinoscopiaEstatica.Estatica_Adicion_OD
                                document.getElementById("estaticaEsferaOI").value = doc.data().DatosRetinoscopiaEstatica.Estatica_Esfera_OI
                                document.getElementById("estaticaCilindroOI").value = doc.data().DatosRetinoscopiaEstatica.Estatica_Cilindro_OI
                                document.getElementById("estaticaEjeOI").value = doc.data().DatosRetinoscopiaEstatica.Estatica_Eje_OI
                                document.getElementById("estaticaAdicionOI").value = doc.data().DatosRetinoscopiaEstatica.Estatica_Adicion_OI

                                //Retinoscopia dinámica
                                document.getElementById("dinamicaEsferaOD").value = doc.data().DatosRetinoscopiaDinamica.Dinamica_Esfera_OD
                                document.getElementById("dinamicaCilindroOD").value = doc.data().DatosRetinoscopiaDinamica.Dinamica_Cilindro_OD
                                document.getElementById("dinamicaEjeOD").value = doc.data().DatosRetinoscopiaDinamica.Dinamica_Eje_OD
                                document.getElementById("dinamicaAdicionOD").value = doc.data().DatosRetinoscopiaDinamica.Dinamica_Adicion_OD
                                document.getElementById("dinamicaEsferaOI").value = doc.data().DatosRetinoscopiaDinamica.Dinamica_Esfera_OI
                                document.getElementById("dinamicaCilindroOI").value = doc.data().DatosRetinoscopiaDinamica.Dinamica_Cilindro_OI
                                document.getElementById("dinamicaEjeOI").value = doc.data().DatosRetinoscopiaDinamica.Dinamica_Eje_OI
                                document.getElementById("dinamicaAdicionOI").value = doc.data().DatosRetinoscopiaDinamica.Dinamica_Adicion_OI

                                //Retinoscopia ciclopejia
                                document.getElementById("ciclopejiaEsferaOD").value = doc.data().DatosRetinoscopiaCiclopejia.Ciclopejia_Esfera_OD
                                document.getElementById("ciclopejiaCilindroOD").value = doc.data().DatosRetinoscopiaCiclopejia.Ciclopejia_Cilindro_OD
                                document.getElementById("ciclopejiaEjeOD").value = doc.data().DatosRetinoscopiaCiclopejia.Ciclopejia_Eje_OD
                                document.getElementById("ciclopejiaAdicionOD").value = doc.data().DatosRetinoscopiaCiclopejia.Ciclopejia_Adicion_OD
                                document.getElementById("ciclopejiaEsferaOI").value = doc.data().DatosRetinoscopiaCiclopejia.Ciclopejia_Esfera_OI
                                document.getElementById("ciclopejiaCilindroOI").value = doc.data().DatosRetinoscopiaCiclopejia.Ciclopejia_Cilindro_OI
                                document.getElementById("ciclopejiaEjeOI").value = doc.data().DatosRetinoscopiaCiclopejia.Ciclopejia_Eje_OI
                                document.getElementById("ciclopejiaAdicionOI").value = doc.data().DatosRetinoscopiaCiclopejia.Ciclopejia_Adicion_OI
                                document.getElementById("tipoMedicamento").value = doc.data().DatosRetinoscopiaCiclopejia.Tipo_medicamento
                                document.getElementById("dosis").value = doc.data().DatosRetinoscopiaCiclopejia.Dosis

                                //Examen subjetivo
                                document.getElementById("examenEsferaOD").value = doc.data().DatosExamenSubjetivo.Examen_Esfera_OD
                                document.getElementById("examenCilindroOD").value = doc.data().DatosExamenSubjetivo.Examen_Cilindro_OD
                                document.getElementById("examenEjeOD").value = doc.data().DatosExamenSubjetivo.Examen_Eje_OD
                                document.getElementById("examenAdicionOD").value = doc.data().DatosExamenSubjetivo.Examen_Adicion_OD
                                document.getElementById("examenEsferaOI").value = doc.data().DatosExamenSubjetivo.Examen_Esfera_OI
                                document.getElementById("examenCilindroOI").value = doc.data().DatosExamenSubjetivo.Examen_Cilindro_OI
                                document.getElementById("examenEjeOI").value = doc.data().DatosExamenSubjetivo.Examen_Eje_OI
                                document.getElementById("examenAdicionOI").value = doc.data().DatosExamenSubjetivo.Examen_Adicion_OI

                                //Observaciones
                                document.getElementById("observacionesDB").value = doc.data().DatosObservaciones.Observaciones

                                //Afinación VL y Y VP
                                document.getElementById("tecnicaVL").value = doc.data().DatosAfinacionVLVP.Tecnica_VL
                                document.getElementById("vp").value = doc.data().DatosAfinacionVLVP.VP
                                document.getElementById("afinacionEsferaOD").value = doc.data().DatosAfinacionVLVP.Afinacion_Esfera_OD
                                document.getElementById("afinacionCilindroOD").value = doc.data().DatosAfinacionVLVP.Afinacion_Cilindro_OD
                                document.getElementById("afinacionEjeOD").value = doc.data().DatosAfinacionVLVP.Afinacion_Eje_OD
                                document.getElementById("afinacionAdicionOD").value = doc.data().DatosAfinacionVLVP.Afinacion_Adicion_OD
                                document.getElementById("afinacionEsferaOI").value = doc.data().DatosAfinacionVLVP.Afinacion_Esfera_OI
                                document.getElementById("afinacionCilindroOI").value = doc.data().DatosAfinacionVLVP.Afinacion_Cilindro_OI
                                document.getElementById("afinacionEjeOI").value = doc.data().DatosAfinacionVLVP.Afinacion_Eje_OI
                                document.getElementById("afinacionAdicionOI").value = doc.data().DatosAfinacionVLVP.Afinacion_Adicion_OI


                                //Medida de la desviación inducida
                                document.getElementById("tipoTest").value = doc.data().DatosMedidaDesviacionInducida.Tipo_Test
                                document.getElementById("mDesviacionInducida").value = doc.data().DatosMedidaDesviacionInducida.m_DesviacionInducida
                                document.getElementById("vpDesviacionInducida").value = doc.data().DatosMedidaDesviacionInducida.VP_Desviacion_Inducida
                                document.getElementById("cmDesviacionInducida").value = doc.data().DatosMedidaDesviacionInducida.Cm_Desviacion_Inducida

                                //Flexibilidad de acomodación monocular
                                document.getElementById("masOD").value = doc.data().DatosFlexibilidadAcomodacionMonocular.Mas_OD
                                document.getElementById("menosOD").value = doc.data().DatosFlexibilidadAcomodacionMonocular.Menos_OD
                                document.getElementById("cpmOD").value = doc.data().DatosFlexibilidadAcomodacionMonocular.cpm_OD
                                document.getElementById("masOI").value = doc.data().DatosFlexibilidadAcomodacionMonocular.Mas_OI
                                document.getElementById("menosOI").value = doc.data().DatosFlexibilidadAcomodacionMonocular.Menos_OI
                                document.getElementById("cpmOI").value = doc.data().DatosFlexibilidadAcomodacionMonocular.cpm_OI

                                //Estereopsis
                                document.getElementById("estereopsisInput1").value = doc.data().DatosEstereopsis.Test_Estereopsis_Input_1
                                document.getElementById("estereopsisInput2").value = doc.data().DatosEstereopsis.Test_Estereopsis_Input_2

                                //Visión cromática
                                document.getElementById("testVisionCromatica").value = doc.data().DatosVisionCromatica.Test_Vision_Cromatica
                                document.getElementById("visionCromaticaOD").value = doc.data().DatosVisionCromatica.Vision_Cromatica_OD
                                document.getElementById("visionCromaticaOI").value = doc.data().DatosVisionCromatica.Vision_Cromatica_OI

                                //Prescripción óptica
                                document.getElementById("esferaOD").value = doc.data().DatosPrescripcionOptica.Esfera_OD
                                document.getElementById("cilindroOD").value = doc.data().DatosPrescripcionOptica.Cilindro_OD
                                document.getElementById("ejeOD").value = doc.data().DatosPrescripcionOptica.Eje_OD
                                document.getElementById("avOD").value = doc.data().DatosPrescripcionOptica.AV_OD
                                document.getElementById("addOD").value = doc.data().DatosPrescripcionOptica.ADD_OD
                                document.getElementById("esferaOI").value = doc.data().DatosPrescripcionOptica.Esfera_OI
                                document.getElementById("cilindroOI").value = doc.data().DatosPrescripcionOptica.Cilindro_OI
                                document.getElementById("ejeOI").value = doc.data().DatosPrescripcionOptica.Eje_OI
                                document.getElementById("avOI").value = doc.data().DatosPrescripcionOptica.AV_OI
                                document.getElementById("addOI").value = doc.data().DatosPrescripcionOptica.ADD_OI
                                document.getElementById("tipoLente2").value = doc.data().DatosPrescripcionOptica.Tipo_Lente
                                document.getElementById("filtro2").value = doc.data().DatosPrescripcionOptica.Filtro
                                document.getElementById("material2").value = doc.data().DatosPrescripcionOptica.Material

                                //DNP
                                document.getElementById("dnpOD").value = doc.data().DatosDNP.DNP_OD
                                document.getElementById("dnpOI").value = doc.data().DatosDNP.DNP_OI

                                //Prescripción medicamentosa
                                document.getElementById("dci0").value = doc.data().DatosPrescripcionMedicamentosa.DCI_1
                                document.getElementById("concentracion0").value = doc.data().DatosPrescripcionMedicamentosa.Concentracion_1
                                document.getElementById("formaFarmaceutica0").value = doc.data().DatosPrescripcionMedicamentosa.Forma_Farmaceutica_1
                                document.getElementById("cantidad0").value = doc.data().DatosPrescripcionMedicamentosa.Cantidad_1
                                document.getElementById("dci1").value = doc.data().DatosPrescripcionMedicamentosa.DCI_2
                                document.getElementById("concentracion1").value = doc.data().DatosPrescripcionMedicamentosa.Concentracion_2
                                document.getElementById("formaFarmaceutica1").value = doc.data().DatosPrescripcionMedicamentosa.Forma_Farmaceutica_2
                                document.getElementById("cantidad1").value = doc.data().DatosPrescripcionMedicamentosa.Cantidad_2
                                document.getElementById("dci3").value = doc.data().DatosPrescripcionMedicamentosa.DCI_3
                                document.getElementById("concentracion3").value = doc.data().DatosPrescripcionMedicamentosa.Concentracion_3
                                document.getElementById("formaFarmaceutica3").value = doc.data().DatosPrescripcionMedicamentosa.Forma_Farmaceutica_3
                                document.getElementById("cantidad3").value = doc.data().DatosPrescripcionMedicamentosa.Cantidad_3
                                document.getElementById("c1").value = doc.data().DatosPrescripcionMedicamentosa.Codigo_Diagnostico_Principal
                                document.getElementById("c_1").value = doc.data().DatosPrescripcionMedicamentosa.Diagnostico_Principal
                                document.getElementById("c2").value = doc.data().DatosPrescripcionMedicamentosa.Codigo_Diagnostico_R1
                                document.getElementById("c_2").value = doc.data().DatosPrescripcionMedicamentosa.Diagnostico_R1
                                document.getElementById("c3").value = doc.data().DatosPrescripcionMedicamentosa.Codigo_Diagnostico_R2
                                document.getElementById("c_3").value = doc.data().DatosPrescripcionMedicamentosa.Diagnostico_R2
                                document.getElementById("digitarCodigo1").value = doc.data().DatosPrescripcionMedicamentosa.Codigo_Digitado1
                                document.getElementById("digitarCodigo2").value = doc.data().DatosPrescripcionMedicamentosa.Codigo_Digitado2
                                document.getElementById("digitarCodigo3").value = doc.data().DatosPrescripcionMedicamentosa.Codigo_Digitado3
                                document.getElementById("origenEnfermedad").value = doc.data().DatosPrescripcionMedicamentosa.Origen_Enfermedad

                                //Recomendacón de uso
                                document.getElementById("recomendacionesUso").value = doc.data().DatosRecomendacionUso.Recomendacion

                                //Conducta
                                document.getElementById("conductaDB").value = doc.data().DatosConducta.Conducta
                                document.getElementById("controlDB").value = doc.data().DatosConducta.Control

                                //Remisiones
                                document.getElementById("remisionesDB").value = doc.data().DatosRemisiones.Remisiones
                                document.getElementById("horaSalida").value = doc.data().DatosRemisiones.Hora_Salida
                                document.getElementById("estudiante").value = doc.data().DatosRemisiones.Estudiante
                                document.getElementById("profesor").value = doc.data().DatosRemisiones.Profesor
                                document.getElementById("noFactura").value = doc.data().DatosRemisiones.No_Factura
                                document.getElementById("valorFactura").value = doc.data().DatosRemisiones.Valor_Factura

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
                                    window.location.href = "/views/clinicHistory/viewClinicHistory.html";
                                }
                            });
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
                        window.location.href = "/views/clinicHistory/viewClinicHistory.html";
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
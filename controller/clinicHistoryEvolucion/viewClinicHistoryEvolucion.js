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

        var hoy = new Date()

        document.getElementById("fechaHoy").textContent = "Fecha: " + hoy.getDate() + "/" + hoy.getMonth() + 1 + "/" + hoy.getFullYear()
        document.getElementById("fechaHoy2").textContent = "Fecha: " + hoy.getDate() + "/" + hoy.getMonth() + 1 + "/" + hoy.getFullYear()

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
                getDocs(collection(db, "Clinic_History_Evolucion", "Data", "Data_Evolucion")).
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
                                    window.location.href = "/views/clinicHistoryEvolucion/viewClinicHistoryEvolucion.html";
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
                                    getDocs(collection(db, "Clinic_History_Evolucion", "Data", "Data_Evolucion")).
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
                                                    document.getElementById("acompañante").value = doc.data().DatosPersonales.Acompañante
                                                    document.getElementById("parentesco2").value = doc.data().DatosPersonales.Parentesco_Acompañante
                                                    document.getElementById("telefono2").value = doc.data().DatosPersonales.Telefono_Acompañante
                                                    document.getElementById("fechaUltimoControl").value = doc.data().DatosPersonales.Fecha_Ultimo_Control
                                                    document.getElementById("eps").value = doc.data().DatosPersonales.Eps
                                                    document.getElementById("tipoAfiliacion").value = doc.data().DatosPersonales.Tipo_Afiliacion

                                                    //Evolucion
                                                    document.getElementById("evolucion").value = doc.data().DatosEvolucion.Evolucion

                                                    //Prescripción medicamentosa
                                                    document.getElementById("c1").value = doc.data().DatosPrescripcionMedicamentosa.Codigo_Diagnostico_Principal
                                                    document.getElementById("c_1").value = doc.data().DatosPrescripcionMedicamentosa.Diagnostico_Principal
                                                    document.getElementById("digitarCodigo1").value = doc.data().DatosPrescripcionMedicamentosa.Codigo_Digitado1

                                                    //Plan de tratamiento
                                                    document.getElementById("planTratamiento").value = doc.data().DatosPlanTratamiento.Plan_Tratamiento

                                                    //Control
                                                    document.getElementById("controlDB").value = doc.data().DatosControl.Control
                                                    document.getElementById("profesor").value = doc.data().DatosControl.Profesor
                                                    document.getElementById("estudiante").value = doc.data().DatosControl.Estudiante
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
                                            window.location.href = "/views/clinicHistoryEvolucion/viewClinicHistoryEvolucion.html";
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
                        window.location.href = "/views/clinicHistoryEvolucion/viewClinicHistoryEvolucion.html";
                    }
                });
            }
        });

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
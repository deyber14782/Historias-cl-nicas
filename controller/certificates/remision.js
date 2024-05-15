import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

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
            inputValue: localStorage.getItem("Documento")
        }).then((result) => {
            if (result.isDismissed) {
                const uid = user.uid
                localStorage.removeItem("Documento")
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
                            if (result.value == doc.data().DatosPersonales.Numero_Identificacion && doc.data().DatosRemisiones.Remisiones.length != 0) {
                                localStorage.removeItem("Documento")
                                band = true
                                document.getElementById("nombre").value = doc.data().DatosPersonales.Nombres + ' ' + doc.data().DatosPersonales.Apellidos
                                document.getElementById("tipoDocumento").value = doc.data().DatosPersonales.Tipo_Identificacion
                                document.getElementById("numeroDocumento").value = doc.data().DatosPersonales.Numero_Identificacion
                                document.getElementById("fecha").value = doc.data().DatosPersonales.Fecha
                                document.getElementById("eps").value = doc.data().DatosPersonales.Eps
                                document.getElementById("afiliacion").value = doc.data().DatosPersonales.Tipo_Afiliacion

                                document.getElementById("remision").value = doc.data().DatosRemisiones.Remisiones
                            }
                        })
                    }).then(() => {
                        if (band == false) {
                            var band2 = false
                            getDocs(collection(db, "Clinic_History_Ortoptica", "Data", "Data_Ortoptica")).
                                then((querySnapshot) => {
                                    querySnapshot.forEach((doc) => {
                                        if (result.value == doc.data().DatosPersonales.Numero_Identificacion && doc.data().DatosRemisiones.Remisiones.length != 0) {
                                            localStorage.removeItem("Documento")
                                            band2 = true
                                            document.getElementById("nombre").value = doc.data().DatosPersonales.Nombres + ' ' + doc.data().DatosPersonales.Apellidos
                                            document.getElementById("tipoDocumento").value = doc.data().DatosPersonales.Tipo_Identificacion
                                            document.getElementById("numeroDocumento").value = doc.data().DatosPersonales.Numero_Identificacion
                                            document.getElementById("fecha").value = doc.data().DatosPersonales.Fecha
                                            document.getElementById("eps").value = doc.data().DatosPersonales.EPS
                                            document.getElementById("afiliacion").value = doc.data().DatosPersonales.Tipo_afiliacion

                                            document.getElementById("remision").value = doc.data().DatosRemisiones.Remisiones
                                        }
                                    })
                                }).then(() => {
                                    if (band2 == false) {
                                        Swal.fire({
                                            title: 'No se encontraron remisiones para este paciente',
                                            icon: 'error',
                                            confirmButtonColor: '#d33',
                                            confirmButtonText: 'Ok',
                                            allowOutsideClick: false,
                                            allowEscapeKey: false,
                                            allowEnterKey: false,
                                            stopKeydownPropagation: false
                                        }).then((result) => {
                                            if (result.isConfirmed) {
                                                window.location.href = "/views/certificates/remision.html";
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
                        window.location.href = "/views/certificates/remision.html";
                    }
                });
            }
        });

        imprimir.addEventListener('click', (e) => {
            var view = document.getElementById("container");

            html2pdf()
                .set({
                    margin: 0.5,
                    filename: document.getElementById("nombre").value + ' Remisión',
                    html2canvas: {
                        scale: 2, // A mayor escala, mejores gráficos, pero más peso
                    },
                    jsPDF: {
                        unit: "in",
                        format: "a4",
                        orientation: 'landscape' // landscape o portrait
                    }

                })
                .from(view)
                .save()
                .catch(err => console.log(err));
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
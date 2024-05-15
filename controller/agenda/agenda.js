import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

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
var citas = []

onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        getDocs(collection(db, "Users", "User_id", "Private_Data")).
            then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    if (doc.data().Id == uid) {
                        if (doc.data().Rol != "Administrador") {
                            Swal.fire({
                                title: 'Esta página es solo para administradores',
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

                    }

                })
            })
        getDocs(collection(db, 'Citas', 'id_Citas', 'data_Citas')).
            then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    var citasObj = {
                        id: '',
                        title: '',
                        start: '',
                        color: ''
                    }
                    citasObj.id = doc.data().Id
                    citasObj.title = doc.data().Nombre
                    citasObj.start = doc.data().Fecha
                    citasObj.color = doc.data().Color
                    citas.push(citasObj)
                })
            }).then(() => {

                for (var i = 0; i < citas.length; i++) {
                    citas[i].start = new Date(citas[i].start)
                }
                let calendarEl = document.getElementById('calendar');
                let frm = document.getElementById('formulario');
                let eliminar = document.getElementById('btnEliminar');
                let myModal = new bootstrap.Modal(document.getElementById('myModal'));
                var calendar = new FullCalendar.Calendar(calendarEl, {
                    timeZone: 'local',
                    initialView: 'dayGridMonth',
                    locale: 'es',
                    firstDay: 1,
                    headerToolbar: {
                        left: 'prev next today',
                        center: 'title',
                        right: 'dayGridMonth'
                    },
                    hiddenDays: [0, 6],
                    events: citas,
                    editable: true,
                    dateClick: function (info) {
                        frm.reset();
                        eliminar.classList.add('d-none');
                        document.getElementById('start').value = info.dateStr + "T00:00";
                        document.getElementById('btnAccion').textContent = 'Registrar';
                        document.getElementById('titulo').textContent = 'Registrar Cita';
                        myModal.show();
                    },

                    eventClick: function (info) {
                        getDocs(collection(db, 'Citas', 'id_Citas', 'data_Citas')).
                            then((querySnapshot) => {
                                querySnapshot.forEach((doc) => {
                                    if (info.event.id == doc.data().Id) {
                                        document.getElementById('start').value = doc.data().Fecha;
                                        document.getElementById("tipoIdentificacion").value = doc.data().Tipo_Identificacion
                                        document.getElementById('id').value = doc.data().Id;
                                        document.getElementById('name').value = doc.data().Nombre;
                                        document.getElementById("lastName").value = doc.data().Apellido
                                        document.getElementById("genero").value = doc.data().Genero
                                        document.getElementById("fechaNacimiento").value = doc.data().Fecha_Nacimiento
                                        document.getElementById("edad").value = doc.data().Edad
                                        document.getElementById("acompañante").value = doc.data().Acompañante
                                        document.getElementById("paretesco").value = doc.data().Paretesco
                                        document.getElementById("telefonoAcompañante").value = doc.data().Telefono_Acompañante
                                        document.getElementById("fechaUltimoControl").value = doc.data().Fecha_Ultimo_Control
                                        document.getElementById("eps").value = doc.data().EPS
                                        document.getElementById("tipoAfiliacion").value = doc.data().Tipo_Afiliacion
                                        document.getElementById("nameStudent").value = doc.data().Nombre_Estudiante
                                        document.getElementById('color').value = doc.data().Color;
                                        document.getElementById('btnAccion').textContent = 'Modificar';
                                        document.getElementById('titulo').textContent = 'Actualizar Cita';
                                        eliminar.classList.remove('d-none');
                                        myModal.show();
                                    }
                                })
                            })
                    },

                });
                calendar.render();
                frm.addEventListener('submit', function (e) {
                    e.preventDefault();
                    var start = document.getElementById('start').value;
                    var tipoIdentificacion = document.getElementById("tipoIdentificacion").value
                    var cedula = document.getElementById("id").value
                    var name = document.getElementById('name').value;
                    var lastName = document.getElementById("lastName").value
                    var genero = document.getElementById("genero").value
                    var fechaNacimiento = document.getElementById("fechaNacimiento").value
                    var edad = document.getElementById("edad").value
                    var acompañante = document.getElementById("acompañante").value
                    var paretesco = document.getElementById("paretesco").value
                    var telefonoAcompañante = document.getElementById("telefonoAcompañante").value
                    var fechaUltimoControl = document.getElementById("fechaUltimoControl").value
                    var eps = document.getElementById("eps").value
                    var tipoAfiliacion = document.getElementById("tipoAfiliacion").value
                    var nameStudent = document.getElementById("nameStudent").value
                    var color = document.getElementById("color").value
                    if (name == '' || cedula == '' || start == '' || nameStudent == '' || lastName == '' || genero == ''
                        || fechaNacimiento == '' || edad == '') {
                        Swal.fire(
                            'Advertencia',
                            'Todo los campos son obligatorios',
                            'warning'
                        )
                    } else {
                        if (document.getElementById('titulo').textContent == 'Actualizar Cita') {
                            getDocs(collection(db, 'Citas', 'id_Citas', 'data_Citas')).
                                then((querySnapshot) => {
                                    querySnapshot.forEach((doc2) => {
                                        if (doc2.data().Id == cedula) {
                                            updateDoc(doc(db, 'Citas', 'id_Citas', 'data_Citas', doc2.id), {
                                                Fecha: start,
                                                Tipo_Identificacion: tipoIdentificacion,
                                                Id: cedula,
                                                Nombre: name,
                                                Apellido: lastName,
                                                Genero: genero,
                                                Fecha_Nacimiento: fechaNacimiento,
                                                Edad: edad,
                                                Acompañante: acompañante,
                                                Paretesco: paretesco,
                                                Telefono_Acompañante: telefonoAcompañante,
                                                Fecha_Ultimo_Control: fechaUltimoControl,
                                                EPS: eps,
                                                Tipo_Afiliacion: tipoAfiliacion,
                                                Nombre_Estudiante: nameStudent,
                                                Color: color
                                            }).then(() => {
                                                myModal.hide();
                                                calendar.refetchEvents();
                                            }).then(() => {
                                                window.location.reload()
                                            })
                                        }
                                    })
                                })
                        }
                        else if (document.getElementById('titulo').textContent == 'Registrar Cita') {
                            addDoc(collection(db, 'Citas', 'id_Citas', 'data_Citas'), {
                                Fecha: start,
                                Tipo_Identificacion: tipoIdentificacion,
                                Id: cedula,
                                Nombre: name,
                                Apellido: lastName,
                                Genero: genero,
                                Fecha_Nacimiento: fechaNacimiento,
                                Edad: edad,
                                Acompañante: acompañante,
                                Paretesco: paretesco,
                                Telefono_Acompañante: telefonoAcompañante,
                                Fecha_Ultimo_Control: fechaUltimoControl,
                                EPS: eps,
                                Tipo_Afiliacion: tipoAfiliacion,
                                Nombre_Estudiante: nameStudent,
                                Color: color

                            }).then(() => {
                                myModal.hide();
                                calendar.refetchEvents();
                            }).then(() => {
                                window.location.reload()
                            })
                        }
                    }
                });
                eliminar.addEventListener('click', function (e) {
                    myModal.hide();
                    e.preventDefault();
                    var name = document.getElementById('name').value;
                    var cedula = document.getElementById("id").value
                    var start = document.getElementById('start').value;
                    var nameStudent = document.getElementById("nameStudent").value
                    var color = document.getElementById("color").value
                    if (name == '' || cedula == '' || start == '' || nameStudent == '') {
                        Swal.fire(
                            'Advertencia',
                            'Todo los campos son obligatorios',
                            'warning'
                        )
                    }
                    else {
                        Swal.fire({
                            title: 'Advertencia',
                            text: "¿Está seguro de eliminar la cita?",
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Sí, elimínala'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                getDocs(collection(db, 'Citas', 'id_Citas', 'data_Citas')).
                                    then((querySnapshot) => {
                                        querySnapshot.forEach((doc2) => {
                                            if (doc2.data().Id == cedula) {
                                                deleteDoc(doc(db, 'Citas', 'id_Citas', 'data_Citas', doc2.id)).
                                                    then(() => {
                                                        myModal.hide();
                                                        calendar.refetchEvents();
                                                    }).then(() => {
                                                        window.location.reload()
                                                    })
                                            }
                                        })
                                    })
                            }
                        })
                    }

                });
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
})


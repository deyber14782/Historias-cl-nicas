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

onAuthStateChanged(auth, (user)=>{
    if(user){
        const uid = user.uid;
        getDocs(collection(db,"Users", "User_id", "Private_Data")).
        then((querySnapshot)=>{
            querySnapshot.forEach((doc)=>{
                if(doc.data().Id==uid){
                    if(doc.data().Rol=="Administrador"){
                        Swal.fire({
                            title: 'Esta página es solo para profesores y estudiantes',
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
                firstDay: 1 ,
                headerToolbar: {
                    left: 'prev next today',
                    center: 'title',
                    right: 'dayGridMonth'
                },
                hiddenDays: [0,6],
                events: citas,
                editable: false,
    
    
            });
            calendar.render();
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
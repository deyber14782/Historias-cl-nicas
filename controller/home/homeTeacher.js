//Consultas base de datos

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, getDocs, collection } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


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
        getDocs(collection(db,"Users", "User_id", "Private_Data")).
        then((querySnapshot)=>{
            querySnapshot.forEach((doc)=>{
                if(doc.data().Id==uid){
                    if(doc.data().Rol=="Profesor"){
                        document.getElementById("text").textContent=doc.data().Nombre.split(' ')[0]
                        document.getElementById("text2").textContent=doc.data().Rol
                    }
                    else{
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

    } else {
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

let btn = document.querySelector('#btn')
let sidebar = document.querySelector('.sidebar')

btn.onclick = function () {
    sidebar.classList.toggle('active')
}

//Acceso agenda

agenda.addEventListener('click', (e)=>{
    location.href = "/views/agenda/agenda2.html"
})

agenda1.addEventListener('click', (e)=>{
    location.href = "/views/agenda/agenda2.html"
})

agenda2.addEventListener('click', (e)=>{
    location.href = "/views/agenda/agenda2.html"
})

agenda3.addEventListener('click', (e)=>{
    location.href = "/views/agenda/agenda2.html"
})

agenda4.addEventListener('click', (e)=>{
    location.href = "/views/agenda/agenda2.html"
})

agenda5.addEventListener('click', (e)=>{
    location.href = "/views/agenda/agenda2.html"
})

//Acceso manejo rips

manejoRips.addEventListener('click',(e)=>{
    location.href="/views/rips/rips.html"
})

manejoRips1.addEventListener('click',(e)=>{
    location.href="/views/rips/rips.html"
})

manejoRips2.addEventListener('click',(e)=>{
    location.href="/views/rips/rips.html"
})

manejoRips3.addEventListener('click',(e)=>{
    location.href="/views/rips/rips.html"
})

manejoRips4.addEventListener('click',(e)=>{
    location.href="/views/rips/rips.html"
})

//Acceso certificados

certificados.addEventListener('click',(e)=>{
    location.href="/views/selectCertificate/selectCertificate.html"
})

certificados1.addEventListener('click',(e)=>{
    location.href="/views/selectCertificate/selectCertificate.html"
})

certificados2.addEventListener('click',(e)=>{
    location.href="/views/selectCertificate/selectCertificate.html"
})

//Acceso historias clíncas

clinicHistory.addEventListener('click', (e) => {
    location.href = "/views/selectClinicHistory/selectClinicHistory.html"
})

clinicHistoryMenu1.addEventListener('click',(e)=>{
    location.href = "/views/selectClinicHistory/selectClinicHistory.html"
})

clinicHistoryMenu2.addEventListener('click',(e)=>{
    location.href = "/views/selectClinicHistory/selectClinicHistory.html"
})

clinicHistoryMenu3.addEventListener('click',(e)=>{
    location.href = "/views/selectClinicHistory/selectClinicHistory.html"
})

//Acceso ver historias clíncas

verClinicHistory.addEventListener('click', (e) => {
    location.href = "/views/selectClinicHistory/selectViewClinicHistory.html"
})

verClinicHistoryMenu1.addEventListener('click', (e) => {
    location.href = "/views/selectClinicHistory/selectViewClinicHistory.html"
})

verClinicHistoryMenu2.addEventListener('click', (e) => {
    location.href = "/views/selectClinicHistory/selectViewClinicHistory.html"
})

verClinicHistoryMenu3.addEventListener('click', (e) => {
    location.href = "/views/selectClinicHistory/selectViewClinicHistory.html"
})

verClinicHistoryMenu4.addEventListener('click', (e) => {
    location.href = "/views/selectClinicHistory/selectViewClinicHistory.html"
})

//Cerrar sesión

logout1.addEventListener('click',(e)=>{
    signOut(auth).then(() => {
        // Sign-out successful.
        Swal.fire({
            title: '¿Estás seguro que quieres cerrar sesión?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Sí, Ciérrala!'
          }).then((result) => {
            if (result.isConfirmed) {
              auth.signOut();
              window.location.href="/index.html";
            }
          });
      })
})

logout2.addEventListener('click',(e)=>{
    signOut(auth).then(() => {
        // Sign-out successful.
        Swal.fire({
            title: '¿Estás seguro que quieres cerrar sesión?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Sí, Ciérrala!'
          }).then((result) => {
            if (result.isConfirmed) {
              auth.signOut();
              window.location.href="/index.html";
            }
          });
      })
})

logout3.addEventListener('click',(e)=>{
    signOut(auth).then(() => {
        // Sign-out successful.
        Swal.fire({
            title: '¿Estás seguro que quieres cerrar sesión?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Sí, Ciérrala!'
          }).then((result) => {
            if (result.isConfirmed) {
              auth.signOut();
              window.location.href="/index.html";
            }
          });
      })
})
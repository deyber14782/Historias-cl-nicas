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


/*
onAuthStateChanged(auth, (user)=>{
    if(user){

    }
})
*/


Swal.fire({
    title: "Seleccione dos variables para comparar",
    html: `
    <div class=box>
    <select id="param1" class="param1">
        <option value="0">Seleccione una opción<option>
        <option value="Genero">Género<option>
        <option value="Procedencia">Procedencia<option>
        <option value="Ocupacion">Ocupación<option>
        <option value="diagnostico">Diagnóstico<option>
        <option value="Edad">Edad<option>
    </select>
    <select id="param2" class="param2">
        <option value="0">Seleccione una opción<option>
        <option value="Genero">Género<option>
        <option value="Procedencia">Procedencia<option>
        <option value="Ocupacion">Ocupación<option>
        <option value="diagnostico">Diagnóstico<option>
        <option value="Edad">Edad<option>  
    </select> 
    </div>

   `,
    confirmButtonText: 'OK',
    showCancelButton: true,
    cancelButtonText: 'Volver al menú',
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    stopKeydownPropagation: false,
}).then((result)=>{
    var param1 = document.getElementById("param1").value
    var param2 = document.getElementById("param2").value

    if(result.isDismissed){

    }
    else if(param1 == 'edad' || param2 == 'edad'){

    }
    else if(param1 == '0' || param2 == '0'){
        Swal.fire({
            title: "Error",
            icon: "error",
            text: "Debes seleccionar los parámetros para comparar" ,
            confirmButtonText: 'OK',
            showCancelButton: true,
            cancelButtonText: 'Volver al menú',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            stopKeydownPropagation: false,
        }).then((result)=>{
            if(result.isConfirmed){
                location.href="/views/estadisticas/estadisticas.html"
            }
            else{

            }
        })
    }
    else{
        
    }
})
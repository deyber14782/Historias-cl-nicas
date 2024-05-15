var cta = document.querySelector(".cta");
var check = 0;

cta.addEventListener('click', function (e) {
    var text = e.target.nextElementSibling;
    var loginText = e.target.parentElement;
    text.classList.toggle('show-hide');
    loginText.classList.toggle('expand');
    if (check == 0) {
        cta.innerHTML = "<i class=\"fas fa-chevron-up\"></i>";
        check++;
    }
    else {
        cta.innerHTML = "<i class=\"fas fa-chevron-down\"></i>";
        check = 0;
    }
})

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
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

login.addEventListener('click', (e) => {
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value

    if (email.length != 0 && password != 0) {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                        const uid = user.uid;
                        getDocs(collection(db,"Users", "User_id", "Private_Data")).
                        then((querySnapshot)=>{
                            querySnapshot.forEach((doc)=>{
                                if(doc.data().Id===uid){
                                    if(doc.data().Rol=="Administrador"){
                                        location.href="/views/home/homeAdmin.html"
                                    }
                                    else if(doc.data().Rol=="Estudiante"){
                                        location.href="/views/home/homeStudent.html"
                                    }
                                    else if(doc.data().Rol=="Profesor"){
                                        location.href="/views/home/homeTeacher.html"
                                    }
                                    else{
                                        Swal.fire({
                                            title: "ERROR",
                                            text: "Datos inválidos",
                                            icon: "error"
                                        }); 
                                    }
                                }

                            })
                        })
                    }
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Swal.fire({
                    title: "ERROR",
                    text: errorMessage,
                    icon: "error"
                });
            });
    }
    else {
        Swal.fire({
            title: "ERROR",
            text: "Debes llenar todos los datos",
            icon: "error"
        });
    }

})
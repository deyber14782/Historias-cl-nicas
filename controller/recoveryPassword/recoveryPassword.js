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
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


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

recovery.addEventListener('click', (e) => {

    var email = document.getElementById("email").value

    if (email.length != 0) {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                // ..
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 4000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "success",
                    title: "Revisa tu correo para restablecer la contraseña"
                });


            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
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


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, addDoc, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


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
                    if(doc.data().Rol!="Administrador"){
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
        register.addEventListener('click', (e) => {
            e.preventDefault()
            var name = document.getElementById("name").value
            var rol = document.getElementById("rol").value
            var email = document.getElementById("email").value
            var password = document.getElementById("password").value
            var confirmPassword = document.getElementById("confirmPassword").value

            if (name.length != 0 && email.length != 0 && password.length != 0 && confirmPassword.length != 0) {
                if (rol != 0) {
                    if (password == confirmPassword) {
                        createUserWithEmailAndPassword(auth, email, password)
                            .then((userCredential) => {
                                // Signed in 
                                const user = userCredential.user;
                                // ...
                                addDoc(collection(db, "Users", "User_id", "Private_Data"), {
                                    Nombre: name,
                                    Rol: rol,
                                    Correo: email,
                                    Id: user.uid
                                }).then(() => {
                                    const Toast = Swal.mixin({
                                        toast: true,
                                        position: "top-end",
                                        showConfirmButton: false,
                                        timer: 3000,
                                        timerProgressBar: true,
                                        didOpen: (toast) => {
                                            toast.onmouseenter = Swal.stopTimer;
                                            toast.onmouseleave = Swal.resumeTimer;
                                        }
                                    });
                                    Toast.fire({
                                        icon: "success",
                                        title: "El " + rol + " ha sido registrado"
                                    });

                                    document.getElementById("form").reset()

                                })

                            })
                            .catch((error) => {
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
                            text: "Las contraseñas no coinciden",
                            icon: "error"
                        });
                    }

                }
                else {
                    Swal.fire({
                        title: "ERROR",
                        text: "Debes seleccionar un rol",
                        icon: "error"
                    });
                }

            }

            else {
                Swal.fire({
                    title: "ERROR",
                    text: "Debes llenar todos los datos",
                    icon: "error"
                });
            }

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











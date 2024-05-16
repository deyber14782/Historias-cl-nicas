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
    if (!user) {
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
    else{
        getDocs(collection(db, "Clinic_History_Refraccion", "Data", "Data_Refraccion")).
        then((querySnapshot)=>{
            querySnapshot.forEach((doc)=>{
                var data = document.getElementById("data")

                var tr = document.createElement("tr")
                var td = document.createElement("td")
                var td2 = document.createElement("td")
                var td3 = document.createElement("td")
                var td4 = document.createElement("td")
                var td5 = document.createElement("td")
                var td6 = document.createElement("td")
                var td7 = document.createElement("td")
                var td8 = document.createElement("td")
                var td10 = document.createElement("td")
                var td11 = document.createElement("td")
                var td12 = document.createElement("td")
                var td13 = document.createElement("td")
                var td14 = document.createElement("td")

                data.appendChild(tr)
                tr.appendChild(td)
                tr.appendChild(td2)
                tr.appendChild(td3)
                tr.appendChild(td4)
                tr.appendChild(td5)
                tr.appendChild(td6)
                tr.appendChild(td7)
                tr.appendChild(td8)
                tr.appendChild(td10)
                tr.appendChild(td11)
                tr.appendChild(td12)
                tr.appendChild(td13)
                tr.appendChild(td14)

                td.textContent = doc.data().DatosPersonales.Fecha
                td2.textContent = doc.data().DatosPersonales.Numero_Identificacion
                td3.textContent = doc.data().DatosPersonales.Apellidos
                td4.textContent = doc.data().DatosPersonales.Nombres
                td5.textContent = doc.data().DatosPersonales.Edad
                td6.textContent = doc.data().DatosPersonales.Genero
                td7.textContent = doc.data().DatosPersonales.Codigo
                td8.textContent = doc.data().DatosPrescripcionMedicamentosa.Codigo_Diagnostico_Principal
                td10.textContent = doc.data().DatosRemisiones.No_Factura
                td11.textContent = doc.data().DatosRemisiones.Valor_Factura
                td12.textContent = doc.data().DatosPersonales.Hora_Entrada
                td13.textContent = doc.data().DatosRemisiones.Hora_Salida
                td14.textContent = doc.data().DatosRemisiones.Estudiante

                tr.className = "identificacion"
            })
        })

        getDocs(collection(db, "Clinic_History_Lentes", "Data", "Data_Lentes")).
        then((querySnapshot)=>{
            querySnapshot.forEach((doc)=>{
                var data = document.getElementById("data")

                var tr = document.createElement("tr")
                var td = document.createElement("td")
                var td2 = document.createElement("td")
                var td3 = document.createElement("td")
                var td4 = document.createElement("td")
                var td5 = document.createElement("td")
                var td6 = document.createElement("td")
                var td7 = document.createElement("td")
                var td8 = document.createElement("td")
                var td10 = document.createElement("td")
                var td11 = document.createElement("td")
                var td12 = document.createElement("td")
                var td13 = document.createElement("td")
                var td14 = document.createElement("td")

                data.appendChild(tr)
                tr.appendChild(td)
                tr.appendChild(td2)
                tr.appendChild(td3)
                tr.appendChild(td4)
                tr.appendChild(td5)
                tr.appendChild(td6)
                tr.appendChild(td7)
                tr.appendChild(td8)
                tr.appendChild(td10)
                tr.appendChild(td11)
                tr.appendChild(td12)
                tr.appendChild(td13)
                tr.appendChild(td14)

                td.textContent = doc.data().DatosPersonales.Fecha
                td2.textContent = doc.data().DatosPersonales.Numero_Identificacion
                td3.textContent = doc.data().DatosPersonales.Apellidos
                td4.textContent = doc.data().DatosPersonales.Nombres
                td5.textContent = doc.data().DatosPersonales.Edad
                td6.textContent = doc.data().DatosPersonales.Genero
                td7.textContent = doc.data().DatosPersonales.Codigo

                td10.textContent = doc.data().DatosControl.No_Factura 
                td11.textContent = doc.data().DatosControl.Valor_Factura
                td12.textContent
                td13.textContent = doc.data().DatosControl.Hora_Salida
                td14.textContent = doc.data().DatosControl.Estudiante

                tr.className = "identificacion"
            })
        })

        getDocs(collection(db, "Clinic_History_Ortoptica", "Data", "Data_Ortoptica")).
        then((querySnapshot)=>{
            querySnapshot.forEach((doc)=>{
                var data = document.getElementById("data")

                var data = document.getElementById("data")

                var tr = document.createElement("tr")
                var td = document.createElement("td")
                var td2 = document.createElement("td")
                var td3 = document.createElement("td")
                var td4 = document.createElement("td")
                var td5 = document.createElement("td")
                var td6 = document.createElement("td")
                var td7 = document.createElement("td")
                var td8 = document.createElement("td")
                var td10 = document.createElement("td")
                var td11 = document.createElement("td")
                var td12 = document.createElement("td")
                var td13 = document.createElement("td")
                var td14 = document.createElement("td")

                data.appendChild(tr)
                tr.appendChild(td)
                tr.appendChild(td2)
                tr.appendChild(td3)
                tr.appendChild(td4)
                tr.appendChild(td5)
                tr.appendChild(td6)
                tr.appendChild(td7)
                tr.appendChild(td8)
                tr.appendChild(td10)
                tr.appendChild(td11)
                tr.appendChild(td12)
                tr.appendChild(td13)
                tr.appendChild(td14)

                td.textContent = doc.data().DatosPersonales.Fecha
                td2.textContent = doc.data().DatosPersonales.Numero_Identificacion
                td3.textContent = doc.data().DatosPersonales.Apellidos
                td4.textContent = doc.data().DatosPersonales.Nombres
                td5.textContent = doc.data().DatosPersonales.Edad
                td6.textContent = doc.data().DatosPersonales.Genero
                td7.textContent = doc.data().DatosPersonales.Codigo
                td8.textContent = doc.data().DatosDiagnostico.Codigo_Diagnostico_Principal
                td10.textContent = doc.data().DatosControl.No_Factura 
                td11.textContent = doc.data().DatosControl.Valor_Factura
                td12.textContent
                td13.textContent = doc.data().DatosControl.Hora_Salida
                td14.textContent = doc.data().DatosControl.Estudiante

                tr.className = "identificacion"
            })
        })

        document.addEventListener("keyup", (e)=>{
            if(e.target.matches("#buscador")){
                document.querySelectorAll(".identificacion").forEach(numero=>{
                    numero.textContent.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
                        ?numero.classList.remove("filtro")
                        :numero.classList.add("filtro")
                })
            }
        })
    }
});
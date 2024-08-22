import { postUsers } from "../services/Services";

const btnRegistrarse = document.getElementById('btnRegistrarse');

async function validarVacios(e) {
    e.preventDefault()
    const nombre = document.getElementById('inputNombre').value;
    const email = document.getElementById('inputEmail').value;
    const codigo = document.getElementById('inputCodigo').value;
    const clave = document. getElementById('clave').value;
        let userData = {
            nombre:nombre,
            email:email,
            codigo:codigo
        }
    
        if (nombre.trim()==="" || email.trim()==="" || codigo.trim()==="" || clave.trim()==="") {
            alert('ingresa tus datos')
        } else{
            await postUsers(userData)
        }
    
    }
    
    
    
    btnRegistrarse.addEventListener('click',validarVacios)
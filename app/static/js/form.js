var inputs = document.getElementsByClassName('input');
for (var i =0; i < inputs.length; i++){
    inputs[i].addEventListener('keyup', function(){
        if(this.value.length>=1) {
            this.nextElementSibling.classList.add('fijar');
        } else {
            this.nextElementSibling.classList.remove('fijar');
        }
    });
}

function validar_CreateC()
{
    console.log("Inicio validar formulario.");
    var nombre =document.formCuenta.user.value;
    var email =document.formCuenta.userMail.value;
    var cemail =document.formCuenta.cuserMail.value;
    var password =document.formCuenta.password.value;

    if(nombre.length == 0 || nombre.length < 5)
    {
        alert("Debe escribir un nombre con minimo 5 caracteres.");
        document.formCuenta.user.focus();
        alert();
        return false;

    }
    
    var formato_email = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if(!email.match(formato_email))
    {
        alert("Escriba un correo válido.");
        return false;

    }

    if(password.length == 0 || password.length < 8)
    {
        alert("Debe escribir una contraseña con minimo 8 caracteres.");
        return false;
    }


    return true;
  

}

function mostrarContrasena()
{
    var campoClave = document.getElementById("password");
    var tipo = campoClave.type;

    if(tipo == "password")
    {
        campoClave.type = "text";


    }
    else
    {
        campoClave.type ="password";

    }

}

function comprobarEmail()
{
    var email = document.formCuenta.getElementById('userMail').value;
    var confemail= document.formCuenta.getElemntById('cuserMail').value;
    
    if(email != confemail)
    {
        alert("su correo no coincide");
    }
    
    else
    {
    alert('sus datos han sido guardados');
    }
}
    
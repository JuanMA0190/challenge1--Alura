const vocales=['a', 'e', 'i', 'o', 'u'];
const vocalesAcent =['á', 'é', 'í', 'ó', 'ú'];
const encrypt=['ai', 'enter', 'imes', 'ober', 'ufat'];

function changeDisplay(encontrado){
    if (encontrado == true){
        document.getElementById("img-notfound").style.display = "none";
        document.getElementById("title-notfound").style.display = "none";
        document.getElementById("p-notfound").style.display = "none";
        //----------------------------------------------------------------//
        document.getElementById("area-ouput").style.display = "block";
        document.getElementById("btn-copiar").style.display = "block";
    }else if (encontrado == false){
        alert("No se ingreso texto. Ingrese por favor.");
        document.getElementById("img-notfound").style.display = "block";
        document.getElementById("title-notfound").style.display = "block";
        document.getElementById("p-notfound").style.display = "block";
        //----------------------------------------------------------------//
        document.getElementById("area-ouput").style.display = "none";
        document.getElementById("btn-copiar").style.display = "none";
    }
    
}

function encriptar(){
    let palabra = document.getElementById("area-input").value;
    let ouput = document.getElementById("area-ouput");
    btnCopiarCambiarEstado(false);
    if(palabra != ""){
        changeDisplay(true);
        palabra=palabra.toLowerCase();
        palabra=eliminarAcentos(palabra);
        let array = palabra.split('');
        for(let i = 0; i<array.length; i++){
            for(let j = 0; j<vocales.length; j++){
                if (array[i] == vocales[j]){
                    array[i] = encrypt[j];
                    break;
                }
            }   
        }
        palabra = array.join("");
        ouput.value=palabra;
    }else{
        changeDisplay(false);
    }
    
}

function desencriptar(){
    let palabra = document.getElementById("area-input").value;
    let ouput = document.getElementById("area-ouput");
    btnCopiarCambiarEstado(false);
    if(palabra != ""){
        changeDisplay(true);
        palabra = palabra.toLowerCase();
        palabra= eliminarAcentos(palabra);
        for(let j=0; j<palabra.length; j++){
            for(let i=0; i<encrypt.length; i++){
                if(palabra.includes(encrypt[i])){
                    palabra=palabra.replace(encrypt[i],vocales[i]);
                }
            }
        }
        ouput.value=palabra;
    }else{
        changeDisplay(false);
    }    
}

    async function copiarPortapapeles(textarea) {
    try {
      await navigator.clipboard.writeText(textarea.value);
      btnCopiarCambiarEstado(true);
    } catch (err) {
      console.error('No se pudo copiar el texto: ', err);
    }
  }

function eliminarAcentos(str){
  for(let i=0; i<str.length;i++){
    for(let j=0; j<vocalesAcent.length;j++){
        if(str.includes(vocalesAcent[j])){
            str=str.replace(vocalesAcent[j],vocales[j]);
        }
    }
  }
  return str;
}

function btnCopiarCambiarEstado(cambiar){
    let boton = document.getElementById("btn-copiar");
    if(cambiar){
        boton.style.border="1px solid #35a81e";
        boton.style.color="#35a81e";
        boton.innerHTML="Texto Copiado!";
    }else{
        boton.style.border="none";
        boton.style.color="grey";
        boton.innerHTML="Copiar";
    }
}
const vocales=['a', 'e', 'i', 'o', 'u'];
const encrypt=['ai', 'enter', 'imes', 'ober', 'ufat'];
function changeDisplay(encontrado){
    if (encontrado == true){
        document.getElementById("img-notfound").style.display = "none";
        document.getElementById("title-notfound").style.display = "none";
        document.getElementById("p-notfound").style.display = "none";
        //----------------------------------------------------------------
        document.getElementById("area-ouput").style.display = "block";
        document.getElementById("btn-copiar").style.display = "block";
    }else if (encontrado == false){
        alert("No se ingreso texto. Ingrese por favor.");
        document.getElementById("img-notfound").style.display = "block";
        document.getElementById("title-notfound").style.display = "block";
        document.getElementById("p-notfound").style.display = "block";
        //----------------------------------------------------------------
        document.getElementById("area-ouput").style.display = "none";
        document.getElementById("btn-copiar").style.display = "none";
    }
    
}

function encriptar(){
    let palabra = document.getElementById("input-padron").value;
    let ouput = document.getElementById("area-ouput");
    if(palabra != ""){
        changeDisplay(true);
        let array = palabra.toLowerCase().split('');
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
    changeDisplay();
    let palabra = document.getElementById("input-padron").value;
    let ouput = document.getElementById("area-ouput");
    let array = palabra.toLowerCase().split('');

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
}
// h -ober- l- ai   //hola


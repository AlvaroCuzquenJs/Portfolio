let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("reactyangular");
        habilidades[3].classList.add("gitygithub");
        habilidades[4].classList.add("nodejs");
        habilidades[5].classList.add("mysql");
        habilidades[6].classList.add("postgressql");
        habilidades[7].classList.add("java");
        habilidades[8].classList.add("php");
        habilidades[9].classList.add("ofimatica");
        habilidades[10].classList.add("powerbi");
        habilidades[11].classList.add("msoffice");
        habilidades[12].classList.add("adaptabilidad");
        habilidades[13].classList.add("trabajoequipoenfoqueproactivo");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 
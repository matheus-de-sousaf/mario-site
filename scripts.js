const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function cliqueiNoBotão(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function cliqueMascara(){
    form.style.left = "-300px"
    form.style.top = "30%"
    form.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
    
}
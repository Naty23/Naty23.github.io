function myfunction(){
    let boton=document.getElementById("boton1");
    let image=document.getElementById("imagen1");
    if(boton.textContent == "Mostrar a un humano"){
        image.setAttribute("src", "http://postcron.com/es/blog/wp-content/uploads/2014/04/BUYER-PERSONA-SIMPLE-WAY.jpg");
        boton.textContent  = "Mostrar a un animal"; 
    } else {
        boton.textContent  = "Mostrar a un humano"; 
        image.setAttribute("src", "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAFmyQz.img?h=315&w=600&m=6&q=60&o=t&l=f&f=jpg");
    }
 
}




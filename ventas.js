const VENTAS_BASE =5;

function calcularComision(numeroVentas,precioProducto){
    let comision = 0;

    if(numeroVentas > VENTAS_BASE){
        let ventasExtras = numeroVentas-VENTAS_BASE;
        comision = ventasExtras * (precioProducto*0.10);
    }

    return comision;
}





function validarCampo(id) {
    let valor = recuperartexto(id);
    let errorSpan = document.getElementById("err-" + id);
    let input = document.getElementById(id);
    let mensaje = "";

    // Reglas: No vacío, Solo números (implícito en type=number) y máximo 5 dígitos
    if (valor.trim() === "") {
        mensaje = "Este campo no puede estar vacío.";
    } else if (valor.length > 5) {
        mensaje = "Máximo 5 dígitos permitidos.";
    }

    // Mostrar mensaje y cambiar estilo del borde
    if (mensaje !== "") {
        errorSpan.textContent = mensaje;
        input.classList.add("borde-error");
        return false;
    } else {
        errorSpan.textContent = "";
        input.classList.remove("borde-error");
        return true;
    }
}
function calcular(){

        
    //recuperamos propiedades de las cajas de texto
    //let componenteSueldoBase = document.getElementById("txtSueldoBase");
    //let componenteVenta = document.getElementById("txtVentas");
    //let componentePrecio = document.getElementById("txtPrecio");


    // recuperamos el valor de las cajas de texto
    //let  sueldoBaseStr = componenteSueldoBase.value;


    //let sueldoBaseStr = recuperartexto("txtSueldoBase");
    //let numeroVentasStr = recuperartexto("txtVentas");
    //let precioProductoStr = recuperartexto("txtPrecio");


    //let  numeroVentasStr = componenteVenta.value;
   // let  precioProductoStr = componentePrecio.value;

    // convertimos el texto a numero
    let sueldoBase = recuperarFloat("txtSueldoBase");
    let sueldoVentas = recuperarFloat("txtVentas");
    let precioProducto = recuperarFloat("txtPrecio");

    let comision = calcularComision(sueldoVentas,precioProducto);

    let total = sueldoBase + comision;

    let spSueldoBase = document.getElementById("spSueldoBase");
    let spComision = document.getElementById("spComision");
    let spTolta = document.getElementById("spTotal");
    
    spSueldoBase.textContent = sueldoBase;
    spComision.textContent = comision;
    spTolta.textContent = total;
}
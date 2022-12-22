function costoTotal(){
    let precio, costo, iva, cuotas;
    precio = parseInt(prompt("Ingrese el precio del producto "));
    costo= 0;
    while(precio != 0){
        costo = costo + precio;
        precio = parseInt(prompt("Ingrese el precio del producto "));
        console.log(costo); //deje el console.log para mostrar el resultado de las sumas, lo dejo por si lo necesitas
    }
    iva = costo + costo * 0.21 ;
    cuotas = parseInt(prompt("Ingrese la cantidad de cuotas 1 a 12 "))
    alert("El monto total de lo gastado es de $" + (costo));
    alert("El monto total de lo gastado con IVA $" + (iva));
    alert("El monto a pagar en cuotas es de "+(iva/cuotas) + " en un total de "+cuotas +" cuotas")

}

costoTotal();

function mostrar()
{
    let sumaDias;
    let edad;
    let edadEnDias;
    let ndia;
    let nmes;
    let diferenciaAnoPasado;
    let fdia;
    let fmes;
    let diferenciaAnoActual;

    sumaDias = 0;
    edad     = 0;
    edadEnDias = 0;
    ndia  = 0;
    nmes  = 0;
    diferenciaAnoPasado = 0;
    fdia  = 0;
    fmes  = 0;
    diferenciaAnoActual = 0;

    alert("Sacrificial Suicide ππ€ Castill0.666. Derechos Reservados. @2023.")

    do{
        ndia = parseInt(prompt("Ingrese el dia de nacimiento πΌπΎ"));
    }while(ndia < 1 || ndia > 31)
    
    do{
        nmes = parseInt(prompt("Ingrese el mes de nacimiento πΌπ½"));
    }while(nmes < 1 || nmes > 12)
    
    do{
        edad = parseInt(prompt("Ingrese su edad π€¬"));
    }while(edad < 0 || edad > 120)

    do{
        bandera = prompt("Los ha cumplido este aΓ±o? π₯΄ (s/n)");
        bandera = bandera.toLowerCase();
    }while(bandera != "s" && bandera != "n")

    do{
        fmes = parseInt(prompt("Ingrese el mes actual β‘οΈ(1-12)"));
    }while(fmes < 1 || fmes > 12)

    do{
        fdia = parseInt(prompt("Ingrese el dia actual πΊ(01-31)"));
    }while(fdia < 1 || fdia > 31)

    if(bandera == "s"){
        diferenciaAnoActual = (30- ndia) + ((fmes - nmes - 1) * 30) + fdia;
    }else{
        diferenciaAnoPasado = (30 - ndia) + ((12 - nmes) * 30);
        diferenciaAnoActual = fdia + ((fmes - 1) * 30); 
    }

    if(isNaN(ndia) || isNaN(nmes) || isNaN(edad) || isNaN(fmes) || isNaN(fdia)){
        alert("Ha ingresado datos erroneos ππ«")
    }else{

        edadEnDias = edad * 365.256;
        edadEnDias = parseInt(edadEnDias);
        sumaDias = edadEnDias + diferenciaAnoActual + diferenciaAnoPasado;
        
        alert("Usted lleva " + sumaDias + " dias en la tierra, matese π§¨ππ€");
    }

}
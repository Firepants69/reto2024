export const contador =()=>{
        // Crear la fecha actual
    var fechaActual = new Date();

    // Crear la fecha que deseas restar (puedes establecer cualquier fecha)
    var fechaEspecifica = new Date('2024-04-15T09:40:00');

    // Calcular la diferencia en milisegundos
    var diferenciaEnMilisegundos = fechaActual - fechaEspecifica;

    // Convertir la diferencia en milisegundos a días, horas, minutos y segundos
    var segundos = Math.floor(diferenciaEnMilisegundos / 1000);
    var minutos = Math.floor(segundos / 60);
    var horas = Math.floor(minutos / 60);
    var dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    return ` ${dias} dias con ${horas} horas, ${minutos} minutos y ${segundos} segundos`
}




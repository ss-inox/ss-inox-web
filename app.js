// Esperamos a que toda la página cargue antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function () {
    
    // Buscamos el formulario de cotización por su ID
    const formulario = document.getElementById("formCotizacion");

    // Escuchamos el evento cuando el cliente presiona el botón "Enviar Solicitud"
    formulario.addEventListener("submit", function (evento) {
        // Evitamos que la página se recargue sola
        evento.preventDefault();

        // 1. Capturamos lo que el cliente escribió en cada campo
        const nombre = document.getElementById("nombre").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const servicio = document.getElementById("servicio").value;
        const detalles = document.getElementById("detalles").value.trim();

        // 2. Número de WhatsApp oficial de SS INOX (Ecuador +593)
        const numeroWhatsApp = "593997185331";

        // 3. Armamos el mensaje profesional bien ordenado
        const mensaje = 
            `Hola *SS INOX*, deseo solicitar una cotización:%0A%0A` +
            `👤 *Cliente / Empresa:* ${encodeURIComponent(nombre)}%0A` +
            `📱 *Teléfono:* ${encodeURIComponent(telefono)}%0A` +
            `🔧 *Servicio:* ${encodeURIComponent(servicio)}%0A` +
            `📝 *Detalles del proyecto:* ${encodeURIComponent(detalles)}`;

        // 4. Creamos el enlace de WhatsApp y lo abrimos en una pestaña nueva
        const urlWhatsApp = `https://wa.me{numeroWhatsApp}?text=${mensaje}`;
        window.open(urlWhatsApp, "_blank");

        // 5. Limpiamos el formulario después de enviarlo
        formulario.reset();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formCotizacion");

    if (formulario) {
        formulario.addEventListener("submit", function (evento) {
            evento.preventDefault();

            const nombre = document.getElementById("nombre").value.trim();
            const telefono = document.getElementById("telefono").value.trim();
            const servicio = document.getElementById("servicio").value;
            const detalles = document.getElementById("detalles").value.trim();

            const numeroWhatsApp = "593997185331";

            const mensaje = "Hola SS INOX, deseo solicitar una cotizacion. " +
                "Cliente: " + nombre + " | " +
                "Telefono: " + telefono + " | " +
                "Servicio: " + servicio + " | " +
                "Detalles: " + detalles;

            const urlWhatsApp = "https://wa.me" + numeroWhatsApp + "?text=" + encodeURIComponent(mensaje);

            window.open(urlWhatsApp, "_blank");
        });
    }
});

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

            const texto = 
                "Hola *SS INOX*, deseo solicitar una cotización:\n\n" +
                "👤 *Cliente / Empresa:* " + nombre + "\n" +
                "📱 *Teléfono:* " + telefono + "\n" +
                "🔧 *Servicio:* " + servicio + "\n" +
                "📝 *Detalles:* " + detalles;

            const urlWhatsApp = "https://whatsapp.com" + numeroWhatsApp + "&text=" + encodeURIComponent(texto);

            window.location.href = urlWhatsApp;
        });
    }
});

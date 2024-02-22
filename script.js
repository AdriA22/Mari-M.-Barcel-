jQuery(function () {
  $("#mostrarSobreMi").on("click", function () {
    if ($("#SobreMi").is(":visible")) {
      $("#SobreMi").hide();
      $("#mostrarSobreMi").text("Sobre mi");
    } else {
      $("#SobreMi").show();
      $("#mostrarSobreMi").text("Cerrar");
    }
  });
});

function validarFormulario() {
  let nombre = document.getElementById("nombre").value;
  let email = document.getElementById("email").value;
  let mensaje = document.getElementById("mensaje").value;

  if (nombre.trim() === "" || email.trim() === "" || mensaje.trim() === "") {
    mostrarModal("Completa todos campos.");
    return false;
  } else {
    mostrarModal("Mensaje enviado...");
    return true;
  }
}
function mostrarModal(mensaje) {
  document.getElementById("modalContent").innerHTML = mensaje;
  document.getElementById("myModal").style.display = "block";
  document.getElementById("modalOverlay").style.display = "block";
}

function cerrarModal() {
  document.getElementById("myModal").style.display = "none";
  document.getElementById("modalOverlay").style.display = "none";
}

function openNav() {
  document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav() {
  document.getElementById("mobile-menu").style.width = "0%";
}

function addComment() {
  // Obtener valores del formulario
  let name = document.getElementById("name").value;
  let comment = document.getElementById("comment").value;

  // Validar que ambos campos estén completos
  if (name && comment) {
    // Crear un nuevo elemento de comentario
    let newComment = document.createElement("div");
    newComment.className = "comment";
    newComment.innerHTML = "<strong>" + name + ":</strong> " + comment;

    // Agregar el nuevo comentario al contenedor de comentarios
    document.getElementById("commentsContainer").appendChild(newComment);

    // Limpiar el formulario
    document.getElementById("commentForm").reset();
  } else {
    alert("Por favor, completa todos los campos.");
  }
}

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

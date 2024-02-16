function openNav(){
    document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav(){
    document.getElementById("mobile-menu").style.width = "0%";
}

function addComment() {
    // Obtener valores del formulario
    let name = document.getElementById('name').value;
    let comment = document.getElementById('comment').value;

    // Validar que ambos campos estén completos
    if (name && comment) {
        // Crear un nuevo elemento de comentario
        let newComment = document.createElement('div');
        newComment.className = 'comment';
        newComment.innerHTML = '<strong>' + name + ':</strong> ' + comment;

        // Agregar el nuevo comentario al contenedor de comentarios
        document.getElementById('commentsContainer').appendChild(newComment);

        // Limpiar el formulario
        document.getElementById('commentForm').reset();
    } else {
        alert('Por favor, completa todos los campos.');
    }
}

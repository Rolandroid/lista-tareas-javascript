function agregarTarea(){
    //Otener el valor del campo de terea
    let nuevaTareaTexto = document.getElementById('nuevaTarea').value;

    if(nuevaTareaTexto === ""){
        alert(`Por favor, ingrese nueva tarea`)
    }
    //Crear elemento en la lista
    let nuevaTarea = document.createElement("li")
    nuevaTarea.textContent = nuevaTareaTexto + " ";

    //Crear boton de Eliminar
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.onclick = function() { nuevaTarea.remove();}

    //Agregar boton de eliminar al elemento de la lista
    nuevaTarea.appendChild(botonEliminar);

    //Agregar el elemento a la lista de tereas
    document.getElementById("listaTareas").appendChild(nuevaTarea);

    //Limpiar el cuadro de texto del nombre de la tarea
    document.getElementById("nuevaTarea").value = "";

}
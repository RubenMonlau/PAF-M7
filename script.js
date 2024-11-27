document.addEventListener("DOMContentLoaded", () => {
    const pendientes = document.getElementById("pendientes");
    const hechas = document.getElementById("hechas");
    const inputNuevaTarea = document.getElementById("nueva-tarea");
    const botonAgregar = document.getElementById("agregar-tarea");
    const botonEliminar = document.getElementById("eliminar-tarea");

    // Funcionalidad para mover tareas
    pendientes.addEventListener("click", (e) => {
        if (e.target && e.target.matches("li.tarea")) {
            hechas.appendChild(e.target); // Mueve la tarea a la sección "Hechas"
        }
    });

    hechas.addEventListener("click", (e) => {
        if (e.target && e.target.matches("li.tarea button")) {
            e.target.closest("li.tarea").remove(); // Elimina la tarea completada
        }
    });

    // Agregar nueva tarea
    botonAgregar.addEventListener("click", () => {
        const nuevaTareaTexto = inputNuevaTarea.value.trim();
        if (nuevaTareaTexto !== "") {
            const nuevaTarea = document.createElement("li");
            nuevaTarea.classList.add("tarea");
            nuevaTarea.textContent = nuevaTareaTexto;

            const botonEliminar = document.createElement("button");
            botonEliminar.textContent = "Eliminar";
            nuevaTarea.appendChild(botonEliminar);

            pendientes.appendChild(nuevaTarea);
            inputNuevaTarea.value = ""; // Limpia el campo
        }

        botonEliminar.addEventListener("click", () => {
            const nuevaTareaTexto = inputNuevaTarea.value.trim();
            if (nuevaTareaTexto !== "") {
                const nuevaTarea = document.createElement("li");
                nuevaTarea.classList.add("tarea");
                nuevaTarea.textContent = nuevaTareaTexto;
    
                const botonEliminar = document.createElement("button");
                botonEliminar.textContent = "Eliminar";
                nuevaTarea.appendChild(botonEliminar);
    
                pendientes.appendChild(nuevaTarea);
                inputNuevaTarea.value = ""; // Limpia el campo
            }
        });
    });
});

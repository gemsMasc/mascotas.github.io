document.addEventListener('DOMContentLoaded', mostrarMascotas);

function mostrarMascotas() {
  const listaMascotas = document.getElementById('listaMascotas');

  // Obtener mascotas desde Local Storage
  mascotas = JSON.parse(localStorage.getItem('mascotas')) || [];

  // Mostrar la lista de mascotas
  mascotas.forEach((mascota, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span>${mascota.nombre} - ${mascota.especie} - ${mascota.color}</span>
      <button onclick="editarMascota(${index})">Editar</button>
      <button onclick="eliminarMascota(${index})">Eliminar</button>
    `;
    listaMascotas.appendChild(listItem);
  });
}

function editarMascota(index) {
  // Implementar lógica para editar la mascota en la lista
  // Puedes usar un formulario similar al de ingreso de datos
  const mascotaEditada = prompt("Editar la información de la mascota:", JSON.stringify(mascotas[index]));

  if (mascotaEditada) {
    mascotas[index] = JSON.parse(mascotaEditada);

    // Actualizar en Local Storage
    localStorage.setItem('mascotas', JSON.stringify(mascotas));

    actualizarListaMascotas();
  }
}

function eliminarMascota(index) {
  // Implementar lógica para eliminar la mascota de la lista
  const confirmacion = confirm("¿Seguro que quieres eliminar esta mascota?");

  if (confirmacion) {
    mascotas.splice(index, 1);

    // Actualizar en Local Storage
    localStorage.setItem('mascotas', JSON.stringify(mascotas));

    actualizarListaMascotas();
  }
}

function actualizarListaMascotas() {
  const listaMascotas = document.getElementById('listaMascotas');
  // Limpiar la lista antes de volver a mostrar las mascotas
  listaMascotas.innerHTML = '';
  mostrarMascotas();
}

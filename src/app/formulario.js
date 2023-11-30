let mascotas = [];

function guardarMascota() {
  const nombre = document.getElementById('nombre').value;
  const especie = document.getElementById('especie').value;
  const color = document.getElementById('color').value;
  const dueno = document.getElementById('dueno').value;
  const telefono = document.getElementById('telefono').value;
  const fechaNacimiento = document.getElementById('fechaNacimiento').value;

  const nuevaMascota = {
    nombre,
    especie,
    color,
    dueno,
    telefono,
    fechaNacimiento,
  };

  mascotas.push(nuevaMascota);

  // Almacenar en Local Storage
  localStorage.setItem('mascotas', JSON.stringify(mascotas));

  // Redirección a la página de visualización y edición
  window.location.href = 'mascotaAgregada.html';
}

function calcularTotal() {
    var cantEntradas,
      total,
      categoria,
      entradaEstudiante,
      entradaTrainee,
      entradaJr,
      general;
  
    console.log('entra a la funcion');
    cantEntradas = document.getElementById('ingresarCantidad').value;
    categoria = document.getElementById('ingresarCategoria').value;
  
    console.log('cant entradas ' + cantEntradas + 'categoria ' + categoria);
  
    entradaEstudiante = 200 - (200 * 80) / 100;
    entradaTrainee = 200 - (200 * 50) / 100;
    entradaJr = 200 - (200 * 15) / 100;
    general = 200;
  
    if (cantEntradas > 0 && !isNaN(cantEntradas) && cantEntradas % 1 == 0) {
      
      if (categoria == 'Estudiante') {
        total = entradaEstudiante * cantEntradas;
        document.getElementById('importeTotal').innerHTML =
          'Total a Pagar: \u0024' + total;
      } else if (categoria == 'Trainee') {
        total = entradaTrainee * cantEntradas;
        document.getElementById('importeTotal').innerHTML =
          'Total a Pagar: \u0024' + total;
      } else if (categoria == 'Junior') {
        total = entradaJr * cantEntradas;
        document.getElementById('importeTotal').innerHTML =
          'Total a Pagar: \u0024' + total;
      } else if (categoria == 'General') {
        total = general * cantEntradas;
        document.getElementById('importeTotal').innerHTML =
          'Total a Pagar: \u0024' + total;
      }
    } else {
      window.alert('Debe ingresar la cantidad de entradas en números enteros');
    }
  }
  
  function borrar() {
    document.getElementById('ingresarNombre').value = ' ';
    document.getElementById('ingresarApellido').value = ' ';
    document.getElementById('ingresarEmail').value = ' ';
    document.getElementById('ingresarCantidad').value = ' ';
    document.getElementById('ingresarCategoria').value = 'Estudiante';
    document.getElementById('importeTotal').innerHTML = 'Total a Pagar: \u0024';
  }
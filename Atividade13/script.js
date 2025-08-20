function transformarTexto(vez) {
  const texto = document.getElementById("nome").value;
  if (vez === "m") {
    document.getElementById("nome").value = texto.toUpperCase();
  } else if (vez === "s") {
    document.getElementById("nome").value = texto.toLowerCase();
  }
}

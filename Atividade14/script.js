function validar(){
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const comentario = document.getElementById("comentario").value;
  const vez = document.querySelector('input[name="vez"]:checked');

  if (nome.length < 10){
    alert("O nome deve ter pelo menos 10 caracteres.");
    return false;
  }
  else if (!email.includes("@")){
    alert("Por favor, insira um email válido.");
    return false;
  }
  else if (comentario.length < 20){
    alert("O comentário deve ter pelo menos 20 caracteres.");
    return false;
  }
  else {
    if (vez && vez.value === "sim") {
      alert("Volte sempre a esta página!");
    } else if (vez && vez.value === "nao") {
      alert("Que bom que você voltou a visitar esta página!");
    } else {
      alert("Por favor, selecione uma opção.");
      return false;
    }
  }

  return true;
}

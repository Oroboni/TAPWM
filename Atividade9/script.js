function imc() {
    let alt = parseFloat(document.getElementById("alt").value.replace(',', '.'));
    let peso = parseFloat(document.getElementById("peso").value.replace(',', '.'));

    if (isNaN(alt) || isNaN(peso) || alt <= 0 || peso <= 0) {
        alert("Valores inválidos!");
        return;
    }

    if (alt > 3) alt = alt / 100;

    const imc = peso / (alt * alt);
    alert("Seu IMC é: " + imc.toFixed(2));

    if (imc < 18.5) {
        alert("Abaixo do peso");
    } else if (imc < 24.9) {
        alert("Peso normal");
    } else if (imc < 29.9) {
        alert("Sobrepeso");
    } else {
        alert("Obesidade");
    }
}

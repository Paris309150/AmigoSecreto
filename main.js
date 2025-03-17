// Lista donde se almacenarán los nombres
let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("nombreInput");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    let lista = document.getElementById("listaNombres");
    lista.innerHTML = "";

    amigos.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe ingresar al menos 2 nombres para hacer el sorteo.");
        return;
    }

    let resultado = document.getElementById("resultado");
    resultado.textContent = "🎲 Sorteando...";

    setTimeout(() => {
        let indiceSorteado = Math.floor(Math.random() * amigos.length);
        let nombreSorteado = amigos[indiceSorteado];

        resultado.innerHTML = `🎉 <strong>El amigo secreto es: <span style="color:blue;">${nombreSorteado}</span> 🎁</strong>`;
    }, 2000);
}

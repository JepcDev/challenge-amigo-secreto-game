// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nameFriends = [];//almacenamos los nombres de los amigos

// DEV:COMMENT -> addFriend, Funcion que obtiene el contenido(nombre introducido) del campo input con el id = amigo
function addFriend() {
  let inputFriend = document.getElementById("amigo");
  let nameFriend = inputFriend.value.trim();

  // validamos que el campo no este vacio
  if (nameFriend === "") {
    alert("Por favor, inserte un nombre");
    return;
  }

  // agregamos el nombre a la coleccion
  nameFriends.push(nameFriend);
  updateList();//actualizamos la lista visual

  // limpiamos los campos de entrada
  inputFriend.value = "";
  inputFriend.focus();
}

// funcion que actualiza la lista visual es decir en el html
function updateList() {
  const friendListUI = document.getElementById("listaAmigos");
  friendListUI.innerHTML = "";

  nameFriends.forEach(
    friendName =>{
      const li = document.createElement("li");
      li.textContent = friendName;
      friendListUI.appendChild(li);
    }
  );
}

function sortearAmigo() {
  if (nameFriends.length ===0) {
    alert("No hay nombre de amigos para sortear. Primero agrega nombres de tus amigos");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random()*nameFriends.length);
  const amigosSorteado = nameFriends[indiceAleatorio];

  // muestra el resultado del sorteo, muestra el nombre del amigo secreto
  const resultadoUL = document.getElementById("resultado");
  resultadoUL.innerHTML = `<li>${amigosSorteado}</li>`;

}

// Asignamos eventos a los botones
document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById("btnAdicionar").addEventListener("click", addFriend);
  document.getElementById("btnSortear").addEventListener("click", sortearAmigo);
});
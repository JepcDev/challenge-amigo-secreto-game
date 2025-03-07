// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nameFriends = [];

// DEV:COMMENT -> addFriend, Funcion que obtiene el contenido(nombre introducido) del campo input con el id = amigo
function addFriend() {
  let inputFriend = document.getElementById("amigo");
  let nameFriend = inputFriend.value.trim;

  if (nameFriend === "") {
    alert("Por favor, inserte un nombre");
    return;
  }
  nameFriends.push(nameFriend);
  updateList();

  inputFriend.value = "hola";
  inputFriend.focus();
}

function updateList() {
  let friendListUI = document.getElementById("listaAmigos");
  friendListUI.innerHTML = "";

  nameFriends.forEach(
    friendName =>{
      const li = document.createElement("li");
      li.textContent = friendName;
      friendListUI.appendChild(li);
    }
  );
}
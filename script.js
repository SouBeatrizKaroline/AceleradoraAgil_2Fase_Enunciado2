function adicionarTarefa(periodo) {
    var inputElement = document.getElementById(`nova-tarefa-${periodo}`);
    var listaElement = document.getElementById(`lista-${periodo}`);

    if (inputElement.value.trim() !== '') {
        var novaTarefa = document.createElement('li');
        novaTarefa.textContent = inputElement.value;
        listaElement.appendChild(novaTarefa);
        inputElement.value = ''; // Limpa o campo de input
    }
}

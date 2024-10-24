const inputElement = document.getElementById("title");
const createData   = document.getElementById("create");
const listElement  = document.getElementById("list");

const notes = [
    {
        title: 'Сдать пиоту',
        completed: false
    },
    {
        title: 'Позаниматься дополнительно дома',
        completed: true
    }
];

listElement.onclick = function (event) {
    if (event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index);
        const type  = event.target.dataset.type;
        
        if (type === "toggle") {
            notes[index].completed =!notes[index].completed;
        } else if (type === "remove") {
            notes.splice(index, 1);
        }   
        render();
    }
}

const getNoteTemplate = (inputData, index) => {
    return `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span class="${inputData.completed ? 'text-decoration-line-through' : ''}">${inputData.title}</span>
                <span>
                    <span class="btn btn-small btn-${
                        inputData.completed ? 'warning' : 'success'
                    }" data-index="${index}" data-type="toggle">&check;</span>
                    <span class="btn btn-small btn-danger" data-type="remove" data-index="${index}">&times;</span>
                </span>
            </li> `
}

function render() {
    listElement.innerHTML = ''; // Очищаем список перед рендерингом

    if (notes.length === 0) {
        listElement.innerHTML =  '<br><p style="font-size: calc(1vw + 1vh)">Заполните список заметок</p>';
    }

    for (let i = 0; i < notes.length; i++) {
        listElement.insertAdjacentHTML("beforeend", getNoteTemplate(notes[i], i));
    }
}

render();

createData.onclick = function() {
    if (inputElement.value.length > 0) {
        const newNote = {
            title: inputElement.value,
            completed: false
        };

        notes.push(newNote);
        render();
    }

    inputElement.value = "";
}





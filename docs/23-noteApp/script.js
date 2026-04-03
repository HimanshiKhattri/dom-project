const addNoteBtn = document.getElementById('addNote');
const inputNoteText = document.getElementById('inputText');
const notesContainer = document.getElementById('notesContainer');

// get note from local storage
function getNotes() {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    return notes;
}

// save note to localstorage
function saveNotes(notes) {
    localStorage.setItem('notes', JSON.stringify(notes));
}

// display notes
function displayNotes() {
    notesContainer.innerHTML = "";
    const notes = getNotes();

    notes.forEach((note , index) => {
        noteDiv = document.createElement('div');
        noteDiv.classList.add('note');
        noteDiv.textContent = note;

        const DeleteBtn = document.createElement('button');
        DeleteBtn.textContent = "X";
        DeleteBtn.onclick = () => deleteNote(index);

        noteDiv.appendChild(DeleteBtn);
        notesContainer.appendChild(noteDiv);
    })

}

// add notes 
function addNote() {
    const text = inputNoteText.value.trim();
    if(text === "") return;

    const notes = getNotes();
    notes.push(text);
    saveNotes(notes);
    inputNoteText.value = "";
    displayNotes();
}

// delete note 
function deleteNote(index) {
    const notes = getNotes();
    notes.splice(index , 1);
    saveNotes(notes)
    displayNotes();
}

// initially 
displayNotes()
addNoteBtn.addEventListener('click' , addNote)

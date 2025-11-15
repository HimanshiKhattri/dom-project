const title = document.getElementById('title');
const author = document.getElementById('author');
const year = document.getElementById('year');
const bookList = document.getElementById('book-list');
const btn = document.querySelector('.btn');

let editRow = null

btn.addEventListener('click', function (e) {
  //work on CRUD operation of DOM
  e.preventDefault();

  const t = title.value.trim();
  const a = title.value.trim();
  const y = year.value.trim();

  if(!t || !a) {
    alert('please enter Title and Author');
    return;
  }

  // add new book 
  if(btn.textContent.includes('Add Book')) {
    const row = document.createElement('section');
    row.innerHTML = `
    <div>${t}</div>
    <div>${a}</div>
    <div>${y}</div>
    <div>
    <button class="btn edit">Edit</button>
    <button class="btn delete">Delete</button>
    </div>
    `;
    bookList.appendChild(row);
    title.value = author.value = year.value = '';
    title.focus();
    return;
  }

  // update book 
  if(editRow) {
    editRow.children[0].textContent = t;
    editRow.children[1].textContent = a;
    editRow.children[2].textContent = y;
    editRow = null;
    btn.textContent = 'Add Book';
    title.value = author.value = year.value = '';
    title.focus();
  }
});


// edit/delete using event delegation
bookList.addEventListener('click' , function(e) {
  const target = e.target;
  const row = target.closest('section')
  console.log(row)

  if(!row) return;

  if(target.classList.contains('edit')){
    title.value = row.children[0].textContent;
    author.value = row.children[1].textContent;
    year.value = row.children[2].textContent;
    btn.textContent = 'Update Book';
    editRow = row;
    title.focus();
  }


  if (target.classList.contains('delete')) {
    if (confirm('delete this book?')) {
      row.remove();
      if (editRow === row) {
        editRow === null;
        btn.textContent = 'Add Book';
        title.value = author.value = year.value = '';
      }
    }
  }
});


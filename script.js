const submit = document.getElementById('bookInfo');
const bookTitle = document.getElementById('titleText');
const authorName = document.getElementById('authorText');
const bookLength = document.getElementById('pageCount');
const bookStatus = document.getElementsByName('bookStatus');
const bookType = document.getElementsByName('bookType');


let library = [];

function Book(title, author, pages, type, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.type = type,
    this.read = read
}

//Creates array of book items based on user input
submit.addEventListener('submit', (e) => {
    e.preventDefault();
    let type = '';
    let status = '';
    if(bookType[0].checked) {
        type = bookType[0].value;
    } else {
        type = bookType[1].value;
    }
    if(bookStatus[0].checked) {
        status = bookStatus[0].value;
    } else {
        status = bookStatus[1].value
    }
    let book = new Book(bookTitle.value, authorName.value, bookLength.value,
       type, status);
    library.push(book);
    bookTitle.value = '';
    authorName.value = '';
    bookLength.value = '';
    bookType.forEach((e) => {
        e.checked=false;
    })
    bookStatus.forEach((e) => {
        e.checked=false;
    })
    if (library.length > 0) {
    removeLibrary();
    }
    displayLibrary();
});

//Appends to library list

function displayLibrary() {
    for (let i = 0; i < library.length; i++) {
        //create row for new book
        const rowDiv = document.createElement('div');
        const bookList = document.querySelector('#bookList');
        rowDiv.classList.add('bookRow');
        rowDiv.setAttribute('id', 'book' + [i]);
        bookList.appendChild(rowDiv);
        //display book title
        const divTitle = document.createElement('div');
        const selectTitle = document.querySelector('#book' + [i]);
        divTitle.classList.add('bookItem');
        divTitle.classList.add([i]);
        divTitle.textContent = library[i].title;
        selectTitle.appendChild(divTitle);
        //display author name
        const divAuthor = document.createElement('div');
        const selectAuthor = document.querySelector('#book' + [i]);
        divAuthor.textContent = library[i].author;
        divAuthor.classList.add('bookItem');
        divAuthor.classList.add([i]);
        selectAuthor.appendChild(divAuthor);
        //display pages count
        const divPages = document.createElement('div');
        const selectPages = document.querySelector('#book' + [i]);
        divPages.textContent = library[i].pages;
        divPages.classList.add('bookItem');
        divPages.classList.add([i]);
        selectPages.appendChild(divPages);
        //display book type
        const divType = document.createElement('div');
        const selectType = document.querySelector('#book' + [i]);
        divType.textContent = library[i].type;
        divType.classList.add('bookItem');
        divType.classList.add([i]);
        selectType.appendChild(divType);
        //display book status
        const divStatus = document.createElement('div');
        const selectStatus = document.querySelector('#book' + [i]);
        divStatus.textContent = library[i].read;
        divStatus.classList.add('bookItem');
        divStatus.classList.add([i]);
        selectStatus.appendChild(divStatus);
        //create buttons
        const editDiv = document.querySelector('#book' + [i]);
        const createDiv = document.createElement('div');
        createDiv.setAttribute('id', 'buttons' + [i]);
        createDiv.classList.add('bookItem');
        createDiv.classList.add([i]);
        editDiv.appendChild(createDiv);
        const buttonDiv = document.querySelector('#buttons' + [i]);
        const editButton = document.createElement('BUTTON');
        editButton.setAttribute('id', 'edit' + [i]);
        editButton.classList.add('edit')
        editButton.innerHTML = '<i class="fa-solid fa-check"></i>';
        buttonDiv.appendChild(editButton);
        const deleteButton = document.createElement('BUTTON');
        deleteButton.setAttribute('id','delete' + [i]);
        deleteButton.classList.add('delete');
        deleteButton.innerHTML = '<i class="fa-solid fa-delete-left" aria-hidden="true"></i>';
        buttonDiv.appendChild(deleteButton);
    }
    const editButton = document.querySelectorAll('.edit');
    editButton.forEach((elem) => {
    elem.addEventListener('click', () => {
        updateStatus(elem)
    });
});
    const deletebutton = document.querySelectorAll('.delete');
    deletebutton.forEach((elem) => {
        elem.addEventListener('click', () => {
            deleteLine(elem);
        });
    });
}

//Remove current displayed books
let removeLibrary = () => {
        document.querySelectorAll('.bookRow').forEach(e => e.remove());
    };

//Update read status
let updateStatus = (elem) => {
    let index = parseInt(elem.parentNode.id.split('').slice(-1));
    if (library[index]['read'] === 'Finished') {
        library[index]['read'] = 'Reading'
    } else {
        library[index]['read'] = 'Finished'
    }
    removeLibrary();
    displayLibrary();
}


let deleteLine = (elem) => {
    let index = parseInt(elem.parentNode.id.split('').slice(-1));
    library.splice(index, 1)
    removeLibrary();
    displayLibrary();
}
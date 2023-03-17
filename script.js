const submit = document.getElementById('bookInfo');
const bookTitle = document.getElementById('titleText');
const authorName = document.getElementById('authorText');
const bookLength = document.getElementById('pageCount');
const bookStatus = document.getElementsByName('bookStatus');
const bookType = document.getElementsByName('bookType');

let library = [];
let libraryArc = [];

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
    libraryArc.push(library);
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
        //display book title
        const divTitle = document.createElement('div');
        const selectTitle = document.querySelector('#title');
        divTitle.classList.add('bookItem');
        divTitle.classList.add([i]);
        divTitle.textContent = library[i].title;
        selectTitle.appendChild(divTitle);
        //display author name
        const divAuthor = document.createElement('div');
        const selectAuthor = document.querySelector('#author');
        divAuthor.textContent = library[i].author;
        divAuthor.classList.add('bookItem');
        divAuthor.classList.add([i]);
        selectAuthor.appendChild(divAuthor);
        //display pages count
        const divPages = document.createElement('div');
        const selectPages = document.querySelector('#pages');
        divPages.textContent = library[i].pages;
        divPages.classList.add('bookItem');
        divPages.classList.add([i]);
        selectPages.appendChild(divPages);
        //display book type
        const divType = document.createElement('div');
        const selectType = document.querySelector('#type');
        divType.textContent = library[i].type;
        divType.classList.add('bookItem');
        divType.classList.add([i]);
        selectType.appendChild(divType);
        //display book status
        const divStatus = document.createElement('div');
        const selectStatus = document.querySelector('#read');
        divStatus.textContent = library[i].read;
        divStatus.classList.add('bookItem');
        divStatus.classList.add([i]);
        selectStatus.appendChild(divStatus);
        //create buttons
        const editDiv = document.querySelector('#edit');
        const createDiv = document.createElement('div');
        createDiv.setAttribute('id', 'buttons' + [i]);
        createDiv.classList.add('bookItem');
        createDiv.classList.add([i]);
        editDiv.appendChild(createDiv);
        const buttonDiv = document.querySelector('#buttons' + [i]);
        const deleteButton = document.createElement('BUTTON');
        deleteButton.setAttribute('id','delete' + [i]);
        deleteButton.classList.add('bookItem');
        deleteButton.classList.add([i]);
        buttonDiv.appendChild(deleteButton);
        const grabButt = document.getElementById('delete' + [i]);
        const buttIcon = document.createElement('i');
        buttIcon.classList.add('bookItem');
        buttIcon.classList.add([i]);
        buttIcon.classList.add('fa-solid');
        buttIcon.classList.add('fa-trash-can');
        grabButt.appendChild(buttIcon);
        const editButton = document.createElement('BUTTON');
        editButton.setAttribute('id', 'edit' + [i]);
        editButton.classList.add('bookItem');
        editButton.classList.add([i]);
        buttonDiv.appendChild(editButton);
    }
}

//Remove current displayed books

let removeLibrary = () => {
        document.querySelectorAll('.bookItem').forEach(e => e.remove());
    }
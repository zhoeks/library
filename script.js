const headers = document.createElement('h4');
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
    };
    if(bookStatus[0].checked) {
        status = bookStatus[0].value;
    } else {
        status = bookStatus[1].value
    };
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
    displayLibrary();
});

//Appends to library list

function displayLibrary() {
    for (let i = 0; i < library.length; i++) {
        //display book title
        const divTitle = document.createElement('div');
        const selectTitle = document.querySelector('#title');
        divTitle.textContent = library[i].title;
        selectTitle.appendChild(divTitle);
        //display author name
        const divAuthor = document.createElement('div');
        const selectAuthor = document.querySelector('#author');
        divAuthor.textContent = library[i].author;
        selectAuthor.appendChild(divAuthor);
        //display pages count
        const divPages = document.createElement('div');
        const selectPages = document.querySelector('#pages');
        divPages.textContent = library[i].pages;
        selectPages.appendChild(divPages);
        //display book type
        const divType = document.createElement('div');
        const selectType = document.querySelector('#type');
        divType.textContent = library[i].type;
        selectType.appendChild(divType);
        //display book status
        const divStatus = document.createElement('div');
        const selectStatus = document.querySelector('#read');
        divStatus.textContent = library[i].read;
        selectStatus.appendChild(divStatus);
    }
    library = [];
}
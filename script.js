const headers = document.createElement('h4');
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
    };
    if(bookStatus[0].checked) {
        status = bookStatus[0].value;
    } else {
        status = bookStatus[1].value
    };
    let book = new Book(bookTitle.value, authorName.value, bookLength.value,
       type, status);
    library.push(book);
    displayLibrary(library);
    bookTitle.value = '';
    authorName.value = '';
    bookLength.value = '';
    bookType.forEach((e) => {
        e.checked=false;
    })
    bookStatus.forEach((e) => {
        e.checked=false;
    })
});

//Appends to library list

function displayLibrary(library) {
    for (let i = 0; i < library.length; i++) {
        const div = document.createElement('div');
        const select = document.querySelector(library[i]);
        div.innerHTML = library[i];
        select.appendChild(div)
        console.log(div.innerHTML)
    }
    
}
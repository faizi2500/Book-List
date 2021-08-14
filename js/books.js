let books = [];
const body =document.querySelector('body')
const form = document.getElementById('form');
const btn = document.getElementById('addbtn');

btn.addEventListener('click', input);

function input(e) {
  e.preventDefault();
  const bookTitle =document.getElementById('title').value;  // bookTitle as input from book name
  const bookAuthor =document.getElementById('author').value; // bookAuthor as input from book Author
  let status = true //this is to make sure that the book list is pushed only if it is true otherwise that line wont work.
  const error = document.createElement('p');

  // check if the values are empty 
  if(bookTitle === "" || bookAuthor === "") {
    error.innerHTML = `<strong>Required:</strong> Please insert Book Name and Author Name`;
    body.appendChild(error);
    status = false;
  }
  else  {    // checking if there is a similar book with the name and title. 
    for(let i = 0; i < books.length; i++) {
        if(books[i].title == bookTitle && books[i].author == bookAuthor){
          error.innerHTML = `<strong>Note: </strong> This book already exists in your Reading List.`
          body.appendChild(error);
          status = false;
        }
      }
  } 
  if (status) {
    const list = {
      id: Date(),
      title: `${bookTitle}`,
      author: `${bookAuthor}`,
    };
    books.push(list);
    updateStorage()
  }

  console.log(books)
  console.log(books.length)
}

// Update Local Storage
function updateStorage() {
  localStorage.setItem('books',JSON.stringify(books));
}

// Parse data that is inside the storage so it is in the form of object not string. 

const parseStorage = JSON.parse(localStorage.getItem('books'));
if(parseStorage !== null) {
  displayBooks();
}

let parent = document.createElement('ul')

function displayBooks() {
  for(let i = 0; i < books.length; i++){
     let li = document.createElement('li');
     li.innerHTML = `<h3 class=book-heading> ${books[i].title} </h3>`;
     parent.appendChild(li);
  }
}

let books = [];
const body = document.querySelector("body");
const form = document.getElementById("form");
const btn = document.getElementById("addbtn");
const bookList = document.getElementById("container");
btn.addEventListener("click", input);

function input(e) {
  e.preventDefault();
  const bookTitle = document.getElementById("title").value;
  const bookAuthor = document.getElementById("author").value; 
  status = true; 
  const error = document.createElement("p");
  const emptyForm = document.getElementById('error-empty')
  const errorRepeat = document.getElementById('error-repeat')


  if (bookTitle === "" || bookAuthor === "") {
    emptyForm.style.display = 'block';
    body.appendChild(error);
    status = false;
  } else {
    for (let i = 0; i < books.length; i++) {
      if (books[i].title == bookTitle && books[i].author == bookAuthor) {
        errorRepeat.style.display = 'block'
        body.appendChild(error);
        status = false;
      }
    }
  }
  
  if (status) {
    const list = {
      id: books.length,
      title: `${bookTitle}`,
      author: `${bookAuthor}`,
    };
    books.unshift(list);
    console.log(books);
    emptyForm.style.display = 'none';
    errorRepeat.style.display = 'none';
    updateStorage();
  }
  form.reset();
}

// Update Local Storage
function updateStorage() {
  localStorage.setItem("books", JSON.stringify(books));
  displayBooks();
}

function getData() {
  let parsedBooks = JSON.parse(localStorage.getItem("books"));
  if(parsedBooks !== null) {
    books = parsedBooks;
  }
}

function displayBooks() {
  getData();
  if (books != null) {

    bookList.innerHTML = ""; // Purpose of setting this equal to empty is so whenever this functioned is called from the storage, it starts from scratch.
    books.forEach((book, index) => {
      const eachBook = document.createElement("div");

      const bookName = document.createElement("h3");
      bookName.innerHTML = `"${book.title}" by`;
      eachBook.appendChild(bookName);

      const bookWriter = document.createElement("h4");
      bookWriter.innerHTML = `- ${book.author}`;
      eachBook.appendChild(bookWriter);

      const remove = document.createElement("button");
      remove.innerHTML = "Remove";
      remove.addEventListener("click", () => removebtn(index));
      eachBook.appendChild(remove);

      const separatingLine = document.createElement("hr");
      separatingLine.className = "horizontal-line";
      eachBook.appendChild(separatingLine);

      bookList.appendChild(eachBook);
    });
  }
}

(function() {
  displayBooks();
})()

// window.onload = displayBooks;


function removebtn(id) {
  books = books.filter((book, index) => {
    return id !== index;
  })
  updateStorage();
}


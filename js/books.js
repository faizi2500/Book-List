let books = [];
const body =document.querySelector('body')
const form = document.getElementById('form');
const btn = document.getElementById('addbtn');

btn.addEventListener('click', input);

//  cases for inputs :  1. Input fields empty => show error 2. Title and author should not match any previous book  3. Store value as objects and push them to the array books []



function input(e) {
  e.preventDefault();
  const bookTitle =document.getElementById('title').value;  // bookTitle as input from book name
  const bookAuthor =document.getElementById('author').value; // bookAuthor as input from book Author
  let status = true //this is to make sure that the book list is pushed only if it is true otherwise that line wont work.
  const error = document.createElement('p');

  const list = {
    id: '1',
    title: '2',
    author: '3',
  };

  // check if the values are empty 
  if(bookTitle === "" || bookAuthor === "") {
    error.innerHTML = `<strong>Required:</strong> Please insert Book Name and Author Name`;
    body.appendChild(error);
    // status = false;
  }
  else if(bookTitle !== "" || bookAuthor !== "") {    // checking if there is a similar book with the name and title. 
    // for(let i = 0; i < books.length; i++) {
      books.forEach((book)=> {
        if(book.title == bookTitle && book.author == bookAuthor){
          error.innerHTML = `<strong>Note: </strong> This book already exists in your Reading List.`
          body.appendChild(error);
          // status = false;
        }
      })
  } 
  else {
    books.push(list);
    list = {
      id: Date(),
      title: `${bookTitle}`,
      author: `${bookAuthor}`,
    };
  }
  
  console.log(books);
    

// storelocal();
form.reset();
}

// console.log(books)
 
function storelocal() {
  const books = localStorage.getItem(JSON.strin)
}




  // function input(e) {
  //  e.preventDefault();
  //  if(bookTitle == "" || bookAuthor == "") {
  //    console.log('Please enter the book name and author name!!')
  //  } else {
  //      const list = {
  //       id: Date(),
  //       title: bookTitle,
  //       author: bookAuthor,
  //     }
  //   }
  // books.push(list);  
  // storeList();
  // console.log(books);
  // }

  // function storeList() {

  // }











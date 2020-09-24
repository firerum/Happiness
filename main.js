
const bookList = document.getElementById("book-list");

//Delete Books
bookList.addEventListener("click", function(e) {
  if(e.target.className == "deleter") {
    const li = e.target.parentElement;
    bookList.removeChild(li);
  }
});

//Add New Books
const addBooks = document.forms[1];
addBooks.addEventListener("submit", e => {
  e.preventDefault();
  const inputedText = addBooks.querySelector('input[type="text"]').value;
  const li = document.createElement("li");
  const bookTitle = document.createElement("span");
  bookTitle.textContent = inputedText;
  const deleter = document.createElement("span");
  deleter.classList.add("deleter");
  deleter.textContent = "delete";
  li.appendChild(bookTitle);
  li.appendChild(deleter);
  bookList.appendChild(li);
})

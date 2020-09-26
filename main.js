
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

//Filter books
const bookSearch = document.forms[0].querySelector('input[type="text"]');
bookSearch.addEventListener("keyup", function(e) {
  const keyword = bookSearch.value.toLowerCase();
  const bookNames = document.querySelectorAll("li");
  bookNames.forEach(function(title) {
    if(title.textContent.toLowerCase().indexOf(keyword) !== -1) {
      title.style.display = "flex";
    }
    else {
      title.style.display = "none";
    }
  })
})

// Add a content tab at the end.
const tabs = document.querySelector(".tabs");
const panels = document.getElementsByClassName("panel");
tabs.addEventListener("click", function(e) {
  if(e.target.tagName == "LI") {
    const li = document.querySelector(e.target.dataset.target); // To check the data attribute on the li tags.
    Array.from(panels).forEach(panel => {
      if(panel == li) {
        panel.classList.add("active");
      }
      else {
        panel.classList.remove("active");
      }
    })
  }

});

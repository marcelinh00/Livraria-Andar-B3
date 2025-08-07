let allBooks = []
const emptyBookList = document.querySelector("#emptyBookList")
const fields = document.querySelectorAll("input")
const modal = document.querySelector("#myModal")
const modalTitle = document.querySelector("#modalTitle")
const synopsis = document.querySelector("#synopsis")
const txtSynopsis = document.querySelector("#txtSynopsis")
const btnRegister = document.querySelector("#btnRegister")
const btnSearch = document.querySelector("#btnSearch")

function findBook() {
  return allBooks.findIndex((elem) => elem.bookName === (event.target.parentNode.className))
}

function showSynopsis(event) {
  if (event.target.id === "btnSinopsys") {
    modalTitle.innerHTML = `Sinopse do livro "${allBooks[findBook()].bookName}"`
    txtSynopsis.innerHTML = allBooks[findBook()].synopsis
    modal.style.display = "block"
  }
}

function showError(bookName) {
  const contentModel = document.querySelector("#contentModel")
  modalTitle.innerHTML = `Livro "${bookName}" não encontrado!`
  txtSynopsis.innerHTML = ""
  contentModel.style.width = "50%"
  modal.style.display = "block"
}

function closeModal(event) {
  modal.style.display = "none"
}

function closeModalWindow(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

function clearFields() {
  fields.forEach(function (elem) {
    elem.value = ""
  })
  synopsis.value = ""
}

function createCard(bookCard, bookName, bookAuthor, bookPublisher, numberOfPages, bookCover) {
  bookCard.className = bookName
  bookCard.innerHTML = `
    <p id="bookTitle">${bookName}</p>
    <img src="${bookCover}"/>
    Autor: ${bookAuthor}
    <br>Editora: ${bookPublisher}
    <br>Págs: ${numberOfPages}
    <button id="btnSinopsys">Sinopse</button>
    <button id="btnRemove">Remover</button>
    `
}

function appendElements(divSelect, bookCard) {
  const btnCloseModal = document.querySelector("#btnCloseModal")
  divSelect.append(bookCard)
  divSelect.addEventListener("click", showSynopsis)
  btnCloseModal.addEventListener("click", closeModal)
  window.addEventListener("click", closeModalWindow)
}

function removeCard(parentDiv) {
  return function remove(event) {
    if (event.target.id === "btnRemove") {
      parentDiv.removeChild(event.target.parentNode)
      if (allBooks.splice(findBook(), 1)) {
        alert(`Livro "${event.target.parentNode.className}" removido com sucesso!`)
      }
    }
  }
}

function registerBook() {
  const listOfAllBooks = document.querySelector("#listOfAllBooks")
  const bookName = document.querySelector("#bookName").value
  const bookAuthor = document.querySelector("#bookAuthor").value
  const bookPublisher = document.querySelector("#bookPublisher").value
  const numberOfPages = Number(document.querySelector("#numberOfPages").value)
  const bookCover = document.querySelector("#bookCover").value

  event.preventDefault()

  allBooks.push(
    {
      bookName,
      bookAuthor,
      bookPublisher,
      numberOfPages,
      bookCover,
      synopsis: synopsis.value
    })

  emptyBookList.remove()
  const bookCard = document.createElement("div")

  createCard(bookCard, bookName, bookAuthor, bookPublisher, numberOfPages, bookCover)
  appendElements(listOfAllBooks, bookCard)

  const remove = removeCard(listOfAllBooks)
  listOfAllBooks.addEventListener("click", remove)

  clearFields()
}

function searchBook() {
  const bookNameSearch = document.querySelector("#bookNameSearch").value
  const listOfBooksSearch = document.querySelector("#listOfBooksSearch")
  const foundBooks = document.querySelector("#foundBooks")
  const bookCard = document.createElement("div")

  foundBooks.innerHTML = ""
  listOfBooksSearch.append(foundBooks)

  const findBook = allBooks.filter(elem => elem.bookName === bookNameSearch)

  if (findBook.length !== 0) {
    findBook.forEach(elem => {
      createCard(bookCard, elem.bookName, elem.bookAuthor, elem.bookPublisher, elem.numberOfPages, elem.bookCover)
      appendElements(foundBooks, bookCard)
    })
  } else {
    showError(bookNameSearch)
  }

  const remove = removeCard(foundBooks)
  listOfBooksSearch.addEventListener("click", remove)

  clearFields()
}

btnRegister.addEventListener("click", registerBook)
btnSearch.addEventListener("click", searchBook)

const track = document.getElementById('carousel-track');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.getElementById('carousel-prev');
const nextBtn = document.getElementById('carousel-next');
let currentIndex = 0;

function updateCarousel() {
  track.style.transform = `translateX(${-340 * currentIndex}px)`;
}

prevBtn.onclick = () => {
  currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
  updateCarousel();
};

nextBtn.onclick = () => {
  currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
  updateCarousel();
};

updateCarousel();

/* Carrossel de Livros */
<div class="carousel-container">
  <button class="carousel-btn" id="carousel-prev">&#10094;</button>
  <div class="carousel" id="carousel">
    <div class="carousel-item">
      <img src="https://covers.openlibrary.org/b/id/10523338-L.jpg" alt="Dom Casmurro">
      <h4>Dom Casmurro</h4>
      <p>Machado de Assis</p>
    </div>
    <div class="carousel-item">
      <img src="https://covers.openlibrary.org/b/id/11153247-L.jpg" alt="O Primo Basílio">
      <h4>O Primo Basílio</h4>
      <p>Eça de Queirós</p>
    </div>
    <div class="carousel-item">
      <img src="https://covers.openlibrary.org/b/id/10909257-L.jpg" alt="Memórias Póstumas">
      <h4>Memórias Póstumas</h4>
      <p>Machado de Assis</p>
    </div>
    <div class="carousel-item">
      <img src="https://covers.openlibrary.org/b/id/10523339-L.jpg" alt="Senhora">
      <h4>Senhora</h4>
      <p>José de Alencar</p>
    </div>
    <div class="carousel-item">
      <img src="https://m.media-amazon.com/images/I/81n5p2nQ2jL._SY466_.jpg" alt="A Empregada">
      <h4>A Empregada</h4>
      <p>Freida McFadden</p>
    </div>
    <div class="carousel-item">
      <img src="https://m.media-amazon.com/images/I/81wFMYNQ1wL._SY466_.jpg" alt="A Paciente Silenciosa">
      <h4>A Paciente Silenciosa</h4>
      <p>Alex Michaelides</p>
    </div>
    <div class="carousel-item">
      <img src="https://m.media-amazon.com/images/I/81vpsIs58WL._SY466_.jpg" alt="Garota Exemplar">
      <h4>Garota Exemplar</h4>
      <p>Gillian Flynn</p>
    </div>
    <div class="carousel-item">
      <img src="https://m.media-amazon.com/images/I/81ZLwAwDh2L._SY466_.jpg" alt="O Homem de Giz">
      <h4>O Homem de Giz</h4>
      <p>C.J. Tudor</p>
    </div>
    <div class="carousel-item">
      <img src="https://m.media-amazon.com/images/I/81wFMYNQ1wL._SY466_.jpg" alt="A Mulher na Janela">
      <h4>A Mulher na Janela</h4>
      <p>A.J. Finn</p>
    </div>
    <div class="carousel-item">
      <img src="https://m.media-amazon.com/images/I/81t2CVWEsUL._SY466_.jpg" alt="O Silêncio dos Inocentes">
      <h4>O Silêncio dos Inocentes</h4>
      <p>Thomas Harris</p>
    </div>
  </div>
  <button class="carousel-btn" id="carousel-next">&#10095;</button>
</div>
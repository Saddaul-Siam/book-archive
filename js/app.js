const errorDiv = document.getElementById('error-message');
const spinner = document.getElementById('spinner');
const searchBook = () => {
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  // clear data
  searchField.value = '';
  if (searchText === "") {
    errorDiv.innerText = 'please enter your book name';
    return
  }
  else {
    //clear
    errorDiv.innerText = "";

  }
  // load data
  spinner.classList.remove("d-none")
  fetch(`https://openlibrary.org/search.json?q=${searchText}`)
    .then(res => res.json())
    .then(data => displaySearchResult(data.docs))
    .finally(() => { spinner.classList.add("d-none") })
};

const displaySearchResult = books => {
  const searchResult = document.getElementById('search-result');
  searchResult.textContent = '';
  books.forEach(book => {
    console.log(book);
    // resultFount
    const resultFount = document.getElementById('result-fount');
    resultFount.innerText = ""
    resultFount.innerText = `${books.length}`;
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
          <div class="card h-100">
          <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top h-50 img-fluid"></img>
              <div class="card-body">
                  <h5 class="card-title">Book name: ${book.title}</h5>
                  <p class="card-text">Author name: ${book.author_name}</p>
                  <p class="card-text">publisher: ${book.publisher}</p>
                  <p class="card-text">First publish: ${book.first_publish_year}</p>
              </div>
          </div>
          `;
    searchResult.appendChild(div);
  });
}


const searchBook = () => {
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  // clear data
  searchField.value = '';
  if (searchField.value == '') {
    document.getElementById('error-message').style.display = 'block';
  }

  // load data
  fetch(`https://openlibrary.org/search.json?q=${searchText}`)
    .then(res => res.json())
    .then(data => displaySearchResult(data.docs))

}
searchBook()

const displaySearchResult = books => {
  const searchResult = document.getElementById('search-result');
  searchResult.textContent = '';
  books.forEach(book => {
    console.log(book);
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
          <div class="card h-100">
          <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="..."></img>
              <div class="card-body">
                  <h5 class="card-title">${book.title}</h5>
                  <p class="card-text">${book.author_name}</p>
                  <p class="card-text">${book.first_publish_year}</p>
              </div>
          </div>
          `;
    searchResult.appendChild(div);
  });

}

const searchBooks = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    
    // console.log(searchText);
    searchField.value = '';
    const url = `https://openlibrary.org/search.json?q=${searchText}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayResult(data.docs))
}
const displayResult = docs => {
    console.log(docs);
    
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    docs.forEach(doc => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100 w-75 mx-auto">
        
            <img src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="card-img-top w-100" alt="...">
            <div class="card-body">
              
              
              <h5 class="card-title">${doc.title}</h5>
              <p class="card-text text-danger">Author Name : ${doc.author_name}</p>
              <p class="card-text">Publish Year and Month : ${doc.publish_date}</p>
            </div>
          </div>
        `;
        searchResult.appendChild(div);
    });
}

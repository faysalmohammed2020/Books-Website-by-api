 document.getElementById('error-message').style.display = 'none';
 const toggleSpinner = displayStyle =>{
    document.getElementById('spinner').style.display = displayStyle;
}
 const toggleResult = displayStyle =>{
    document.getElementById('search-result').style.display = displayStyle;
}
 
 const searchBooks = () => {
     const searchField = document.getElementById('search-field');
     const searchText = searchField.value;

     // console.log(searchText);
    //  const toggleSpinner = displayStyle =>{
    //     document.getElementById('spinner').style.display = displayStyle;
    // }
     
     document.getElementById('error-message').style.display = 'none';
     const url = `https://openlibrary.org/search.json?q=${searchText}`;
     
     //error handling
     if (searchField.value === "") {
         document.getElementById('error-message').style.display = 'block';

     }
     
     else {
         fetch(url)
             .then(res => res.json())
             .then(data => displayResult(data.docs))
     }
     searchField.value = '';
     toggleSpinner('block');
      toggleResult('none');
    
 }
 const displayError = error => {
     document.getElementById('error-message').style.display = 'block';
 }
 
 const displayResult = docs => {
     console.log(docs);

     const searchResult = document.getElementById('search-result');
     const resultFound = document.getElementById('result-found');
     searchResult.textContent = '';
     docs.forEach(doc => {
         resultFound.classList.add('result');
         resultFound.innerHTML = `<h2>Total Books Found: ${docs.length}</h2>`;
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
     toggleSpinner('none');
      toggleResult('flex');
     
 }
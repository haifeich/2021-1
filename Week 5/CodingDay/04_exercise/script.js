/**Create an object called books in JavaScript. It should contain names of books for sale, information if the book has been sold or not, and the price of the book. Add 3 books to the object. Show the elements of this object listed alphabetically in the HTML, and add a way for the user to add books. Style the HTML using CSS flex.

Estimated time: 45 minutes
Total points: 45 */
let books = [
    {
        name: "Wizard of OZ, The",
        soldOut: true,
        price: 49.99
    },
    {
        name: "Harry Potter chapter 1",
        soldOut: true,
        price: 39.99
    },
    {
        name: "Pictures of Chile",
        soldOut: false,
        price: 89.99
    }
]

let section = document.getElementById("listofbooks");

function displayBooks(){
    section.innerHTML = "";
    books.sort(function(a,b){
        return a.name.localeCompare(b.name)
    });
    books.forEach(function(value,index) {
        let article = document.createElement("article");
        let h1 = document.createElement("h1")
        let details = document.createElement("p")
        h1.innerText = value.name;
        details.innerText = "Price " + value.price + "CHF "
        if (value.soldOut) {
            details.innerHTML = details.innerText + "/ This product is <strong>not available</strong>"
        } else {
            details.innerHTML = details.innerText + "/ This product is <strong><i>available<i></strong>!"
        }
        article.appendChild(h1);
        article.appendChild(details);
        section.appendChild(article);

    })
}


let bookName = document.getElementById("bookname");
let bookPrice = document.getElementById("bookprice");
let bookSoldOut = document.getElementById("booksoldout")
displayBooks();
document.getElementById("addbook").addEventListener("click",function(){
    books.push.apply(books, {name: bookName.value , price: bookPrice.value , soldOut: bookSoldOut.value })
    displayBooks();
})

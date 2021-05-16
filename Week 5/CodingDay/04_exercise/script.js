/**Create an object called books in JavaScript. It should contain names of books for sale, information if the book has been sold or not, and the price of the book. Add 3 books to the object. Show the elements of this object listed alphabetically in the HTML, and add a way for the user to add books. Style the HTML using CSS flex.

Estimated time: 45 minutes
Total points: 45 */
let books = [
    {
        name: 'Good',
        price: '15CHF',
        isSold: true
    },
    {
        name: 'Morning',
        price: '20CHF',
        isSold: true
    },
    {
        name: 'Everyone',
        price: '9CHF',
        isSold: false
    }
];

books.sort((a,b)=>{a.name.localeCompare(b.name)});
let showBook = document.querySelector('section');
books.forEach(value =>{
    let h2 = document.createElement('h2');
    h2 = value.name;
})
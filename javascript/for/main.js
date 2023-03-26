function task1() {
    let n = parseInt(prompt("Insert n:"));
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(parseInt(prompt("Insert numbers")));
    }
    arr.reverse();
    alert(arr.join(" "));
}

function task2() {
    let n = parseInt(prompt("Insert n:"));
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(parseInt(prompt("Insert numbers")));
    }
    alert(Math.max(...arr));
}

function task3() {
    let n = parseInt(prompt("Insert n:"));
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(parseInt(prompt("Insert numbers")));
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum+= arr[i];
    }
    let average = sum / n;
    alert(sum + " " + average)
}

function task4() {
    let n = parseInt(prompt("Insert n:"));
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(parseInt(prompt("Insert numbers")));
    }
    const squares = arr.map(num => num ** 2);

    alert(squares.join(" "));
}

function task5() {
    users = [
        {"login":"ilyas", "password": "qwerty"},
        {"login":"eldar", "password": "qqqqq"},
        {"login":"assylkhan", "password": "qweqwe"},
        {"login":"anel", "password": "asdasd"},
        {"login":"alibek", "password": "aaaaaa"}
    ];

    let login = prompt("Insert login : ");
    let password = prompt("Insert password : ");

    let result = "";
    let found = false;

    for(let usr of users){
        if(usr.login === login && usr.password === password){
            result = "Welcome " + usr.login;
            found = true;
            break;
        }
    }
    if(found){
        alert(result);
    }else{
        alert("Incorrect login or password");
    }
}

function task6() {
    const books = [
        {
            name: "Harry Potter and the Philosopher's Stone",
            author: "Joanne Rowling",
            isbn: "1233123",
            price: "50$"
        },
        {
            name: "Harry Potter and the Chamber of Secrets",
            author: "Joanne Rowling",
            isbn: "222332",
            price: "40$"
        },
        {
            name: "Harry Potter and the Prisoner of Azkaban",
            author: "Joanne Rowling",
            isbn: "452323",
            price: "55$"
        },
        {
            name: "The Catcher in the Rye",
            author: "J.D. Salinger",
            isbn: "44444",
            price: "30$"
        },
        {
            name: "To Kill a Mockingbird",
            author: "Harper Lee",
            isbn: "55555",
            price: "35$"
        }
    ];

    function searchByAuthor(author) {
        const results = [];
        for (let i = 0; i < books.length; i++) {
            if (books[i].author === author) {
                results.push(books[i]);
            }
        }
        return results;
    }

    const author = prompt("Insert author");
    const booksByAuthor = searchByAuthor(author);
    alert(`Результаты поиска книг по автору "${author}":`);
    for (let i = 0; i < booksByAuthor.length; i++) {
        alert(`${booksByAuthor[i].name} - ${booksByAuthor[i].author} - ${booksByAuthor[i].isbn} - ${booksByAuthor[i].price}`);
    }
}
















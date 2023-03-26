function task1() {
    let x = parseInt(prompt("Insert a number"));
    let y = ((x*x) + 2*x -1);
    alert(y);
}

function task2() {
    let a = parseInt(prompt("Insert a:"));
    let b = parseInt(prompt("Insert b:"));
    if (a % b == 0) {
        alert("Divisible")
    }
    else {
        alert("Not Divisible")
    }
}

function task3() {
    let name = prompt("Insert your name:");
    let surname = prompt("Insert your surname:");
    let city = prompt("Insert your city:");
    let age = prompt("Insert your age:");

    alert("Name: " + name + '\n' + "Surname: " + surname + '\n' + "City: " + city + '\n' + "Age: " + age);

}

function task4() {
    let a = parseInt(prompt("Insert a:"));
    let b = parseInt(prompt("Insert b:"));
    let c = parseInt(prompt("Insert c:"));

    alert("a + b + c = " + (a + b +c) + '\n' + "a - b - c = " + (a - b - c) + '\n' + "a * b * c = " + (a * b * c));
}

function task5() {
    let n = parseInt(prompt("Insert n:"));
    let k = parseInt(prompt("Insert k:"));

    let res = Math.floor(k / n);
    alert(res)
}

function task6() {
    let a = parseInt(prompt("Insert a:"));
    let b = parseInt(prompt("Insert b:"));

    let c = Math.sqrt((a * a) + (b * b));
    alert(c);
}

function task7() {
    let speed = parseInt(prompt("Insert speed:"));
    let distance = parseInt(prompt("Insert distance"));
    const time = 2.25;

    let res = distance/speed;
    if(res > time) {
        alert("NO, YOU CAN NOT REACH");
    }
    else {
        alert("YES, YOU CAN REACH");
    }
}

function task8() {
    let n = parseInt(prompt("Insert amount:"));
    const price = 120;

    let score = n * 120;
    if (score > 4000) {
        alert(score - (score/10) + " KZT");
    }
    else {
        alert(score + " KZT")
    }
}

function task9() {
    let kzt = parseInt(prompt("INSERT YOUR AMOUNT IN KZT:"));
    alert("1- CONVERT TO USD" + '\n' + "2- CONVERT TO EUR" + '\n' + "3- CONVERT TO GBP");
    let choice = parseInt(prompt());

    if (choice == 1 ) {
        alert(kzt + " KZT = " + (kzt/380).toFixed(2) + " USD")
    }
    else if (choice == 2) {
        alert(kzt + " KZT = " + (kzt/430).toFixed(2) + " EUR")
    }
    else if (choice == 3) {
        alert(kzt + " KZT = " + (kzt/480).toFixed(2) + " GBP")
    }
}

function task10() {
    let login = prompt("Insert your login:");
    let password = prompt("Insert your password:");

    if(login === "user" && password === "qwerty") {
        alert("Authentication completed");
    }
    else {
        alert("Invalid login or password");
    }
}

function task11() {
    let year = prompt("Insert year:");

    if (year % 4 == 0) {
        alert("YES");
    }
    else {
        alert("NO");
    }
}

function task12() {
    let ball = parseInt(prompt("Insert you score"));

    if (ball >= 90 ) {
        alert("A");
    }
    else if (ball < 90 && ball >= 75) {
        alert("B");
    }
    else if (ball < 75 && ball >= 60) {
        alert("C");
    }
    else if (ball < 60 && ball >= 50) {
        alert("D");
    }
    else {
        alert("F");
    }
}


function task13() {
    let choice = parseInt(prompt("Choose your branch:" + '\n' + "1 - Science, 2 - Humanitarian subjects, 3 - Art, 4 - Sport:"));
    if(choice == 1) {
        let specialization = parseInt(prompt("1 - Math, 2 - Physics:"));
        if (specialization == 1) {
            alert("You are Financier");
        }
        else if (specialization == 2) {
            alert("You are Engineer");
        }
    }
    else if (choice == 2) {
        let specialization = parseInt(prompt("1 - History, 2 - Foreign Languages:"));
        if (specialization == 1) {
            alert("You are Historic or Diplomat");
        }
        else if (specialization == 2) {
            alert("You are Translator");
        }
    }
    else if(choice == 3) {
        let specialization = parseInt(prompt("1 - Drawing, 2 -Singing:"));
        if (specialization == 1) {
            alert("You are Painter or Architect");
        }
        else if (specialization == 2) {
            alert("You are Singer or Tamada");
        }
    }
    else if(choice == 4) {
        let specialization = parseInt(prompt("1 - Team, 2 - Individual:"));
        if (specialization == 1) {
            alert("You are footballer or Basketball player");
        }
        else if (specialization == 2) {
            alert("You are boxer or tennis player");
        }
    }
}

function task14() {
    let a = parseInt(prompt("Insert a:"));
    let b = parseInt(prompt("Insert b:"));
    let c = parseInt(prompt("Insert c:"));

    if (a + b > c && a + c > b && b + c > a) {
        alert("YES");
    } else {
        alert("NO");
    }

}

function task15() {
    let amount = parseInt(prompt("Insert money:"));

    if(amount % 380 == 0) {
        alert("ONLY " + amount/380 + " USD")
    }
    else {
        alert(Math.floor(amount/380) + " USD and " + parseInt((100 * (amount % 380) / 380)) + " cents")
    }
}

function task16() {
    let n = parseInt(prompt("Insert n:"));

    if (n % 60 == 0) {
        alert("ONLY " + n / 60 + " HOURS")
    }
    else {
        alert(Math.floor(n / 60) + " HOURS and " + (n % 60) + " MINUTES")
    }
}

























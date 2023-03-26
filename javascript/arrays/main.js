function task1() {
    let n = parseInt(prompt("Insert n:"));
    let arr = [];
    for(let i = 0; i < n; i++) {
        arr.push(parseInt(prompt("Insert n numbers:")))
    }

    let m = parseInt(prompt("Insert m:"));
    let isExist = false;
    let index = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == m) {
            index = i;
            isExist = true;
        }
    }

    if (isExist) {
        alert("Yes " + index)
    }
    else {
        alert("No")
    }

}

function task2() {
    let  arr = []

    let count = 0;
    let mult = 1;

    while(true) {
        let a = parseInt(prompt("Insert numbers"))
        if (a!==0) {
            arr.push(a)
        }
        else {
            break;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        mult *= arr[i]
        count ++;
    }
    alert((mult**(1/count)).toFixed(3))
}

function task3() {
    let numbers = [];

    while (true) {
        let input = prompt("Insert numbers:");
        let num = parseInt(input);
        if (num === 0) {
            break;
        }
        if (num > 0) {
            numbers.push(num);
        }
    }

    alert(numbers.join(" "));

}

function task4() {
    let n = parseInt(prompt("Insert n:"));
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(parseInt(prompt("...")));
    }
    let mult = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            mult*=arr[i];
        }
    }
    alert(mult);
}

function task5() {
// массив с данными автомобилей
    var cars = [
        {"name":"Toyota", "price": 12000000, "year": 2015, "volume": 2.2},
        {"name":"Mercedes", "price": 70000000, "year": 2018, "volume": 3.8},
        {"name":"Toyota", "price": 7000000, "year": 2013, "volume": 2.0},
        {"name":"BMW", "price": 11000000, "year": 2011, "volume": 3.0},
        {"name":"Lexus", "price": 60000000, "year": 2017 ,"volume": 5.7}
    ];

// функция для поиска по имени
    function searchByName() {
        var name = prompt("INSERT NAME OF CAR:");
        var results = "";
        for (var i = 0; i < cars.length; i++) {
            if (cars[i].name === name) {
                results += cars[i].name + " - " + cars[i].year + " - " + cars[i].volume + " liters - " + cars[i].price + " KZT\n";
            }
        }
        if (results === "") {
            alert("No cars found with that name.");
        } else {
            alert(results);
        }
    }

// функция для поиска по году выпуска
    function searchByYear() {
        var yearStart = parseInt(prompt("INSERT YEAR START FROM:"));
        var yearEnd = parseInt(prompt("INSERT YEAR ENDS FROM:"));
        var results = "";
        for (var i = 0; i < cars.length; i++) {
            if (cars[i].year >= yearStart && cars[i].year <= yearEnd) {
                results += cars[i].name + " - " + cars[i].year + " - " + cars[i].volume + " liters - " + cars[i].price + " KZT\n";
            }
        }
        if (results === "") {
            alert("No cars found within that year range.");
        } else {
            alert(results);
        }
    }

// функция для поиска по объему двигателя
    function searchByVolume() {
        var volumeStart = parseFloat(prompt("INSERT ENGINE VOLUME START FROM:"));
        var volumeEnd = parseFloat(prompt("INSERT ENGINE VOLUME ENDS FROM:"));
        var results = "";
        for (var i = 0; i < cars.length; i++) {
            if (cars[i].volume >= volumeStart && cars[i].volume <= volumeEnd) {
                results += cars[i].name + " - " + cars[i].year + " - " + cars[i].volume + " liters - " + cars[i].price + " KZT\n";
            }
        }
        if (results === "") {
            alert("No cars found within that engine volume range.");
        } else {
            alert(results);
        }
    }

// функция для поиска по цене
    function searchByPrice() {
        var priceStart = parseInt(prompt("INSERT PRICE START FROM:"));
        var priceEnd = parseInt(prompt("INSERT PRICE ENDS FROM:"));
        var results = "";
        for (var i = 0; i < cars.length; i++) {
            if (cars[i].price >= priceStart && cars[i].price <= priceEnd) {
                results += cars[i].name + " - " + cars[i].year + " - " + cars[i].volume + " liters - " + cars[i].price + " KZT\n";
            }
        }
        if (results === "") {
            alert("No cars found within that price range.");
        } else {
            alert(results);
        }
    }
}
function task6() {
    let students = [];

    let arr = [];
    while (true) {
        choose = parseInt(prompt(
            "PRESS 1 TO ADD STUDENT\n" +
            "PRESS 2 TO LIST STUDENT\n" +
            "PRESS 0 TO EXIT\n")
        );

        if (choose==1) {
            newName = prompt("Insert name:");
            newSurname = prompt("Insert surname:");
            newGpa = parseFloat(prompt("Insert gpa:"));
            students.push(
                {
                    "name" : newName,
                    "surname" : newSurname,
                    "gpa" : newGpa
                }
            );
        }
        else if (choose==2) {
            for (var i = 0; i < students.length; i++) {
                arr.push(students[i].name + " "+ students[i].surname+" "+students[i].gpa+"\n")
            }
            alert(arr);
        }
        else {
            break;
        }
    }
}

let users = [
    {card1:"1000",card2:"2000",card3:"3000",card4:"4000",name:"Ainur Dauletova",cvv:"123"},
    {card1:"1234",card2:"5678",card3:"9012",card4:"3456",name:"Aliya Shakhuali",cvv:"789"},
    {card1:"9876",card2:"5432",card3:"1098",card4:"7654",name:"Askhat Kaiym",cvv:"456"}
];

function check() {
    let card1 = document.getElementById('card1');
    let card2 = document.getElementById('card2');
    let card3 = document.getElementById('card3');
    let card4 = document.getElementById('card4');
    let name = document.getElementById('name');
    let cvv = document.getElementById('cvv');


    for (let i = 0; i <users.length; i++) {
        if(card1.value === users[i].card1 && card2.value === users[i].card2 && card3.value === users[i].card3 && card4.value === users[i].card4
        && name.value === users[i].name && cvv.value === users[i].cvv) {
            alert("Transaction completed");
            break;
        }
        else {
            alert("Invalid Data");
            break;
        }
    }

}
let pics = ["./images/1.jpg","./images/2.jpg", "./images/3.jpg", "./images/4.jpg", "./images/5.jpg", "./images/6.jpg",
    "./images/7.jpg"];
let index = 0;

function nextPic() {
    let pctr = document.getElementById('pic');
    if (index < pics.length - 1) {
        index++;
    }
    else {
        index = 0;
    }
    pctr.src = pics[index];
}

function lastPic() {
    let pctr = document.getElementById('pic');
    if (index > 0) {
        index--;
    }
    else {
        index = pics.length-1;
    }
    pctr.src = pics[index];
}


let saveEL = document.getElementById("save-el");
console.log(saveEL)

let countEL = document.getElementById('count-el');
console.log(countEL)

let count = 0;

function increment() {
    count += 1
    countEL.innerHTML = count
}

function save() {
    let countStr = count + " - "
    saveEL.innerHTML += countStr
    countEL.innerHTML = 0
    count = 0
    console.log(count)
}
// document.getElementById("count-el").innerText = 5;

let count = 0;

// let myAge = 22 + 12;

// console.log(myAge);

function increment_count(){
    console.log("The  button was clicked")
    count++;
    document.getElementById("count-el").innerText = count;

}

function save(){
    console.log(count);
    document.getElementById("logging").textContent += count + " - ";
    count = 0;
    document.getElementById("count-el").innerText = 0;
}
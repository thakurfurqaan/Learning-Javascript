let n1 = document.getElementById("n1");
let n2 = document.getElementById("n2");
let res = document.getElementById("result");

function add(){
    r = parseInt(n1.value) + parseInt(n2.value);
    res.textContent = r;
}

function sub(){
    r = parseInt(n1.value) - parseInt(n2.value);
    res.textContent = r;
}

function mul(){
    r = parseInt(n1.value) * parseInt(n2.value);
    res.textContent = r;
}

function div(){
    r = parseInt(n1.value) / parseInt(n2.value);
    res.textContent = r;
}

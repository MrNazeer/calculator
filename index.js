let doc = document;
let input = doc.getElementById("input");    

function display (a){
    let b = doc.getElementById(a).innerHTML;
    input.value= input.value + b;
}

function result(){
    let c =  doc.querySelector("#input").value;
    input.value = eval(c);
}

function empty(){
    input.value =0;

}

function backspace(){
    let str= input.value;
    console.log(str);
    let l = str.length;
    console.log(l);
   str = str.slice(0,l-1);
    input.value = str;
}
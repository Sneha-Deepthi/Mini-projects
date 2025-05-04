document.addEventListener("keydown",function(event){
    if(event.key==="Enter" || event.key==="="){
        event.preventDefault();
        compute();
    }
});
const buttons=document.getElementsByTagName("button");
for(btn of buttons){
    btn.addEventListener("click",display);
}
let inp="";
let input=document.getElementById("input-container");

function display(){
    inp+=this.textContent;
    input.value=inp;
}
function compute(){
    let user_input = input.value;
    if(user_input !== ""){
        let result = eval(user_input.replace(/x/g, '*'));
        input.value = result;
        inp =result;
    }
}
function remove(){
    inp="";
    input.value="";
}
function add(){
    a=document.getElementById("ainput").value;
    b=document.getElementById("binput").value;
    c=parseInt(a)+parseInt(b);
    document.getElementById("answer").innerText=c;
}

function sub(){
    a=document.getElementById("ainput").value;
    b=document.getElementById("binput").value;
    c=parseInt(a)-parseInt(b);
    document.getElementById("answer").innerText=c;
}

function mul(){
    a=document.getElementById("ainput").value;
    b=document.getElementById("binput").value;
    c=parseInt(a)*parseInt(b);
    document.getElementById("answer").innerText=c;
}

function div(){
    a=document.getElementById("ainput").value;
    b=document.getElementById("binput").value;
    c=parseInt(a)/parseInt(b);
    document.getElementById("answer").innerText=c;
}

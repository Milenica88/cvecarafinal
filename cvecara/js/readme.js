var i=0;
function read(){
    if(!i){
        document.getElementById("more").style.display = "inline";
        document.getElementById("tacke").style.display = "none";
        document.getElementById("read").innerHTML = "Read less";
        i = 1;
    }
    else{
        document.getElementById("more").style.display = "none";
        document.getElementById("tacke").style.display = "inline";
        document.getElementById("read").innerHTML = "Read more";
        i = 0;

    }
}
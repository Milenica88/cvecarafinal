function validate(){
    var radio1 = document.getElementById('vrsta').checked;
    var radio2 = document.getElementById('vrstaa').checked;

    if(radio1 =="" && radio2==""){
        alert("Morate izabrati vrstu buketa");
        return false;
    }
    return true;
}
const tel = document.getElementById("telefon");
const form = document.getElementById("myform");
const name = documen.getElementById("ime");
form.addEventListener('submit', (e) => {
    let messages = []
    if(name.value === '' || name.value == null) {
        messages.push('Neophodno je uneti ime')
    }
    if(tel.value.lenght <= 8){
        alert("broj mora imati vise od 8 cifara")
    }
    if(messages.lengt > 0){
        e.preventDefault()
        alert("Neophodno je uneti ime");
    }


})
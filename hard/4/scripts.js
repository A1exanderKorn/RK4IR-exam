function send(){
    let pswd = document.getElementById('password').value;
    
    if(pswd.length < 8 || pswd.length > 16){
        let pole = document.getElementById('password');
        pole.setAttribute('style', 'background-color: red');
        pole.value="";
    }
    else{
        let pole = document.getElementById('password');
        pole.setAttribute('style', 'background-color: lightgreen;');
    }
}
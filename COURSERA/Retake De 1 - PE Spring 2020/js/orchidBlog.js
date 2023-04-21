function zoomout(anh){
    document.getElementById("currentimg").src= anh.src;
}

function warning(){
    var v1 = document.getElementById("yourname").value;
    var v2 = document.getElementById("email").value;
    var v3 = document.getElementById("content").value;

    if(v1 ==""|| v2=="" || v3==""){
        alert("“Please fill out all fields");
    }
    else{
        var c = confirm("Are you sure about your information?”");
        if(c){
            alert("Message sent");
        }
    }
}

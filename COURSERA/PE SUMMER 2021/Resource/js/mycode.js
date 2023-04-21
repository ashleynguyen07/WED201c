function myCode(){
    var v1 = document.getElementById("fullname").value;
    var v2 = document.getElementById("phone").value;
    var v3 = document.getElementById("email").value;

    if(v1=="" || v2=="" || v3==""){
        alert("Please fill all field");
    }
}
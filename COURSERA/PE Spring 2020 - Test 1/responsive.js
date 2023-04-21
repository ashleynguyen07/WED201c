function show(){
    var p3=document.getElementById("para3");
    var p2=document.getElementById("para2");
    if(p3.innerHTML=="SHOW ALL"){
        p2.style.display="block"
        p3.innerHTML="SHOW LESS"
    }
    else{
        p2.style.display="none"
        p3.innerHTML="SHOW ALL"
    }
}

function Enroll(){
    var v1=document.getElementById("t1").value;
    var v2=document.getElementById("t2").value;
    var v3=document.getElementById("t3").value;
    var v4=document.getElementById("t4").value;
    var v5=document.getElementById("t5").checked;
    var v6=document.getElementById("t6").checked;
    var v7=document.getElementById("t7").checked;

    if(v1=="" || v2=="" || v3=="" || v4==""){
        alert("please fill all fields");
    }
    else if(v3!=v4){
        alert("password/repassword is invalid");
    }
    else if(!v5&&!v6&&!v7){
        var c =confirm("would you like to choose options");
        if(!c){
            alert("start leaning WED201c");
        }
    }
}
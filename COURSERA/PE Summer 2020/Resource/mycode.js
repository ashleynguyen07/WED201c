function guiform(){
    var v1 = document.getElementsByTagName("input")[0].value;
    var v2 = document.getElementsByTagName("input")[1].value;
    var v3 = document.querySelector("textarea").value;
    var v4 = document.getElementById("selectdvdt").value;
    if(v1=="" && v2=="" && v3 ==""){
        alert("đừng để trống tên, email, nội dung");
    }
    else{
        if(v2==""){
            alert("đừng để trống email ");
        }
        if(v1==""){
            alert("đừng để trống tên");
        }
        if(v3==""){
            alert("đừng để trống nội dung");
        }
    }
    if(v1!="" && v2!="" && v3 !=""){
        var mywindow = window.open("","","width =500,height = 500");
        mywindow.document.write("<h1>Vui lòng xem lại</h1><p>tên của bạn: "+v1+"</p><p>email của bạn: "+v2+"</p><p>nội dung: "+v3+"</p><p>Đơn vị đào tạo bạn chọn: "+v4+"</p>");
    }
    
}
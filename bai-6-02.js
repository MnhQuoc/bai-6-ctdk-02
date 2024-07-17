function giaipt() {
    let a = +document.getElementById("a").value
    let b = +document.getElementById("b").value
    var x;
    document.getElementById("pt").innerHTML =  "Giải phương trình: " + a + "x +" + b + " = 0";
    if (a<=0) {
        document.getElementById("result").innerHTML =  "a không thể nhỏ hơn hoặc bằng 0 ";
    }
    else {
        x = -b/a
        document.getElementById("result").innerHTML =  "Kết quả của phương trình là: x = " + x;
    }

}

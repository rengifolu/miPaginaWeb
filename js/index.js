function myFunction() {
    var str = "Visit W3Schools";
    var patt1 = /w3schools/i;
    var result = str.match(patt1);
    document.getElementById("demo").innerHTML = result;
}

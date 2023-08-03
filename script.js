var dict = {
    "euro": 1,
    "dollar": 1.09,
    "real": 5.35,
    "pound": 0.86,


}


function convert() {
    var from = document.getElementById("coin").value;
    var to = document.getElementById("coinC").value;

    var amount = parseFloat(document.getElementById("amount").value);

    var result = ((amount * dict[to]) / dict[from]).toFixed(2);




    document.getElementById('message').innerHTML = "The result from " + from + " to " + to + " " + " is ";


    document.getElementById('result').innerHTML = result + " " + to;

}
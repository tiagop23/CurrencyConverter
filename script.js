var dict = {
    "Euro": 1,
    "US Dollar": 1.09,
    "Real": 5.35,
    "Pound": 0.86,
    "Yen": 155.68,
    "Australian dollar": 1.67,
    "Canadian dollar": 1.46
}


function convert() {
    var from = document.getElementById("coin").value;
    var to = document.getElementById("coinC").value;

    var amount = parseFloat(document.getElementById("amount").value);

    var result = ((amount * dict[to]) / dict[from]).toFixed(2);




    document.getElementById('message').innerHTML = "The result from " + from + " to " + to + " " + " is ";


    document.getElementById('result').innerHTML = result + " " + to;

}
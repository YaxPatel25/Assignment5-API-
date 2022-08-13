let a = document.getElementById("totalAmount").innerText
if (a = 0) {
    alert("0")
    document.getElementById("hideContent").style.display = "none";
}

let totalAmount = 0;


var cartWithAmount = {
    "cart1": 15,
    "cart2": 22,
    "cart3": 450,
    "cart4": 15,
    "cart5": 15,
    "cart6": 45,
    "cart7": 115
}
document.getElementById("remove0").style.display = "none";
document.getElementById("remove1").style.display = "none";
document.getElementById("remove2").style.display = "none";
document.getElementById("remove3").style.display = "none";
document.getElementById("remove4").style.display = "none";
document.getElementById("remove5").style.display = "none";
document.getElementById("remove6").style.display = "none";

const cart = ["cart1", "cart2", "cart3", "cart4", "cart5", "cart6", "cart7"];
let num0 = 1;
let num1 = 1;
let num2 = 1;
let num3 = 1;
let num4 = 1;
let num5 = 1;
let num6 = 1;

for (let x in cart) {

    document.getElementById(cart[x]).addEventListener("click", function () {

        let cartValue = 'cart' + x;


        let cartamount = 0
        if (cartValue == "cart0") {

            alert("Shirt added to the cart")
            cartamount = 15
            document.getElementById("remove0").style.display = "block";
            document.getElementById("num0").innerText = num0++;

        } else if (cartValue == "cart1") {

            alert("School Bag added to the cart")
            cartamount = 22
            document.getElementById("remove1").style.display = "block";
            document.getElementById("num1").innerText = num1++;
        }
        else if (cartValue == "cart2") {

            alert("Side Bag added to the cart")
            cartamount = 450
            document.getElementById("remove2").style.display = "block";
            document.getElementById("num2").innerText = num2++;
        }
        else if (cartValue == "cart3") {
            alert("Red T-Shirt added to the cart")
            cartamount = 15
            document.getElementById("remove3").style.display = "block";

            document.getElementById("num3").innerText = num3++;;
        }
        else if (cartValue == "cart4") {
            alert("Black T-Shirt added to the cart")
            cartamount = 15
            document.getElementById("remove4").style.display = "block";
            document.getElementById("num4").innerText = num4++;
        }
        else if (cartValue == "cart5") {
            alert("Cargo Pant added to the cart")
            cartamount = 45
            document.getElementById("remove5").style.display = "block";
            document.getElementById("num5").innerText = num5++;
        } else {
            alert("Hoodie added to the cart")
            cartamount = 115
            document.getElementById("remove6").style.display = "block";
            document.getElementById("num6").innerText = num6++;
        }
        totalAmount = totalAmount + cartamount;
        document.getElementById("totalAmount").innerText = totalAmount;
    })


}
document.getElementById("remove0").addEventListener("click", function () {
    let boxVal = 15
    let box = document.getElementById('totalAmount').innerText;
    let total = box - boxVal;
    document.getElementById("totalAmount").innerText = total;

    let itemNo = document.getElementById("num0").innerText;
    if (itemNo != 0) {
        itemNo = itemNo - 1;

        alert("Shirt is Removed")

        if (itemNo == 0) {
            num0 = 1
            document.getElementById("remove0").style.display = "none";
        } else {

            document.getElementById("num0").innerText = itemNo;
            num0 = itemNo + 1
        }

    } else {
        document.getElementById("remove0").style.display = "none";
    }
    totalAmount = total;
})

//School Bag
document.getElementById("remove1").addEventListener("click", function () {
    let boxVal = 22
    let box = document.getElementById('totalAmount').innerText;
    let total = box - boxVal;
    document.getElementById("totalAmount").innerText = total;

    let itemNo = document.getElementById("num1").innerText;
    if (itemNo != 0) {
        itemNo = itemNo - 1;

        alert("School Bag is Removed")

        if (itemNo == 0) {
            num1 = 1
            document.getElementById("remove1").style.display = "none";
        } else {

            document.getElementById("num1").innerText = itemNo;
            num1 = itemNo + 1
        }

    } else {
        document.getElementById("remove1").style.display = "none";
    }
    totalAmount = total;
})

//Side Bag : 450
document.getElementById("remove2").addEventListener("click", function () {
    let boxVal = 450
    let box = document.getElementById('totalAmount').innerText;
    let total = box - boxVal;
    document.getElementById("totalAmount").innerText = total;

    let itemNo = document.getElementById("num2").innerText;
    if (itemNo != 0) {
        itemNo = itemNo - 1;

        alert("Side Bag is Removed")

        if (itemNo == 0) {
            num2 = 1
            document.getElementById("remove2").style.display = "none";
        } else {

            document.getElementById("num2").innerText = itemNo;
            num2 = itemNo + 1
        }

    } else {
        document.getElementById("remove2").style.display = "none";
    }
    totalAmount = total;
})

//Red Tshirt : 15
document.getElementById("remove3").addEventListener("click", function () {
    let boxVal = 15
    let box = document.getElementById('totalAmount').innerText;
    let total = box - boxVal;
    document.getElementById("totalAmount").innerText = total;

    let itemNo = document.getElementById("num3").innerText;
    if (itemNo != 0) {
        itemNo = itemNo - 1;

        alert("Red Tshirt is Removed")

        if (itemNo == 0) {
            num3 = 1
            document.getElementById("remove3").style.display = "none";
        } else {

            document.getElementById("num3").innerText = itemNo;
            num3 = itemNo + 1
        }

    } else {
        document.getElementById("remove3").style.display = "none";
    }
    totalAmount = total;
})



//Black Tshirt : 15
document.getElementById("remove4").addEventListener("click", function () {
    let boxVal = 15
    let box = document.getElementById('totalAmount').innerText;
    let total = box - boxVal;
    document.getElementById("totalAmount").innerText = total;

    let itemNo = document.getElementById("num4").innerText;
    if (itemNo != 0) {
        itemNo = itemNo - 1;

        alert("Black Tshirt is Removed")

        if (itemNo == 0) {
            num4 = 1
            document.getElementById("remove4").style.display = "none";
        } else {

            document.getElementById("num4").innerText = itemNo;
            num4 = itemNo + 1
        }

    } else {
        document.getElementById("remove4").style.display = "none";
    }
    totalAmount = total;
})

//Cargo Pants : 15
document.getElementById("remove5").addEventListener("click", function () {
    let boxVal = 45
    let box = document.getElementById('totalAmount').innerText;
    let total = box - boxVal;
    document.getElementById("totalAmount").innerText = total;

    let itemNo = document.getElementById("num5").innerText;
    if (itemNo != 0) {
        itemNo = itemNo - 1;

        alert("Black Tshirt is Removed")

        if (itemNo == 0) {
            num5 = 1
            document.getElementById("remove5").style.display = "none";
        } else {

            document.getElementById("num5").innerText = itemNo;
            num5 = itemNo + 1
        }

    } else {
        document.getElementById("remove5").style.display = "none";
    }
    totalAmount = total;
})

//Hoodies : 115
document.getElementById("remove6").addEventListener("click", function () {
    let boxVal = 115
    let box = document.getElementById('totalAmount').innerText;
    let total = box - boxVal;
    document.getElementById("totalAmount").innerText = total;

    let itemNo = document.getElementById("num6").innerText;
    if (itemNo != 0) {
        itemNo = itemNo - 1;

        alert("Hoodie is Removed")

        if (itemNo == 0) {
            num6 = 1
            document.getElementById("remove6").style.display = "none";
        } else {

            document.getElementById("num6").innerText = itemNo;
            num6 = itemNo + 1
        }

    } else {
        document.getElementById("remove6").style.display = "none";
    }
    totalAmount = total;
})


